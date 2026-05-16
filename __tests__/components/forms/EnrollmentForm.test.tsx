import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EnrollmentForm from "@/components/forms/EnrollmentForm";
import { server } from "../../src/mocks/server";
import { http, HttpResponse } from "msw";

describe("EnrollmentForm", () => {
  it("renders full name field", () => {
    render(<EnrollmentForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  });

  it("renders email field", () => {
    render(<EnrollmentForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("renders phone field", () => {
    render(<EnrollmentForm />);
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
  });

  it("renders program select", () => {
    render(<EnrollmentForm />);
    expect(screen.getByLabelText(/program/i)).toBeInTheDocument();
  });

  it("shows validation errors when submitting empty form", async () => {
    const user = userEvent.setup();
    render(<EnrollmentForm />);
    const submitBtn = screen.getByRole("button", { name: /apply/i });
    await user.click(submitBtn);
    await waitFor(() => {
      // At least one required field error should appear
      const errors = screen.getAllByRole("alert");
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  it("shows loading state or disables button when form submits", async () => {
    // Override handler so the request never resolves — lets us observe loading state
    server.use(
      http.post("/api/contact", () => new Promise(() => {}))
    );

    const user = userEvent.setup();
    render(<EnrollmentForm />);

    await user.type(screen.getByLabelText(/full name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/phone/i), "+254712345678");
    await user.selectOptions(
      screen.getByLabelText(/program/i),
      "Girl/Boy Child Empowerment"
    );

    const submitBtn = screen.getByRole("button", { name: /apply/i });
    await user.click(submitBtn);

    await waitFor(() => {
      const btn = screen.getByRole("button");
      expect(
        btn.hasAttribute("disabled") || btn.textContent?.match(/submitting|loading/i)
      ).toBeTruthy();
    });
  });

  it("shows success message after successful submission", async () => {
    // Uses the default handler which returns { success: true }
    const user = userEvent.setup();
    render(<EnrollmentForm />);

    await user.type(screen.getByLabelText(/full name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/phone/i), "+254712345678");
    await user.selectOptions(
      screen.getByLabelText(/program/i),
      "Girl/Boy Child Empowerment"
    );

    await user.click(screen.getByRole("button", { name: /apply/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/thank you! we'll be in touch soon\./i)
      ).toBeInTheDocument();
    });
  });

  it("shows error message after failed submission", async () => {
    server.use(
      http.post("/api/contact", () =>
        HttpResponse.json({ success: false }, { status: 500 })
      )
    );

    const user = userEvent.setup();
    render(<EnrollmentForm />);

    await user.type(screen.getByLabelText(/full name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/phone/i), "+254712345678");
    await user.selectOptions(
      screen.getByLabelText(/program/i),
      "Girl/Boy Child Empowerment"
    );

    await user.click(screen.getByRole("button", { name: /apply/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/something went wrong/i)
      ).toBeInTheDocument();
    });
  });
});
