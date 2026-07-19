import Image from "next/image";
import type { TeamMember } from "@/lib/content/types";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { getOptionalContentImage } from "@/lib/content/images";

interface TeamGridProps {
  members: TeamMember[];
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className="py-16 bg-stone-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-teal-primary mb-4 text-center">
          Our Team
        </h2>
        <p className="max-w-3xl mx-auto mb-10 text-center text-base leading-7 text-gray-700">
          Board Members advance CHAKE&apos;s mandate through community-based training for
          youth and dignified support for elderly people, disabled people, households,
          and vulnerable persons, working alongside families and local partners to
          strengthen everyday care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => {
            const resolvedImage = getOptionalContentImage(
              member.image,
              `Team portrait for ${member.name}`,
            );
            const imageSrc = member.image ? resolvedImage.image.src : member.photoUrl ?? resolvedImage.image.src;
            const imageAlt = member.image ? resolvedImage.alt : member.photoUrl
              ? `Portrait of ${member.name}.`
              : resolvedImage.alt;
            const objectFitClassName = member.image || !member.photoUrl
              ? resolvedImage.objectFitClassName
              : "object-cover";
            const paddingClassName = resolvedImage.isPlaceholder && !member.photoUrl ? "p-2" : "";

            return (
              <AnimatedSection key={member.name} delay={index * 80}>
                <article
                  className="bg-white rounded-lg shadow p-6 h-full flex flex-col items-center text-center"
                >
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-teal-primary/10 mb-4 ring-2 ring-teal-primary/10">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="64px"
                      className={`${objectFitClassName} ${paddingClassName}`.trim()}
                    />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                  <p className="text-teal-primary text-xs mt-1">{member.title}</p>
                  {member.expertise ? (
                    <p className="mt-3 text-xs leading-5 text-gray-600">{member.expertise}</p>
                  ) : null}
                  {member.qualifications?.length || member.background?.length ? (
                    <details className="mt-5 w-full border-t border-gray-100 pt-4 text-left">
                      <summary className="cursor-pointer list-inside text-xs font-semibold text-teal-primary marker:text-amber-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-primary">
                        Qualifications and background
                      </summary>
                      <div className="mt-4 space-y-4 text-xs leading-5 text-gray-600">
                        {member.qualifications?.length ? (
                          <div>
                            <h3 className="font-semibold text-gray-900">Qualifications</h3>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {member.qualifications.map((qualification) => (
                                <li key={qualification}>{qualification}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {member.background?.length ? (
                          <div>
                            <h3 className="font-semibold text-gray-900">Professional background</h3>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {member.background.map((background) => (
                                <li key={background}>{background}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </details>
                  ) : null}
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
