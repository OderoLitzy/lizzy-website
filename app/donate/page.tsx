import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "Donate",
  path: "/donate",
  description:
    "Support CHAKE's work empowering youth, women, and vulnerable communities in Homa Bay County. Give via M-Pesa, bank transfer, or volunteer your time.",
});

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-stone-bg">
      {/* Hero */}
      <section className="bg-teal-primary py-16 px-4 text-white text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Your Support Changes Lives
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-teal-light">
          Every contribution — large or small — directly funds education,
          health, and economic empowerment programs for youth and women in
          Homa Bay County.
        </p>
      </section>

      {/* Giving Methods */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-serif text-2xl font-semibold text-teal-dark mb-8 text-center">
          Ways to Give
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {/* M-Pesa */}
          <article className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 text-center">
            <div className="text-4xl mb-4" aria-hidden="true">📱</div>
            <h3 className="font-serif text-xl font-semibold text-teal-dark mb-3">
              M-Pesa
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Send your contribution directly via M-Pesa Paybill.
            </p>
            <div className="bg-teal-50 rounded-lg p-3 text-sm text-teal-dark font-mono">
              <p className="font-semibold">Paybill Number</p>
              <p className="text-lg mt-1">
                XXXXXX{" "}
                <span className="text-xs text-stone-400 font-sans font-normal block mt-1">
                  (confirm with CHAKE director)
                </span>
              </p>
            </div>
          </article>

          {/* Bank Transfer */}
          <article className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 text-center">
            <div className="text-4xl mb-4" aria-hidden="true">🏦</div>
            <h3 className="font-serif text-xl font-semibold text-teal-dark mb-3">
              Bank Transfer
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Make a direct bank transfer to the CHAKE organisational account.
            </p>
            <div className="bg-teal-50 rounded-lg p-3 text-sm text-teal-dark font-mono">
              <p className="font-semibold">Account Details</p>
              <p className="text-stone-400 text-xs font-sans font-normal mt-1">
                Bank name, account number, and branch will be provided on
                request — contact the director to confirm.
              </p>
            </div>
          </article>

          {/* In-Kind / Volunteer */}
          <article className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 text-center">
            <div className="text-4xl mb-4" aria-hidden="true">🤝</div>
            <h3 className="font-serif text-xl font-semibold text-teal-dark mb-3">
              In-Kind / Volunteer
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Donate goods, professional expertise, or your time as a volunteer.
              Every skill matters.
            </p>
            <Link
              href="/volunteer"
              className="inline-block bg-teal-primary hover:bg-teal-dark text-white font-semibold px-6 py-2 rounded-full text-sm transition-colors"
            >
              Volunteer with CHAKE
            </Link>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-amber-50 border-t border-amber-100 py-14 px-4 text-center">
        <h2 className="font-serif text-2xl font-semibold text-teal-dark mb-4">
          Get in Touch
        </h2>
        <p className="text-stone-600 mb-6 max-w-xl mx-auto">
          Have questions about donating or want to discuss a partnership?
          Reach out directly:
        </p>
        <div className="inline-flex flex-col gap-2 text-teal-primary font-medium">
          <a
            href="mailto:kechangeambassadors@gmail.com"
            className="hover:text-teal-dark transition-colors"
          >
            kechangeambassadors@gmail.com
          </a>
          <a
            href="tel:+254769629620"
            className="hover:text-teal-dark transition-colors"
          >
            +254 769 629 620
          </a>
        </div>
      </section>
    </div>
  );
}
