"use client";

import { useSyncExternalStore } from "react";

// Always returns false on the server (and on the client's first render),
// then true once the component has mounted in the browser. This avoids a
// server/client markup mismatch for state that depends on localStorage.
function subscribe() {
  return () => {};
}

export function useHasHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
