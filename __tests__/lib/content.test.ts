import {
  approvedImageAssets,
  homeImpactGallery,
  pageImageSections,
  teamMembers,
  services,
  projects,
  focusAreas,
  testimonials,
  impactStats,
} from "@/lib/content/data";

describe("Content data layer", () => {
  it("exports approved image metadata with local source paths and descriptive alt text", () => {
    expect(approvedImageAssets.length).toBeGreaterThan(0);

    for (const image of approvedImageAssets) {
      expect(image.src).toMatch(/^\/images\//);
      expect(image.alt).toBeTruthy();
      expect(["approved", "approved-named-team-portrait"]).toContain(image.status);
    }
  });

  it("has 11 team members", () => {
    expect(teamMembers).toHaveLength(11);
  });

  it("every team member has a name and title", () => {
    for (const m of teamMembers) {
      expect(m.name).toBeTruthy();
      expect(m.title).toBeTruthy();
    }
  });

  it("has 18 services", () => {
    expect(services).toHaveLength(18);
  });

  it("every service has a valid cluster", () => {
    const valid = ["health", "economic", "community", "legal"];
    for (const s of services) {
      expect(valid).toContain(s.cluster);
    }
  });

  it("maps every service and focus area to approved image metadata", () => {
    const imageIds = new Set(approvedImageAssets.map((image) => image.id));

    for (const service of services) {
      expect(imageIds).toContain(service.image.id);
    }

    for (const area of focusAreas) {
      expect(imageIds).toContain(area.image.id);
    }
  });

  it("has 4 active and 4 upcoming projects", () => {
    expect(projects.filter((p) => p.status === "active")).toHaveLength(4);
    expect(projects.filter((p) => p.status === "upcoming")).toHaveLength(4);
  });

  it("maps every project and team member to approved image metadata", () => {
    const imageIds = new Set(approvedImageAssets.map((image) => image.id));

    for (const project of projects) {
      expect(project.image).toBeDefined();
      expect(imageIds).toContain(project.image?.id);
    }

    for (const member of teamMembers) {
      expect(member.image).toBeDefined();
      expect(imageIds).toContain(member.image?.id);
      expect(member.photoUrl).toBe(member.image?.src);
    }
  });

  it("defines page-level image sections from approved image metadata", () => {
    const imageIds = new Set(approvedImageAssets.map((image) => image.id));

    expect(pageImageSections.map((section) => section.id)).toEqual(
      expect.arrayContaining(["home-impact-gallery", "about-organization-gallery", "services-cluster-gallery"]),
    );

    for (const section of pageImageSections) {
      expect(section.title).toBeTruthy();
      expect(section.images.length).toBeGreaterThan(0);
      for (const image of section.images) {
        expect(imageIds).toContain(image.id);
      }
    }
  });

  it("defines a curated home impact gallery with 5 to 7 approved images", () => {
    const imageIds = new Set(approvedImageAssets.map((image) => image.id));

    expect(homeImpactGallery.id).toBe("home-impact-gallery");
    expect(homeImpactGallery.images.length).toBeGreaterThanOrEqual(5);
    expect(homeImpactGallery.images.length).toBeLessThanOrEqual(7);

    for (const image of homeImpactGallery.images) {
      expect(imageIds).toContain(image.id);
      expect(image.alt).toBeTruthy();
    }
  });

  it("has 5 focus areas", () => {
    expect(focusAreas).toHaveLength(5);
  });

  it("has 3 testimonials", () => {
    expect(testimonials).toHaveLength(3);
  });

  it("every testimonial has quote, author, role, location", () => {
    for (const t of testimonials) {
      expect(t.quote).toBeTruthy();
      expect(t.author).toBeTruthy();
      expect(t.role).toBeTruthy();
      expect(t.location).toBeTruthy();
    }
  });

  it("has 4 impact stats", () => {
    expect(impactStats).toHaveLength(4);
  });
});
