import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { brandAssets } from "@/lib/brand-assets";

const projectRoot = process.cwd();
const brandKitZip = "/home/prototypus/Downloads/CHAKE_Full_Brand_Kit.zip";

function readZipEntry(entry: string): Buffer {
  return Buffer.from(
    execFileSync("unzip", ["-p", brandKitZip, entry], {
      maxBuffer: 5 * 1024 * 1024,
    }),
  );
}

function readProjectFile(relativePath: string): Buffer {
  return fs.readFileSync(path.join(projectRoot, relativePath));
}

function readProjectText(relativePath: string): string {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8").trim();
}

function readIcoPngEntries(relativePath: string): Map<number, Buffer> {
  const iconFile = readProjectFile(relativePath);
  const imageCount = iconFile.readUInt16LE(4);
  const images = new Map<number, Buffer>();

  for (let index = 0; index < imageCount; index += 1) {
    const entryOffset = 6 + index * 16;
    const width = iconFile[entryOffset] || 256;
    const imageSize = iconFile.readUInt32LE(entryOffset + 8);
    const imageOffset = iconFile.readUInt32LE(entryOffset + 12);

    images.set(width, iconFile.subarray(imageOffset, imageOffset + imageSize));
  }

  return images;
}

describe("CHAKE brand assets", () => {
  it("publishes kit logos and social previews at stable public paths", () => {
    const publicAssets = [
      ["logos/logo.png", "public/brand/logo-primary.png", brandAssets.logos.primary],
      ["logos/logo-white.png", "public/brand/logo-white.png", brandAssets.logos.white],
      ["logos/logo-black.png", "public/brand/logo-black.png", brandAssets.logos.black],
      ["social/og-image.png", "public/brand/social/og-image.png", brandAssets.social.openGraph],
      ["social/twitter-card.png", "public/brand/social/twitter-card.png", brandAssets.social.twitter],
      ["social/linkedin-preview.png", "public/brand/social/linkedin-preview.png", brandAssets.social.linkedIn],
    ] as const;

    for (const [zipEntry, localPath, publicPath] of publicAssets) {
      expect(publicPath).toBe(`/${localPath.replace(/^public\//, "")}`);
      expect(readProjectFile(localPath)).toEqual(readZipEntry(zipEntry));
    }
  });

  it("uses Next-supported app metadata files for app icons and share previews", () => {
    const metadataFiles = [
      "app/opengraph-image.png",
      "app/twitter-image.png",
      "app/icon.png",
      "app/apple-icon.png",
      "app/favicon.ico",
    ];

    for (const metadataFile of metadataFiles) {
      expect(fs.existsSync(path.join(projectRoot, metadataFile))).toBe(true);
      expect(readProjectFile(metadataFile).byteLength).toBeGreaterThan(0);
    }

    expect(readProjectFile("app/opengraph-image.png")).toEqual(readZipEntry("social/og-image.png"));
    expect(readProjectFile("app/twitter-image.png")).toEqual(readZipEntry("social/twitter-card.png"));
    expect(readProjectFile("app/icon.png")).toEqual(readZipEntry("pwa/android-chrome-512x512.png"));
    expect(readProjectFile("app/apple-icon.png")).toEqual(readZipEntry("favicons/180.png"));
  });

  it("publishes brand alt text for Next metadata image files", () => {
    expect(readProjectText("app/opengraph-image.alt.txt")).toBe(
      "CHAKE — Change Ambassadors Kenya",
    );
    expect(readProjectText("app/twitter-image.alt.txt")).toBe(
      "CHAKE — Change Ambassadors Kenya",
    );
  });

  it("uses CHAKE favicon kit images in the browser favicon", () => {
    const faviconImages = readIcoPngEntries("app/favicon.ico");

    expect(faviconImages.get(16)).toEqual(readZipEntry("favicons/16.png"));
    expect(faviconImages.get(32)).toEqual(readZipEntry("favicons/32.png"));
    expect(faviconImages.get(48)).toEqual(readZipEntry("favicons/48.png"));
  });
});
