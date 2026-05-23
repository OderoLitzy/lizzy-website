import { render, screen } from "@testing-library/react";
import ServicesList from "@/components/services/ServicesList";
import { services } from "@/lib/content/data";

describe("ServicesList", () => {
  it("staggers service cards within each cluster by 80ms", () => {
    render(<ServicesList services={services} />);

    const healthServices = services.filter((service) => service.cluster === "health");
    healthServices.forEach((service, index) => {
      const wrapper = screen.getByText(service.title).parentElement?.parentElement;
      if (index === 0) {
        expect(wrapper).not.toHaveStyle({ animationDelay: "80ms" });
      } else {
        expect(wrapper).toHaveStyle({ animationDelay: `${index * 80}ms` });
      }
    });
  });
});
