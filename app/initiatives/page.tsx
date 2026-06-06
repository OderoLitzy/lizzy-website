import type { Metadata } from "next";
import Image from "next/image";
import EditorialHero from "@/components/editorial/EditorialHero";
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
    <div className="min-h-screen bg-stone-bg pt-24">
      <EditorialHero eyebrow="Focus areas" title="Our Initiatives" marker="INI" />

      <section className="mx-auto max-w-2xl px-4 pt-10 text-center sm:px-6">
        <p className="text-lg leading-8 text-stone-600">
          Five integrated focus areas that address the root causes of
          vulnerability in Homa Bay County.
        </p>
      </section>

      {/* Focus Area Sections */}
      <section className="max-w-6xl mx-auto px-4 py-14 space-y-8">
        {focusAreas.map((area, index) => (
          <article
            key={area.title}
            className="grid overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="relative aspect-[4/3] bg-stone-100 md:aspect-auto">
              <Image
                src={area.image.src}
                alt={area.image.alt}
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-accent">
                  Focus Area {index + 1}
                </p>
                <h2 className="font-serif text-2xl font-semibold text-teal-dark">
                  {area.title}
                </h2>
              </div>
              <p className="text-stone-700 leading-relaxed mb-5">
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
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
