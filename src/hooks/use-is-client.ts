import { useSyncExternalStore } from "react";

/** Indica si el componente ya se hidrató en el cliente (sin setState en effect). */
export function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}
