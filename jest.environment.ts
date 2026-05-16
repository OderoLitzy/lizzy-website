/**
 * Custom Jest test environment that extends jsdom with Node's built-in
 * fetch Web API globals. MSW v2 requires Request, Response, Headers, and
 * fetch to be available as globals; jsdom omits them but Node 18+ provides them.
 */
import JSDomEnvironment from "jest-environment-jsdom";

export default class FixedJSDomEnvironment extends JSDomEnvironment {
  async setup() {
    await super.setup();

    // Copy Node 22 built-in fetch globals into the jsdom window scope.
    // These live on the Node global (process.global / the outer globalThis)
    // and are not automatically visible inside jsdom's sandboxed global.
    const nodeGlobals = {
      fetch: globalThis.fetch,
      Request: globalThis.Request,
      Response: globalThis.Response,
      Headers: globalThis.Headers,
      FormData: globalThis.FormData,
      ReadableStream: globalThis.ReadableStream,
      WritableStream: globalThis.WritableStream,
      TransformStream: globalThis.TransformStream,
      TextEncoder: globalThis.TextEncoder,
      TextDecoder: globalThis.TextDecoder,
      BroadcastChannel: globalThis.BroadcastChannel,
      CompressionStream: (globalThis as Record<string, unknown>).CompressionStream,
      DecompressionStream: (globalThis as Record<string, unknown>).DecompressionStream,
    };

    for (const [key, value] of Object.entries(nodeGlobals)) {
      if (value !== undefined) {
        Object.defineProperty(this.global, key, {
          value,
          writable: true,
          configurable: true,
        });
      }
    }
  }
}
