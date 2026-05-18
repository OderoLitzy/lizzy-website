import type { Metadata } from "next";
import VolunteerForm from "@/components/forms/VolunteerForm";

export const metadata: Metadata = { title: "Volunteer" };

export default function VolunteerPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      <p className="text-amber-accent font-semibold tracking-widest uppercase text-sm mb-2">Get Involved</p>
      <h1 className="font-serif text-4xl font-bold text-teal-dark mb-4">Be the Change</h1>
      <p className="text-stone-600 leading-relaxed mb-10">
        Volunteers are the backbone of CHAKE&apos;s work. Whether you are in Homa Bay or anywhere in the world, your skills and passion can transform lives. Fill in the form below and we will match you to an opportunity that fits.
      </p>
      <VolunteerForm />
    </div>
  );
}
