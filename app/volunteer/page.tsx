import type { Metadata } from "next";
import EditorialHero from "@/components/editorial/EditorialHero";
import VolunteerForm from "@/components/forms/VolunteerForm";
import ImageCardGrid from "@/components/visual/ImageCardGrid";
import { volunteerFieldWorkGallery } from "@/lib/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "Volunteer",
  path: "/volunteer",
  description:
    "Volunteer with Change Ambassadors Kenya and use your skills to support youth, women, and vulnerable communities in Homa Bay County.",
});

export default function VolunteerPage() {
  return (
    <div className="bg-stone-bg pt-24">
      <EditorialHero eyebrow="Get involved" title="Be the Change" marker="VOL" />
      <section className="mx-auto max-w-2xl px-4 pb-12 pt-10 text-center sm:px-6">
        <p className="text-stone-600 leading-relaxed">
          Volunteers are the backbone of CHAKE&apos;s work. Whether you are in Homa Bay or anywhere in the world, your skills and passion can transform lives. Fill in the form below and we will match you to an opportunity that fits.
        </p>
      </section>
      <ImageCardGrid title={volunteerFieldWorkGallery.title} images={volunteerFieldWorkGallery.images} />
      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <VolunteerForm />
      </section>
    </div>
  );
}
