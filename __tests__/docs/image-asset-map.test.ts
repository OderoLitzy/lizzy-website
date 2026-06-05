import fs from "fs";
import path from "path";

const assetMapPath = path.join(process.cwd(), "docs/plan/IMAGE_ASSET_MAP.md");
const assetMap = fs.readFileSync(assetMapPath, "utf8");
const redesignQuestions = fs.readFileSync(
  path.join(process.cwd(), "docs/plan/IMAGE_REDESIGN_GRILL_QUESTIONS.md"),
  "utf8",
);

type MarkdownRow = Record<string, string>;

function cleanCell(value: string): string {
  return value.replace(/^`(.+)`$/, "$1");
}

function readTableAfterHeading(heading: string): MarkdownRow[] {
  const start = assetMap.indexOf(`## ${heading}`);
  expect(start).toBeGreaterThanOrEqual(0);

  const nextHeading = assetMap.indexOf("\n## ", start + 1);
  const section = assetMap.slice(start, nextHeading === -1 ? undefined : nextHeading);
  const tableLines = section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|") && line.endsWith("|"));

  expect(tableLines.length).toBeGreaterThanOrEqual(2);

  const headers = tableLines[0]
    .split("|")
    .slice(1, -1)
    .map((header) => header.trim());

  return tableLines.slice(2).map((line) => {
    const values = line
      .split("|")
      .slice(1, -1)
      .map((value) => cleanCell(value.trim()));

    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
  });
}

describe("image asset map", () => {
  it("defines the review decisions used by the issue acceptance criteria", () => {
    for (const status of ["approved", "rejected", "needs-review", "needs-replacement", "rights-review"]) {
      expect(assetMap).toContain(`- \`${status}\`:`);
    }
  });

  it("gives approved parent-site assets normalized implementation paths", () => {
    const rows = [
      ...readTableAfterHeading("Brand And UI Assets"),
      ...readTableAfterHeading("Team Portraits"),
      ...readTableAfterHeading("Visual Content Architecture Assets"),
    ];

    const approvedRows = rows.filter((row) => row.Status.includes("approved"));

    expect(approvedRows.length).toBeGreaterThan(0);

    for (const row of approvedRows) {
      expect(row["Proposed local path"]).toMatch(/^\/(?:brand|images)\/[a-z0-9/-]+\.(?:jpe?g|png|webp|svg)$/);
    }
  });

  it("keeps timestamped WhatsApp portraits tied to a confirmation source before naming people", () => {
    const teamRows = readTableAfterHeading("Team Portraits");
    const timestampedNamedPortraits = teamRows.filter(
      (row) => row["Original filename"].includes("WhatsApp Image") && row.Name,
    );

    expect(timestampedNamedPortraits.length).toBeGreaterThan(0);
    expect(assetMap).toContain("The original parent site's `aboutus.html` explicitly maps these image files to names.");
  });

  it("accounts for every image from the parent-site inventory", () => {
    const inventorySection = redesignQuestions.slice(
      redesignQuestions.indexOf("## Parent Image Inventory"),
      redesignQuestions.indexOf("## Recommended Page Image Mapping"),
    );
    const inventoryImages = Array.from(inventorySection.matchAll(/^- `([^`]+)`/gm), ([, image]) => image);
    const uniqueInventoryImages = [...new Set(inventoryImages)];

    expect(uniqueInventoryImages.length).toBeGreaterThan(0);

    for (const image of uniqueInventoryImages) {
      expect(assetMap).toContain(`\`${image}\``);
    }
  });
});
