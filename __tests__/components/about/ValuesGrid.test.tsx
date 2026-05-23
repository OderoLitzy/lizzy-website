import { render, screen } from "@testing-library/react";
import ValuesGrid from "@/components/about/ValuesGrid";
import { coreValues } from "@/lib/content/data";

describe("ValuesGrid", () => {
  it("staggers each value card by 80ms", () => {
    render(<ValuesGrid values={coreValues} />);

    coreValues.forEach((value, index) => {
      const wrapper = screen.getByText(value.title).parentElement?.parentElement;
      if (index === 0) {
        expect(wrapper).not.toHaveStyle({ animationDelay: "80ms" });
      } else {
        expect(wrapper).toHaveStyle({ animationDelay: `${index * 80}ms` });
      }
    });
  });
});
