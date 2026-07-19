import Link from "next/link";
import Image from "next/image";
import { brandAssets } from "@/lib/brand-assets";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
];

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8h4.2v14H.4V8zm7.6 0h4.02v1.9h.06c.56-1.06 1.94-2.18 3.99-2.18 4.27 0 5.06 2.81 5.06 6.47V22h-4.2v-6.91c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V22H8V8z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M18.9 2h3.68l-8.04 9.19L24 22h-7.41l-5.8-7.59L4.15 22H.47l8.6-9.83L0 2h7.59l5.24 6.93L18.9 2zm-1.29 18.1h2.04L6.48 3.8H4.29L17.6 20.1z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M16.6 2c.38 2.2 1.65 3.51 3.8 3.65v3.77a7.48 7.48 0 01-3.74-1.05v6.98c0 3.83-2.6 6.65-6.27 6.65-3.37 0-6.1-2.42-6.1-5.8 0-3.8 3.03-6.16 6.88-5.62v3.9c-1.65-.52-2.96.2-2.96 1.62 0 1.1.89 1.92 2.03 1.92 1.3 0 2.2-.78 2.2-2.5V2h4.16z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.557 4.112 1.529 5.837L.077 23.52a.5.5 0 00.609.61l5.71-1.448A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.52-5.184-1.424l-.37-.222-3.844.976.997-3.814-.24-.384A9.964 9.964 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/change-ambassadors-233b383b7/",
    Icon: IconLinkedIn,
  },
  { label: "X", href: "https://x.com/CHAKE_Official", Icon: IconX },
  {
    label: "Instagram",
    href: "https://www.instagram.com/chake_kenya?igsh=b2x2cWFxbnZoZWd0",
    Icon: IconInstagram,
  },
  { label: "Facebook", href: "https://www.facebook.com/share/1DG8bnmg4H/", Icon: IconFacebook },
  { label: "TikTok", href: "https://vm.tiktok.com/ZS9MG5sHpQNB-n1Zf5/", Icon: IconTikTok },
  { label: "WhatsApp", href: "https://wa.me/254769629620", Icon: IconWhatsApp },
];

export default function SiteFooter() {
  return (
    <footer className="bg-teal-dark text-teal-50 mt-auto relative overflow-hidden">
      {/* CHAKE watermark */}
      <span
        className="absolute inset-x-0 bottom-0 text-center font-serif font-black text-teal-primary/20 leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 24vw, 22rem)" }}
        aria-hidden="true"
      >
        CHAKE
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div data-testid="footer-columns" className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src={brandAssets.logos.white}
              alt="CHAKE logo"
              width={1024}
              height={1024}
              className="h-20 w-20 object-contain mb-3"
            />
            <p className="text-teal-50 text-xs font-bold tracking-widest uppercase mb-4">
              Change Ambassadors Kenya
            </p>
            <p className="text-sm text-teal-50 leading-relaxed max-w-xs">
              Empowering youth, women, and vulnerable groups in Homa Bay County through education, health, and economic opportunity.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label} className="text-teal-50 hover:text-amber-accent transition-colors">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-bold mb-4 text-xs uppercase tracking-[0.25em] text-white">Navigation</p>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-teal-50 hover:text-amber-accent transition-colors hover:translate-x-1 inline-block transition-transform">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold mb-4 text-xs uppercase tracking-[0.25em] text-white">Contact</p>
            <ul className="space-y-3 text-sm text-teal-50">
              <li className="flex gap-2 items-start">
                <span className="mt-0.5 shrink-0">✉</span>
                <a href="mailto:kechangeambassadors@gmail.com" className="hover:text-amber-accent transition-colors">
                  kechangeambassadors@gmail.com
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-0.5 shrink-0">☎</span>
                <a href="tel:+254769629620" className="hover:text-amber-accent transition-colors">
                  +254 769 629 620
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-0.5 shrink-0">◉</span>
                <span>Homa Bay County, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-50">
          <span>© {new Date().getFullYear()} CHAKE Community Initiative. All rights reserved.</span>
          <span className="font-serif italic text-teal-50/70">Defining limits, building futures.</span>
        </div>
      </div>
    </footer>
  );
}
