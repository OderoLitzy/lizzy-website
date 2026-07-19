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
});
