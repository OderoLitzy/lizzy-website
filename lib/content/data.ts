import type {
  TeamMember, Service, Project, FocusArea, CoreValue, Testimonial, ImpactStat, ImageMetadata, PageImageSection,
} from "./types";

export const approvedImageAssets: ImageMetadata[] = [
  {
    id: "about-staff-group",
    src: "/images/about/chake-staff-group.jpeg",
    alt: "CHAKE staff and community representatives gathered together.",
    status: "approved",
    sensitivity: "consent-sensitive",
    usage: ["about", "home", "projects", "volunteer"],
  },
  {
    id: "home-girls-school-outreach",
    src: "/images/home/girls-school-outreach.jpeg",
    alt: "Girls participating in a CHAKE school or community outreach activity.",
    status: "approved",
    sensitivity: "minors",
    usage: ["home", "initiatives"],
  },
  {
    id: "home-youth-community-outreach",
    src: "/images/home/youth-community-outreach.jpeg",
    alt: "Young people participating in a CHAKE community outreach activity.",
    status: "approved",
    sensitivity: "minors",
    usage: ["home", "projects", "donate"],
  },
  {
    id: "home-youth-mentorship-session",
    src: "/images/home/youth-mentorship-session.jpeg",
    alt: "Youth participants gathered during a CHAKE mentorship or outreach session.",
    status: "approved",
    sensitivity: "minors",
    usage: ["home", "projects", "volunteer"],
  },
  {
    id: "home-skills-development-overview",
    src: "/images/home/skills-development-overview.jpeg",
    alt: "CHAKE skills development activity with participants learning practical skills.",
    status: "approved",
    sensitivity: "standard",
    usage: ["home", "skills"],
  },
  {
    id: "services-child-empowerment",
    src: "/images/services/child-empowerment.jpeg",
    alt: "Children or youth participating in a CHAKE empowerment activity.",
    status: "approved",
    sensitivity: "minors",
    usage: ["services", "initiatives"],
  },
  {
    id: "services-human-rights-education",
    src: "/images/services/human-rights-education.jpeg",
    alt: "CHAKE human rights education or advocacy activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["services", "initiatives"],
  },
  {
    id: "services-safe-spaces-support",
    src: "/images/services/safe-spaces-support.jpeg",
    alt: "CHAKE safe space or support group activity.",
    status: "approved",
    sensitivity: "consent-sensitive",
    usage: ["services", "initiatives"],
  },
  {
    id: "services-reproductive-health-education",
    src: "/images/services/reproductive-health-education.jpeg",
    alt: "CHAKE reproductive health education activity.",
    status: "approved",
    sensitivity: "health-sensitive",
    usage: ["services", "initiatives"],
  },
  {
    id: "services-teen-pregnancy-prevention",
    src: "/images/services/teen-pregnancy-prevention.jpeg",
    alt: "Teen pregnancy prevention or youth health education activity.",
    status: "approved",
    sensitivity: "health-sensitive",
    usage: ["services", "projects"],
  },
  {
    id: "services-family-planning-awareness",
    src: "/images/services/family-planning-awareness.jpeg",
    alt: "CHAKE family planning awareness or health education activity.",
    status: "approved",
    sensitivity: "health-sensitive",
    usage: ["services", "donate"],
  },
  {
    id: "services-unsafe-abortion-alternatives",
    src: "/images/services/unsafe-abortion-alternatives.jpeg",
    alt: "CHAKE education related to safe reproductive health services.",
    status: "approved",
    sensitivity: "health-sensitive",
    usage: ["services"],
  },
  {
    id: "services-healthcare-referrals",
    src: "/images/services/healthcare-referrals.jpeg",
    alt: "CHAKE healthcare referral or community health support activity.",
    status: "approved",
    sensitivity: "health-sensitive",
    usage: ["services"],
  },
  {
    id: "services-community-mobilization",
    src: "/images/services/community-mobilization.jpeg",
    alt: "Community members gathered for CHAKE mobilization or advocacy work.",
    status: "approved",
    sensitivity: "standard",
    usage: ["services", "donate"],
  },
  {
    id: "services-community-seminars",
    src: "/images/services/community-seminars.jpeg",
    alt: "CHAKE seminar with community or school participants.",
    status: "approved",
    sensitivity: "standard",
    usage: ["services", "projects"],
  },
  {
    id: "services-awareness-campaign",
    src: "/images/services/awareness-campaign.jpeg",
    alt: "CHAKE awareness campaign activity in the community.",
    status: "approved",
    sensitivity: "standard",
    usage: ["services"],
  },
  {
    id: "services-storytelling-forums",
    src: "/images/services/storytelling-forums.jpeg",
    alt: "CHAKE storytelling or peer support forum.",
    status: "approved",
    sensitivity: "consent-sensitive",
    usage: ["services"],
  },
  {
    id: "services-economic-empowerment",
    src: "/images/services/economic-empowerment.jpeg",
    alt: "CHAKE economic empowerment or livelihood training activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["services", "projects", "skills"],
  },
  {
    id: "services-income-generating-ideas",
    src: "/images/services/income-generating-ideas.jpeg",
    alt: "CHAKE income-generating ideas or livelihood support activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["services"],
  },
  {
    id: "services-agribusiness-training",
    src: "/images/services/agribusiness-training.jpeg",
    alt: "CHAKE agribusiness training or agricultural livelihood activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["services", "projects", "skills"],
  },
  {
    id: "services-partnership-referrals",
    src: "/images/services/partnership-referrals.jpeg",
    alt: "CHAKE partnership or referral linkage activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["services"],
  },
  {
    id: "services-homa-bay-community",
    src: "/images/services/homa-bay-community.jpeg",
    alt: "Homa Bay community context for CHAKE work.",
    status: "approved",
    sensitivity: "standard",
    usage: ["services", "about"],
  },
  {
    id: "projects-pamphlet-distribution",
    src: "/images/projects/pamphlet-distribution.jpeg",
    alt: "CHAKE pamphlet distribution or awareness material activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["projects", "services"],
  },
  {
    id: "projects-youth-leadership-forum",
    src: "/images/projects/youth-leadership-forum.jpeg",
    alt: "Youth participating in a CHAKE leadership or community forum.",
    status: "approved",
    sensitivity: "minors",
    usage: ["projects", "donate"],
  },
  {
    id: "skills-skills-development",
    src: "/images/skills/skills-development.jpeg",
    alt: "CHAKE skills development training activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["skills", "home"],
  },
  {
    id: "skills-life-skills-training",
    src: "/images/skills/life-skills-training.jpeg",
    alt: "CHAKE life skills training activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["skills", "services"],
  },
  {
    id: "skills-reproductive-health-training",
    src: "/images/skills/reproductive-health-training.jpeg",
    alt: "CHAKE reproductive health training or education activity.",
    status: "approved",
    sensitivity: "health-sensitive",
    usage: ["skills", "services"],
  },
  {
    id: "skills-environmental-sustainability-training",
    src: "/images/skills/environmental-sustainability-training.jpeg",
    alt: "CHAKE environmental sustainability or community training activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["skills", "initiatives"],
  },
  {
    id: "training-caregiving-training",
    src: "/images/training/caregiving-training.jpeg",
    alt: "CHAKE caregiving training pathway activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["enroll", "skills"],
  },
  {
    id: "training-house-manager-training",
    src: "/images/training/house-manager-training.jpeg",
    alt: "CHAKE house manager training pathway activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["enroll", "skills"],
  },
  {
    id: "training-community-work-training",
    src: "/images/training/community-work-training.jpeg",
    alt: "CHAKE community work or field training activity.",
    status: "approved",
    sensitivity: "standard",
    usage: ["enroll", "volunteer", "donate"],
  },
  {
    id: "team-elizabeth-achieng-odero",
    src: "/images/about/team/elizabeth-achieng-odero.jpeg",
    alt: "Portrait of Elizabeth Achieng' Odero, Director of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-paskalia-glory-akinyi",
    src: "/images/about/team/paskalia-glory-akinyi.jpeg",
    alt: "Portrait of Paskalia Glory Akinyi of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-ibsen-henric-ongidi",
    src: "/images/about/team/ibsen-henric-ongidi.jpeg",
    alt: "Portrait of Dr. Ibsen Henric Ongidi of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-noel-curt-odero",
    src: "/images/about/team/noel-curt-odero.jpeg",
    alt: "Portrait of Noel Curt Odero of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-caren-adhiambo-otieno",
    src: "/images/about/team/caren-adhiambo-otieno.jpeg",
    alt: "Portrait of Dr. Caren Adhiambo Otieno of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-solet-bunde",
    src: "/images/about/team/solet-bunde.jpeg",
    alt: "Portrait of Solet Bunde of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-frida-okeyo",
    src: "/images/about/team/frida-okeyo.jpeg",
    alt: "Portrait of Dr. Frida Okeyo of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-reinhard-otieno",
    src: "/images/about/team/reinhard-otieno.jpeg",
    alt: "Portrait of Reinhard Otieno of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-karen-atieno",
    src: "/images/about/team/karen-atieno.jpeg",
    alt: "Portrait of Dr. Karen Atieno of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-maryanne-adhiambo",
    src: "/images/about/team/maryanne-adhiambo.jpeg",
    alt: "Portrait of Maryanne Adhiambo of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
  {
    id: "team-isaac-opiyo",
    src: "/images/about/team/isaac-opiyo.jpeg",
    alt: "Portrait of Isaac Opiyo of CHAKE.",
    status: "approved-named-team-portrait",
    sensitivity: "named-person",
    usage: ["about", "team"],
  },
];

export function imageAsset(id: string): ImageMetadata {
  const image = approvedImageAssets.find((asset) => asset.id === id);

  if (!image) {
    throw new Error(`Unknown image asset: ${id}`);
  }

  return image;
}

export const homeHeroImage = imageAsset("home-girls-school-outreach");

export const teamMembers: TeamMember[] = [
  { name: "Elizabeth Achieng' Odero", title: "Director", photoUrl: imageAsset("team-elizabeth-achieng-odero").src, image: imageAsset("team-elizabeth-achieng-odero") },
  { name: "Paskalia Glory Akinyi", title: "Program Officer", photoUrl: imageAsset("team-paskalia-glory-akinyi").src, image: imageAsset("team-paskalia-glory-akinyi") },
  { name: "Dr. Ibsen Henric Ongidi", title: "Health Advisor", photoUrl: imageAsset("team-ibsen-henric-ongidi").src, image: imageAsset("team-ibsen-henric-ongidi") },
  { name: "Noel Curt Odero", title: "Youth Coordinator", photoUrl: imageAsset("team-noel-curt-odero").src, image: imageAsset("team-noel-curt-odero") },
  { name: "Dr. Caren Adhiambo Otieno", title: "Medical Officer", photoUrl: imageAsset("team-caren-adhiambo-otieno").src, image: imageAsset("team-caren-adhiambo-otieno") },
  { name: "Solet Bunde", title: "Community Mobilizer", photoUrl: imageAsset("team-solet-bunde").src, image: imageAsset("team-solet-bunde") },
  { name: "Dr. Frida Okeyo", title: "Reproductive Health Specialist", photoUrl: imageAsset("team-frida-okeyo").src, image: imageAsset("team-frida-okeyo") },
  { name: "Reinhard Otieno", title: "Field Officer", photoUrl: imageAsset("team-reinhard-otieno").src, image: imageAsset("team-reinhard-otieno") },
  { name: "Dr. Karen Atieno", title: "Public Health Officer", photoUrl: imageAsset("team-karen-atieno").src, image: imageAsset("team-karen-atieno") },
  { name: "Maryanne Adhiambo", title: "Education Coordinator", photoUrl: imageAsset("team-maryanne-adhiambo").src, image: imageAsset("team-maryanne-adhiambo") },
  { name: "Isaac Opiyo", title: "Operations Officer", photoUrl: imageAsset("team-isaac-opiyo").src, image: imageAsset("team-isaac-opiyo") },
];

export const services: Service[] = [
  // Health & Reproductive
  { title: "Life Skills & Sexual and Reproductive Health Education", description: "Comprehensive education on reproductive health, life choices, and healthy relationships.", cluster: "health", image: imageAsset("services-reproductive-health-education") },
  { title: "Teen Pregnancy Prevention Education", description: "Youth-targeted programs addressing the root causes and consequences of teenage pregnancy.", cluster: "health", image: imageAsset("services-teen-pregnancy-prevention") },
  { title: "Family Planning Awareness", description: "Information and referrals on family planning options for individuals and couples.", cluster: "health", image: imageAsset("services-family-planning-awareness") },
  { title: "Alternatives to Unsafe Abortion", description: "Healthcare guidance and referrals to safe, legal reproductive health services.", cluster: "health", image: imageAsset("services-unsafe-abortion-alternatives") },
  { title: "Healthcare Referrals", description: "Connecting community members to appropriate medical services and support networks.", cluster: "health", image: imageAsset("services-healthcare-referrals") },
  { title: "Menstrual Health Awareness", description: "Education and resources addressing menstrual health and hygiene in schools and communities.", cluster: "health", image: imageAsset("skills-reproductive-health-training") },
  // Economic
  { title: "Economic Empowerment Support", description: "Building financial capability and self-reliance for youth and women.", cluster: "economic", image: imageAsset("services-economic-empowerment") },
  { title: "Linking Families to Income-Generating Ideas", description: "Connecting households to sustainable livelihood opportunities.", cluster: "economic", image: imageAsset("services-income-generating-ideas") },
  { title: "Agribusiness and Economic Opportunity Awareness", description: "Training on modern agricultural practices as economic opportunities.", cluster: "economic", image: imageAsset("services-agribusiness-training") },
  { title: "Youth Skills Development", description: "Vocational and entrepreneurship training for young people.", cluster: "economic", image: imageAsset("home-skills-development-overview") },
  // Community
  { title: "Community Mobilization and Advocacy", description: "Grassroots organizing to address social challenges and amplify community voices.", cluster: "community", image: imageAsset("services-community-mobilization") },
  { title: "Seminars in Schools, Churches and Community Spaces", description: "Educational outreach delivered where communities gather.", cluster: "community", image: imageAsset("services-community-seminars") },
  { title: "Pamphlet and Awareness Campaigns", description: "Information distribution materials addressing youth challenges and opportunities.", cluster: "community", image: imageAsset("services-awareness-campaign") },
  { title: "Victim Storytelling Forums", description: "Safe spaces for peer support and narrative sharing among survivors.", cluster: "community", image: imageAsset("services-storytelling-forums") },
  { title: "Safe Spaces and Support Groups", description: "Secure community environments for vulnerable individuals to access support.", cluster: "community", image: imageAsset("services-safe-spaces-support") },
  // Legal & Rights
  { title: "Girl and Boy Child Empowerment Programs", description: "Youth-focused initiatives addressing gender equity and child rights.", cluster: "legal", image: imageAsset("services-child-empowerment") },
  { title: "Legal Rights Education", description: "Rights awareness training for youth, women, and vulnerable community members.", cluster: "legal", image: imageAsset("services-human-rights-education") },
  { title: "Partnerships and Referral Linkages", description: "Collaboration with county government, hospitals, and NGOs for integrated support.", cluster: "legal", image: imageAsset("services-partnership-referrals") },
];

export const projects: Project[] = [
  { title: "Teenage Pregnancy Awareness Campaigns", description: "Educating young people about reproductive health, life choices, and preventing teenage pregnancies across schools and community spaces in Homa Bay.", status: "active", imageUrl: imageAsset("services-teen-pregnancy-prevention").src, image: imageAsset("services-teen-pregnancy-prevention") },
  { title: "Community Education Seminars", description: "Programs providing communities with knowledge on youth development, gender equality, and social responsibility.", status: "active", imageUrl: imageAsset("services-community-seminars").src, image: imageAsset("services-community-seminars") },
  { title: "Pamphlet Distribution", description: "Disseminating informational pamphlets through schools and public areas addressing youth-related challenges and opportunities.", status: "active", imageUrl: imageAsset("projects-pamphlet-distribution").src, image: imageAsset("projects-pamphlet-distribution") },
  { title: "Youth Leadership Forums", description: "Platforms enabling young leaders to exchange perspectives, tackle community issues, and strengthen their capacity for positive change.", status: "active", imageUrl: imageAsset("projects-youth-leadership-forum").src, image: imageAsset("projects-youth-leadership-forum") },
  { title: "Economic Empowerment Workshops", description: "Training youth in entrepreneurial skills, money management, and launching small enterprises for sustainable livelihoods.", status: "upcoming", imageUrl: imageAsset("services-economic-empowerment").src, image: imageAsset("services-economic-empowerment") },
  { title: "Agribusiness Skills Programs", description: "Instruction in contemporary farming methods to create agricultural-based economic opportunities for young people.", status: "upcoming", imageUrl: imageAsset("services-agribusiness-training").src, image: imageAsset("services-agribusiness-training") },
  { title: "Youth Leadership Fellowship", description: "A mentoring initiative designed to develop responsible and impactful community leaders.", status: "upcoming", imageUrl: imageAsset("home-youth-mentorship-session").src, image: imageAsset("home-youth-mentorship-session") },
  { title: "School Mentorship Clubs", description: "School-based guidance structures supporting students across academic, interpersonal, and psychological dimensions.", status: "upcoming", imageUrl: imageAsset("home-girls-school-outreach").src, image: imageAsset("home-girls-school-outreach") },
];

export const focusAreas: FocusArea[] = [
  { title: "Girl Child Empowerment", description: "Preventing teenage pregnancy and early marriage through education and safe spaces.", icon: "👧", image: imageAsset("home-girls-school-outreach") },
  { title: "Menstrual & Reproductive Health", description: "Breaking stigma and providing resources for menstrual health and reproductive rights.", icon: "🌸", image: imageAsset("services-reproductive-health-education") },
  { title: "Community Mobilization", description: "Engaging families, leaders, and institutions to reduce harmful practices.", icon: "🤝", image: imageAsset("services-community-mobilization") },
  { title: "Boys Empowerment & Mental Health", description: "Supporting boys with emotional intelligence, mental wellness, and positive masculinity.", icon: "💪", image: imageAsset("home-youth-mentorship-session") },
  { title: "Youth Skills & Economic Empowerment", description: "Building vocational skills and entrepreneurship pathways for economic independence.", icon: "🌱", image: imageAsset("services-economic-empowerment") },
];

export const pageImageSections: PageImageSection[] = [
  {
    id: "home-impact-gallery",
    title: "Impact in pictures",
    images: [
      imageAsset("about-staff-group"),
      imageAsset("home-girls-school-outreach"),
      imageAsset("home-youth-community-outreach"),
      imageAsset("home-youth-mentorship-session"),
      imageAsset("home-skills-development-overview"),
      imageAsset("skills-skills-development"),
    ],
  },
  {
    id: "about-organization-gallery",
    title: "About organization gallery",
    images: [
      imageAsset("about-staff-group"),
      imageAsset("services-homa-bay-community"),
      imageAsset("training-community-work-training"),
    ],
  },
  {
    id: "services-cluster-gallery",
    title: "Services cluster gallery",
    images: [
      imageAsset("services-reproductive-health-education"),
      imageAsset("services-economic-empowerment"),
      imageAsset("services-community-mobilization"),
      imageAsset("services-human-rights-education"),
    ],
  },
];

export const homeImpactGallery = pageImageSections.find((section) => section.id === "home-impact-gallery")!;

export const coreValues: CoreValue[] = [
  { title: "Inclusive Leadership", description: "Participatory decision-making that reflects every voice in the community.", icon: "🫂" },
  { title: "Economic Empowerment", description: "Sustainable livelihoods as the foundation of lasting community wellbeing.", icon: "💼" },
  { title: "Transparency", description: "Ethical governance and accountability to the communities we serve.", icon: "🔍" },
  { title: "Technology & Innovation", description: "Leveraging technology to amplify our reach and impact.", icon: "💡" },
  { title: "Environmental Sustainability", description: "Climate resilience and environmental stewardship woven into all programs.", icon: "🌍" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "CHAKE taught me my rights and gave me the confidence to speak up. I now mentor younger girls in my village.",
    author: "Grace A.",
    role: "Program Graduate",
    location: "Homa Bay County",
  },
  {
    quote: "The community seminars changed how my family talks about health. We no longer keep silent about issues that affect our children.",
    author: "Peter O.",
    role: "Community Leader",
    location: "Rachuonyo South",
  },
  {
    quote: "After the skills training, I started a small agribusiness. CHAKE didn't just teach me — they gave me a future.",
    author: "Faith N.",
    role: "Youth Entrepreneur",
    location: "Homa Bay Town",
  },
];

export const impactStats: ImpactStat[] = [
  { label: "Founded", value: 2018 },
  { label: "Active Programs", value: 18 },
  { label: "Communities Reached", value: 40, suffix: "+" }, // TODO: confirm with director
  { label: "Volunteers", value: 30, suffix: "+" }, // TODO: confirm with director
];
