import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/contact", () => {
    return HttpResponse.json({ success: true });
  }),
];
