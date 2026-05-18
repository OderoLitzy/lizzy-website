import ServiceClusterTabs from "@/components/editorial/ServiceClusterTabs";
import { services } from "@/lib/content/data";

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Editorial header */}
      <div className="bg-teal-dark py-16 px-4 sm:px-6 relative overflow-hidden">
        <span
          className="absolute right-4 top-4 font-serif font-black text-white/5 leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(6rem, 14vw, 12rem)" }}
          aria-hidden="true"
        >
          SVC
        </span>
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-amber-accent mb-4">
            What we offer
          </p>
          <h1
            className="font-serif font-black text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Our Services
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <ServiceClusterTabs services={services} />
      </div>
    </div>
  );
}
