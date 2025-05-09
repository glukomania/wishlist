import { useNuxtApp } from "#app";

export const useFirebaseAuth = () => {
  // Return null on server-side
  if (process.server) return null;

  const { $auth } = useNuxtApp();
  if (!$auth) {
    throw new Error("Firebase auth not available");
  }
  return $auth;
};
