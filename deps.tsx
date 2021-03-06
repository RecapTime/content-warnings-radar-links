/// <reference lib="DOM.Iterable" />
/// <reference lib="DOM.AsyncIterable" />

export { Client as DbClient } from "https://deno.land/x/postgres@v0.16.1/mod.ts";
export { configAsync } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

// Std
export {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.119.0/http/http_status.ts";
export { decode } from "https://deno.land/std@0.119.0/encoding/base64.ts";
export { serve } from "https://deno.land/std@0.119.0/http/server.ts";
// Preact
export { Fragment, h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
export type {
  ComponentChildren,
  JSX,
  VNode,
} from "https://x.lcas.dev/preact@10.5.12/mod.d.ts";
export { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

// Twind
export { setup } from "https://esm.sh/twind@0.16.13";
export {
  getStyleTag,
  shim,
  virtualSheet,
} from "https://esm.sh/twind@0.16.13/shim/server";

// Font Awesome
export { FontAwesomeIcon } from "https://esm.sh/@fortawesome/react-fontawesome@0.1.14";
export {
  faDiscord,
  faGithub,
  faTwitter,
} from "https://esm.sh/@fortawesome/free-brands-svg-icons@5.15.3";

// Prism
import PrismExports from "https://jspm.dev/prism-react-renderer@1.2.0";
// @ts-ignore TS2339
export const Highlight = PrismExports.default;
export { Prism } from "https://jspm.dev/prism-react-renderer@1.2.0";
export { default as theme } from "https://jspm.dev/prism-react-renderer@1.2.0/themes/github";

// Router
export { router } from "./router.ts";
export type { Match } from "./router.ts";
