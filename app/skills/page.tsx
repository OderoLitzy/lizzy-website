import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/animation/AnimatedSection";
import EditorialHero from "@/components/editorial/EditorialHero";
import { imageAsset } from "@/lib/content/data";
import type { ImageMetadata } from "@/lib/content/types";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "Skills",
  path: "/skills",
  description:
    "CHAKE skills development programs: youth entrepreneurship, agribusiness, money management, and digital literacy for Homa Bay youth.",
});

interface SkillsProgram {
  title: string;
  description: string;
  image: ImageMetadata;
}

const programs: SkillsProgram[] = [
  {
    title: "Youth Entrepreneurship",
    description:
      "Equipping young people with the mindset, tools, and practical knowledge to start and sustain small businesses. Participants learn business planning, customer service, and how to access micro-finance opportunities.",
    image: imageAsset("skills-skills-development"),
  },
  {
    title: "Agribusiness",
    description:
      "Modern farming techniques combined with market linkages so youth and women can turn agriculture into a reliable income stream. Topics include soil health, crop selection, post-harvest handling, and cooperative selling.",
    image: imageAsset("services-agribusiness-training"),
  },
  {
    title: "Money Management",
    description:
      "Financial literacy training covering budgeting, saving, credit, and investment basics. Participants leave with a personal financial plan and awareness of community savings groups (chamas).",
    image: imageAsset("services-economic-empowerment"),
  },
  {
    title: "Digital Literacy",
    description:
      "Practical introduction to smartphones, the internet, and productivity tools so participants can access information, market goods online, and engage with digital financial services safely.",
    image: imageAsset("skills-life-skills-training"),
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-stone-bg pt-24">
      <EditorialHero eyebrow="Training pathways" title="Skills Development" marker="SKL" />

      <section className="mx-auto max-w-2xl px-4 pt-10 text-center sm:px-6">
        <p className="text-lg leading-8 text-stone-600">
          Practical training that turns potential into sustainable livelihoods
          for youth and women across Homa Bay County.
        </p>
      </section>

      {/* Programs */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-serif text-2xl font-semibold text-teal-dark mb-8 text-center">
          Our Training Programs
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <AnimatedSection key={program.title} delay={index * 80}>
              <article className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] bg-stone-100">
                  <Image
                    src={program.image.src}
                    alt={program.image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-teal-dark mb-3">
                    {program.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-50 border-t border-amber-100 py-14 px-4 text-center">
        <h2 className="font-serif text-2xl font-semibold text-teal-dark mb-4">
          Ready to Build Your Future?
        </h2>
        <p className="text-stone-600 mb-8 max-w-xl mx-auto">
          Applications are open. Join a cohort and gain skills that create real
          economic independence.
        </p>
        <Link
          href="/enroll"
          className="inline-block bg-amber-accent hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Apply for Training
        </Link>
      </section>
    </div>
  );
}
