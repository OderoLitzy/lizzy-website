import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "Skills",
  path: "/skills",
  description:
    "CHAKE skills development programs: youth entrepreneurship, agribusiness, money management, and digital literacy for Homa Bay youth.",
});

const programs = [
  {
    title: "Youth Entrepreneurship",
    description:
      "Equipping young people with the mindset, tools, and practical knowledge to start and sustain small businesses. Participants learn business planning, customer service, and how to access micro-finance opportunities.",
  },
  {
    title: "Agribusiness",
    description:
      "Modern farming techniques combined with market linkages so youth and women can turn agriculture into a reliable income stream. Topics include soil health, crop selection, post-harvest handling, and cooperative selling.",
  },
  {
    title: "Money Management",
    description:
      "Financial literacy training covering budgeting, saving, credit, and investment basics. Participants leave with a personal financial plan and awareness of community savings groups (chamas).",
  },
  {
    title: "Digital Literacy",
    description:
      "Practical introduction to smartphones, the internet, and productivity tools so participants can access information, market goods online, and engage with digital financial services safely.",
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-stone-bg">
      {/* Hero */}
      <section className="bg-teal-primary py-16 px-4 text-white text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Skills Development
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-teal-light">
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
              <article className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-semibold text-teal-dark mb-3">
                  {program.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {program.description}
                </p>
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
