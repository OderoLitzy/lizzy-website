import Image from "next/image";
import type { TeamMember } from "@/lib/content/types";
import AnimatedSection from "@/components/animation/AnimatedSection";

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
          Our team advances CHAKE&apos;s mandate through community-based training for
          youth and dignified support for elderly people, disabled people, households,
          and vulnerable persons, working alongside families and local partners to
          strengthen everyday care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 80}>
              <article
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
              >
                {member.image || member.photoUrl ? (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-teal-primary/10 mb-4 ring-2 ring-teal-primary/10">
                    <Image
                      src={member.image?.src ?? member.photoUrl ?? ""}
                      alt={member.image?.alt ?? `Portrait of ${member.name}.`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-teal-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl text-teal-primary font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                <p className="text-teal-primary text-xs mt-1">{member.title}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
