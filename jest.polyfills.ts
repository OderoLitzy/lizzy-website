/**
 * Polyfill Web API globals for the jsdom test environment.
 * MSW v2 (via @mswjs/interceptors) requires Request, Response, Headers, and
 * fetch to exist on globalThis. jsdom does not implement these; Node 18+ does.
 * We reference them via the node: built-in cache so they survive jsdom's scope.
 */

// Node 18+ exposes these on the global scope, accessible via process or
// the global object before jsdom wraps things. We pull them from the
// module-level globalThis which still refers to the Node global at this point.
const { Request, Response, Headers, fetch } = globalThis as unknown as {
  Request: typeof globalThis.Request;
  Response: typeof globalThis.Response;
  Headers: typeof globalThis.Headers;
  fetch: typeof globalThis.fetch;
};

if (Request) Object.defineProperty(globalThis, "Request", { value: Request, writable: true, configurable: true });
if (Response) Object.defineProperty(globalThis, "Response", { value: Response, writable: true, configurable: true });
if (Headers) Object.defineProperty(globalThis, "Headers", { value: Headers, writable: true, configurable: true });
if (fetch) Object.defineProperty(globalThis, "fetch", { value: fetch, writable: true, configurable: true });
