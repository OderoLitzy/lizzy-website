import type {
  TeamMember, Service, Project, FocusArea, CoreValue, Testimonial, ImpactStat,
} from "./types";

export const teamMembers: TeamMember[] = [
  { name: "Elizabeth Achieng' Odero", title: "Director" },
  { name: "Paskalia Glory Akinyi", title: "Program Officer" },
  { name: "Dr. Ibsen Henric Ongidi", title: "Health Advisor" },
  { name: "Noel Curt Odero", title: "Youth Coordinator" },
  { name: "Dr. Caren Adhiambo Otieno", title: "Medical Officer" },
  { name: "Solet Bunde", title: "Community Mobilizer" },
  { name: "Dr. Frida Okeyo", title: "Reproductive Health Specialist" },
  { name: "Reinhard Otieno", title: "Field Officer" },
  { name: "Dr. Karen Atieno", title: "Public Health Officer" },
  { name: "Maryanne Adhiambo", title: "Education Coordinator" },
  { name: "Isaac Opiyo", title: "Operations Officer" },
];

export const services: Service[] = [
  // Health & Reproductive
  { title: "Life Skills & Sexual and Reproductive Health Education", description: "Comprehensive education on reproductive health, life choices, and healthy relationships.", cluster: "health" },
  { title: "Teen Pregnancy Prevention Education", description: "Youth-targeted programs addressing the root causes and consequences of teenage pregnancy.", cluster: "health" },
  { title: "Family Planning Awareness", description: "Information and referrals on family planning options for individuals and couples.", cluster: "health" },
  { title: "Alternatives to Unsafe Abortion", description: "Healthcare guidance and referrals to safe, legal reproductive health services.", cluster: "health" },
  { title: "Healthcare Referrals", description: "Connecting community members to appropriate medical services and support networks.", cluster: "health" },
  { title: "Menstrual Health Awareness", description: "Education and resources addressing menstrual health and hygiene in schools and communities.", cluster: "health" },
  // Economic
  { title: "Economic Empowerment Support", description: "Building financial capability and self-reliance for youth and women.", cluster: "economic" },
  { title: "Linking Families to Income-Generating Ideas", description: "Connecting households to sustainable livelihood opportunities.", cluster: "economic" },
  { title: "Agribusiness and Economic Opportunity Awareness", description: "Training on modern agricultural practices as economic opportunities.", cluster: "economic" },
  { title: "Youth Skills Development", description: "Vocational and entrepreneurship training for young people.", cluster: "economic" },
  // Community
  { title: "Community Mobilization and Advocacy", description: "Grassroots organizing to address social challenges and amplify community voices.", cluster: "community" },
  { title: "Seminars in Schools, Churches and Community Spaces", description: "Educational outreach delivered where communities gather.", cluster: "community" },
  { title: "Pamphlet and Awareness Campaigns", description: "Information distribution materials addressing youth challenges and opportunities.", cluster: "community" },
  { title: "Victim Storytelling Forums", description: "Safe spaces for peer support and narrative sharing among survivors.", cluster: "community" },
  { title: "Safe Spaces and Support Groups", description: "Secure community environments for vulnerable individuals to access support.", cluster: "community" },
  // Legal & Rights
  { title: "Girl and Boy Child Empowerment Programs", description: "Youth-focused initiatives addressing gender equity and child rights.", cluster: "legal" },
  { title: "Legal Rights Education", description: "Rights awareness training for youth, women, and vulnerable community members.", cluster: "legal" },
  { title: "Partnerships and Referral Linkages", description: "Collaboration with county government, hospitals, and NGOs for integrated support.", cluster: "legal" },
];

export const projects: Project[] = [
  { title: "Teenage Pregnancy Awareness Campaigns", description: "Educating young people about reproductive health, life choices, and preventing teenage pregnancies across schools and community spaces in Homa Bay.", status: "active" },
  { title: "Community Education Seminars", description: "Programs providing communities with knowledge on youth development, gender equality, and social responsibility.", status: "active" },
  { title: "Pamphlet Distribution", description: "Disseminating informational pamphlets through schools and public areas addressing youth-related challenges and opportunities.", status: "active" },
  { title: "Youth Leadership Forums", description: "Platforms enabling young leaders to exchange perspectives, tackle community issues, and strengthen their capacity for positive change.", status: "active" },
  { title: "Economic Empowerment Workshops", description: "Training youth in entrepreneurial skills, money management, and launching small enterprises for sustainable livelihoods.", status: "upcoming" },
  { title: "Agribusiness Skills Programs", description: "Instruction in contemporary farming methods to create agricultural-based economic opportunities for young people.", status: "upcoming" },
  { title: "Youth Leadership Fellowship", description: "A mentoring initiative designed to develop responsible and impactful community leaders.", status: "upcoming" },
  { title: "School Mentorship Clubs", description: "School-based guidance structures supporting students across academic, interpersonal, and psychological dimensions.", status: "upcoming" },
];

export const focusAreas: FocusArea[] = [
  { title: "Girl Child Empowerment", description: "Preventing teenage pregnancy and early marriage through education and safe spaces.", icon: "👧" },
  { title: "Menstrual & Reproductive Health", description: "Breaking stigma and providing resources for menstrual health and reproductive rights.", icon: "🌸" },
  { title: "Community Mobilization", description: "Engaging families, leaders, and institutions to reduce harmful practices.", icon: "🤝" },
  { title: "Boys Empowerment & Mental Health", description: "Supporting boys with emotional intelligence, mental wellness, and positive masculinity.", icon: "💪" },
  { title: "Youth Skills & Economic Empowerment", description: "Building vocational skills and entrepreneurship pathways for economic independence.", icon: "🌱" },
];

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
