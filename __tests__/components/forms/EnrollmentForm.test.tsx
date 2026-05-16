import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EnrollmentForm from "@/components/forms/EnrollmentForm";

// Mock global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockReset();
});

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
    // fetch never resolves so we can observe loading state
    mockFetch.mockImplementation(() => new Promise(() => {}));
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
      expect(btn.hasAttribute("disabled") || btn.textContent?.match(/submitting|loading/i)).toBeTruthy();
    });
  });

  it("shows success message after successful submission", async () => {
    mockFetch.mockResolvedValue({ ok: true, json: async () => ({ ok: true }) });
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
});
