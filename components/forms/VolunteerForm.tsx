"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface VolunteerFields {
  fullName: string;
  email: string;
  phone?: string;
  location: string;
  motivation: string;
}

export default function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VolunteerFields>();

  const onSubmit = async (data: VolunteerFields) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "volunteer", fields: data }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <p className="text-teal-primary font-serif text-2xl font-bold mb-2">Thank you!</p>
        <p className="text-stone-600">We&apos;ve received your expression of interest and will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-stone-700 mb-1">
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName", { required: "Full name is required" })}
          className="w-full border border-stone-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-primary focus:outline-none"
        />
        {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
          })}
          className="w-full border border-stone-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-primary focus:outline-none"
        />
        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-1">
          Phone <span className="text-stone-400 text-xs font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="w-full border border-stone-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-primary focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-stone-700 mb-1">
          Location / Country <span aria-hidden="true">*</span>
        </label>
        <input
          id="location"
          type="text"
          placeholder="e.g. Nairobi, Kenya or London, UK"
          {...register("location", { required: "Location is required" })}
          className="w-full border border-stone-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-primary focus:outline-none"
        />
        {errors.location && <p className="text-red-600 text-xs mt-1">{errors.location.message}</p>}
      </div>

      <div>
        <label htmlFor="motivation" className="block text-sm font-semibold text-stone-700 mb-1">
          Motivation <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="motivation"
          rows={5}
          placeholder="Tell us why you want to volunteer and what skills you bring..."
          {...register("motivation", { required: "Please share your motivation" })}
          className="w-full border border-stone-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-primary focus:outline-none resize-none"
        />
        {errors.motivation && <p className="text-red-600 text-xs mt-1">{errors.motivation.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 rounded-full bg-teal-primary text-white font-semibold hover:bg-teal-dark transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Express Interest"}
      </button>
    </form>
  );
}
