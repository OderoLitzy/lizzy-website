import type { Metadata } from "next";
import EditorialHero from "@/components/editorial/EditorialHero";
import EnrollmentForm from "@/components/forms/EnrollmentForm";
import ImageCardGrid from "@/components/visual/ImageCardGrid";
import { enrollTrainingPathwayGallery } from "@/lib/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "Apply for Training",
  path: "/enroll",
  description:
    "Apply for a CHAKE skills development or empowerment program. Open to youth and women in Homa Bay County.",
});

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-stone-bg pt-24">
      <EditorialHero eyebrow="Join a cohort" title="Apply for Training" marker="APP" />

      <section className="mx-auto max-w-xl px-4 pt-10 text-center sm:px-6">
        <p className="text-lg leading-8 text-stone-600">
          Fill in the form below and a CHAKE program officer will contact you
          within 3 business days.
        </p>
      </section>

      <ImageCardGrid title={enrollTrainingPathwayGallery.title} images={enrollTrainingPathwayGallery.images} />

      {/* Form */}
      <section className="max-w-2xl mx-auto px-4 py-14">
        <EnrollmentForm />
      </section>
    </div>
  );
}
