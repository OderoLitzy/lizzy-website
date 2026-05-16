import ServicesList from "@/components/services/ServicesList";
import { services } from "@/lib/content/data";

export default function ServicesPage() {
  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-teal-primary mb-12">
          Services
        </h1>
        <ServicesList services={services} />
      </div>
    </main>
  );
}
