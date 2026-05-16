import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VolunteerForm from "@/components/forms/VolunteerForm";

describe("VolunteerForm", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => jest.resetAllMocks());

  it("renders full name field", () => {
    render(<VolunteerForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  });

  it("renders email field", () => {
    render(<VolunteerForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("renders location field", () => {
    render(<VolunteerForm />);
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
  });

  it("renders motivation textarea", () => {
    render(<VolunteerForm />);
    expect(screen.getByLabelText(/motivation/i)).toBeInTheDocument();
  });

  it("shows success message after successful submission", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<VolunteerForm />);
    await userEvent.type(screen.getByLabelText(/full name/i), "Jane Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");
    await userEvent.type(screen.getByLabelText(/location/i), "Nairobi, Kenya");
    await userEvent.type(screen.getByLabelText(/motivation/i), "I want to help the community grow and thrive.");

    await userEvent.click(screen.getByRole("button", { name: /express interest/i }));

    await waitFor(() =>
      expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    );
  });
});
