import type { Metadata } from "next";
import { focusAreas } from "@/lib/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "Initiatives",
  path: "/initiatives",
  description:
    "Explore CHAKE's five core focus areas: girl child empowerment, reproductive health, community mobilization, boys empowerment, and youth economic skills.",
});

// Extended details per focus area (index-matched to focusAreas in data.ts)
const beneficiaryDetails: string[] = [
  "Primary beneficiaries are girls aged 10–24 in Homa Bay County at risk of early marriage or school dropout. Programs include mentorship, scholarship linkages, and community dialogues with parents and village elders.",
  "Beneficiaries include adolescent girls, young women, and caregivers who lack access to reliable health information. CHAKE delivers stigma-free education in schools, churches, and community health posts.",
  "Families, community leaders, local chiefs, faith communities, and school administrators are engaged as agents of positive change. CHAKE facilitates dialogue forums and trains community champions.",
  "Boys aged 10–24 who lack safe spaces to discuss mental health and emotions. The program partners with schools and churches to provide peer support circles and trained mentors.",
  "Youth aged 15–35 — both in and out of school — who lack vocational skills or access to income. Training cohorts run seasonally with follow-up mentorship and linkages to micro-finance.",
];

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-stone-bg">
      {/* Hero */}
      <section className="bg-teal-primary py-16 px-4 text-white text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Our Initiatives
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-teal-light">
          Five integrated focus areas that address the root causes of
          vulnerability in Homa Bay County.
        </p>
      </section>

      {/* Focus Area Sections */}
      <section className="max-w-4xl mx-auto px-4 py-14 space-y-12">
        {focusAreas.map((area, index) => (
          <article
            key={area.title}
            className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl" aria-hidden="true">
                {area.icon}
              </span>
              <div>
                <h2 className="font-serif text-2xl font-semibold text-teal-dark">
                  {area.title}
                </h2>
              </div>
            </div>
            <p className="text-stone-700 leading-relaxed mb-4">
              {area.description}
            </p>
            <div className="border-t border-stone-100 pt-4">
              <h3 className="font-semibold text-teal-primary mb-2">
                Target Beneficiaries
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {beneficiaryDetails[index]}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
