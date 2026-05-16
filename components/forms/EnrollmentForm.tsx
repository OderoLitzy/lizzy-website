"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const PROGRAMS = [
  "Girl/Boy Child Empowerment",
  "Reproductive Health",
  "Economic Empowerment",
  "Agribusiness",
  "Leadership Fellowship",
  "Other",
] as const;

type Program = (typeof PROGRAMS)[number];

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  program: Program | "";
  message?: string;
}

export default function EnrollmentForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { program: "" } });

  async function onSubmit(data: FormValues) {
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "enrollment",
          fields: {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            program: data.program,
            message: data.message ?? "",
          },
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div
        className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center"
        role="status"
      >
        <p className="text-teal-dark font-semibold text-lg">
          Thank you! We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  const isSubmitting = submitState === "submitting";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
      aria-label="Enrollment application form"
    >
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          className="w-full rounded-lg border border-stone-300 px-4 py-2 text-stone-900 focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName", { required: "Full name is required." })}
        />
        {errors.fullName && (
          <p id="fullName-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border border-stone-300 px-4 py-2 text-stone-900 focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", {
            required: "Email address is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Phone Number <span aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+254XXXXXXXXX"
          className="w-full rounded-lg border border-stone-300 px-4 py-2 text-stone-900 focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20"
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone", {
            required: "Phone number is required.",
            pattern: {
              value: /^\+254\d{9}$/,
              message:
                "Phone must be in the format +254XXXXXXXXX (Kenyan number).",
            },
          })}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Program */}
      <div>
        <label
          htmlFor="program"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Program <span aria-hidden="true">*</span>
        </label>
        <select
          id="program"
          className="w-full rounded-lg border border-stone-300 px-4 py-2 text-stone-900 focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20 bg-white"
          aria-describedby={errors.program ? "program-error" : undefined}
          {...register("program", { required: "Please select a program." })}
        >
          <option value="">— Select a program —</option>
          {PROGRAMS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.program && (
          <p id="program-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.program.message}
          </p>
        )}
      </div>

      {/* Message (optional) */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Message <span className="text-stone-400">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full rounded-lg border border-stone-300 px-4 py-2 text-stone-900 focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20 resize-y"
          placeholder="Tell us a bit about yourself or any questions you have…"
          {...register("message")}
        />
      </div>

      {/* Error banner */}
      {submitState === "error" && (
        <p role="alert" className="text-red-600 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-primary hover:bg-teal-dark disabled:bg-teal-primary/60 text-white font-semibold px-8 py-3 rounded-full transition-colors"
      >
        {isSubmitting ? "Submitting…" : "Apply Now"}
      </button>
    </form>
  );
}
