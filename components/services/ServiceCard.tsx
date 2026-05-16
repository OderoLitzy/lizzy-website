import type { Service } from "@/lib/content/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-5 flex flex-col gap-2">
      <h4 className="font-semibold text-gray-900 text-base">{service.title}</h4>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </div>
  );
}
