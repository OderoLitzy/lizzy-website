import {
  approvedImageAssets,
  brandPlaceholderImage,
  homeImpactGallery,
  pageImageSections,
  teamMembers,
  services,
  projects,
  focusAreas,
  testimonials,
  impactStats,
} from "@/lib/content/data";
import { getOptionalContentImage } from "@/lib/content/images";
import type { TeamMember } from "@/lib/content/types";

const structuredTeamProfile: TeamMember = {
  name: "Structured Profile",
  title: "Program Lead",
  expertise: "Youth health and community program leadership.",
  qualifications: ["Public health training"],
  background: ["Led community outreach programs in Homa Bay County."],
};

const legacyTeamProfile: TeamMember = {
  name: "Legacy Profile",
  title: "Team Member",
};

const profileWithEmptyQualifications: TeamMember = {
  name: "Empty Qualifications",
  title: "Team Member",
  // @ts-expect-error qualifications must contain at least one entry when present.
  qualifications: [],
};

const profileWithEmptyBackground: TeamMember = {
  name: "Empty Background",
  title: "Team Member",
  // @ts-expect-error background must contain at least one entry when present.
  background: [],
};

describe("Content data layer", () => {
  it("exports approved image metadata with local source paths and descriptive alt text", () => {
    expect(approvedImageAssets.length).toBeGreaterThan(0);

    for (const image of approvedImageAssets) {
      expect(image.src).toMatch(/^\/images\//);
      expect(image.alt).toBeTruthy();
      expect(["approved", "approved-named-team-portrait"]).toContain(image.status);
      expect(image.status).not.toBe("brand-placeholder");
    }
  });

  it("uses the CHAKE logo as the shared placeholder when optional content images are missing", () => {
    const resolved = getOptionalContentImage(undefined, "Project image for Sponsor a Bag");

    expect(resolved.image).toEqual(brandPlaceholderImage);
    expect(resolved.image.src).toBe("/brand/logo-primary.png");
    expect(resolved.image.status).toBe("brand-placeholder");
    expect(resolved.alt).toBe("CHAKE logo placeholder for Project image for Sponsor a Bag.");
    expect(resolved.objectFitClassName).toBe("object-contain");
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

  it("uses the approved management-team document content in document order", () => {
    expect(
      teamMembers.map((member) => ({
        name: member.name,
        title: member.title,
        expertise: member.expertise,
        qualifications: member.qualifications,
        background: member.background,
      })),
    ).toEqual([
      {
        name: "Elizabeth Achieng' Odero",
        title: "Director",
        expertise: "Urban and regional planning, project planning, ESIA, and resettlement action planning.",
        qualifications: ["Urban and regional planning"],
        background: ["Project planning, ESIA, and resettlement action planning."],
      },
      {
        name: "Ms. Frida Adhiambo Okeyo",
        title: "Treasurer",
        expertise: "Community health, development, monitoring and evaluation, IT, and public health epidemiology.",
        qualifications: ["Public health epidemiology", "Information technology", "Monitoring and evaluation"],
        background: ["Lecturer and researcher in community health and development."],
      },
      {
        name: "Dr. Caren Adhiambo Otieno",
        title: "Organizing Secretary",
        expertise: "Botany, plant biology, research, intellectual property, and technology transfer.",
        qualifications: ["Botany and plant biology"],
        background: ["Lecturer and researcher with experience in intellectual property and technology transfer."],
      },
      {
        name: "Dr. Karen Otieno",
        title: "Education",
        expertise: "Education, journalism, and mass communication.",
        qualifications: ["Journalism and mass communication"],
        background: ["Senior lecturer with an education background."],
      },
      {
        name: "Dr. Henric Ibsen",
        title: "Project Manager",
        expertise: "Anatomy, medicine, research, youth sexual reproduction, and public health advocacy.",
        qualifications: ["Anatomy", "Medicine"],
        background: ["Research and advocacy in youth sexual reproduction and public health."],
      },
      {
        name: "Reinhard Otieno",
        title: "Communication Officer",
        expertise: "Mechatronic engineering, water and agricultural tools, and environmental safety.",
        qualifications: ["Mechatronic engineering"],
        background: ["Work with water tools, agricultural tools, and environmental safety."],
      },
      {
        name: "Paskalia Akinyi",
        title: "Secretary",
        expertise: "Gender and development.",
        qualifications: ["Gender and development"],
        background: ["Supports CHAKE's gender and development work."],
      },
      {
        name: "Dr. Noel Curt Odero",
        title: "Medical Doctor",
        expertise: "Anatomy and medicine.",
        qualifications: ["Anatomy", "Medicine"],
        background: ["Medical doctor trained at the University of Nairobi."],
      },
      {
        name: "Solet Amondi Saoke",
        title: "Assistant Secretary",
        expertise: "Food, nutrition and dietetics, monitoring and evaluation, and research assistance.",
        qualifications: ["Food, nutrition and dietetics", "Monitoring and evaluation"],
        background: ["Research assistance in food, nutrition, and dietetics contexts."],
      },
      {
        name: "Maryann Otieno",
        title: "Assistant Youth Coordinator",
        expertise: "Purchasing and supply management, procurement, and logistics.",
        qualifications: ["Purchasing and supply management"],
        background: ["Procurement and logistics support."],
      },
      {
        name: "Isaac Owuor",
        title: "Youth Coordinator",
        expertise: "Land resource planning and management, rights advocacy, and vulnerable-group development.",
        qualifications: ["Land resource planning and management"],
        background: ["Rights and development advocacy for vulnerable groups."],
      },
    ]);
  });

  it("supports structured team profile fields while legacy profiles migrate incrementally", () => {
    expect(structuredTeamProfile.expertise).toBeTruthy();
    expect(structuredTeamProfile.qualifications).toEqual(["Public health training"]);
    expect(structuredTeamProfile.background).toEqual(["Led community outreach programs in Homa Bay County."]);
    expect(legacyTeamProfile).toMatchObject({
      name: "Legacy Profile",
      title: "Team Member",
    });
    expect(profileWithEmptyQualifications).toBeDefined();
    expect(profileWithEmptyBackground).toBeDefined();
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

  it("keeps named team portrait asset paths mapped to existing team members", () => {
    expect(
      teamMembers.map((member) => ({
        name: member.name,
        imageId: member.image?.id,
        src: member.image?.src,
      })),
    ).toEqual([
      {
        name: "Elizabeth Achieng' Odero",
        imageId: "team-elizabeth-achieng-odero",
        src: "/images/about/team/elizabeth-achieng-odero.jpeg",
      },
      {
        name: "Ms. Frida Adhiambo Okeyo",
        imageId: "team-frida-okeyo",
        src: "/images/about/team/frida-okeyo.jpeg",
      },
      {
        name: "Dr. Caren Adhiambo Otieno",
        imageId: "team-caren-adhiambo-otieno",
        src: "/images/about/team/caren-adhiambo-otieno.jpeg",
      },
      {
        name: "Dr. Karen Otieno",
        imageId: "team-karen-atieno",
        src: "/images/about/team/karen-atieno.jpeg",
      },
      {
        name: "Dr. Henric Ibsen",
        imageId: "team-ibsen-henric-ongidi",
        src: "/images/about/team/ibsen-henric-ongidi.jpeg",
      },
      {
        name: "Reinhard Otieno",
        imageId: "team-reinhard-otieno",
        src: "/images/about/team/reinhard-otieno.jpeg",
      },
      {
        name: "Paskalia Akinyi",
        imageId: "team-paskalia-glory-akinyi",
        src: "/images/about/team/paskalia-glory-akinyi.jpeg",
      },
      {
        name: "Dr. Noel Curt Odero",
        imageId: "team-noel-curt-odero",
        src: "/images/about/team/noel-curt-odero.jpeg",
      },
      {
        name: "Solet Amondi Saoke",
        imageId: "team-solet-bunde",
        src: "/images/about/team/solet-bunde.jpeg",
      },
      {
        name: "Maryann Otieno",
        imageId: "team-maryanne-adhiambo",
        src: "/images/about/team/maryanne-adhiambo.jpeg",
      },
      {
        name: "Isaac Owuor",
        imageId: "team-isaac-opiyo",
        src: "/images/about/team/isaac-opiyo.jpeg",
      },
    ]);
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
