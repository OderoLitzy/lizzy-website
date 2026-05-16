import { teamMembers, services, projects, focusAreas, testimonials, impactStats } from "@/lib/content/data";

describe("Content data layer", () => {
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

  it("has 4 active and 4 upcoming projects", () => {
    expect(projects.filter((p) => p.status === "active")).toHaveLength(4);
    expect(projects.filter((p) => p.status === "upcoming")).toHaveLength(4);
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
