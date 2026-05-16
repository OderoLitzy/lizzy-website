import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-teal-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-serif text-lg font-bold mb-2">Change Ambassadors Kenya</p>
          <p className="text-sm text-teal-100 leading-relaxed">
            Empowering youth, women, and vulnerable groups in Homa Bay County through education, health, and economic opportunity.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-teal-200">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-teal-100 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-teal-200">Contact</p>
          <ul className="space-y-2 text-sm text-teal-100">
            <li>kechangeambassadors@gmail.com</li>
            <li>+254 769 629 620</li>
            <li>Homa Bay County, Kenya</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="https://instagram.com" aria-label="Instagram" className="text-teal-100 hover:text-white">IG</a>
            <a href="https://facebook.com" aria-label="Facebook" className="text-teal-100 hover:text-white">FB</a>
            <a href="https://wa.me/254769629620" aria-label="WhatsApp" className="text-teal-100 hover:text-white">WA</a>
          </div>
        </div>
      </div>
      <div className="border-t border-teal-primary/40 py-4 text-center text-xs text-teal-200">
        © {new Date().getFullYear()} CHAKE Community Initiative. All rights reserved.
      </div>
    </footer>
  );
}
