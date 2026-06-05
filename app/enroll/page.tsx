import type { Metadata } from "next";
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
    <div className="min-h-screen bg-stone-bg">
      {/* Hero */}
      <section className="bg-teal-primary py-16 px-4 text-white text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Apply for Training
        </h1>
        <p className="max-w-xl mx-auto text-lg text-teal-light">
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
