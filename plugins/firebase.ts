import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "~/config/firebase";

export default defineNuxtPlugin((nuxtApp) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  if (process.client) {
    const analytics = getAnalytics(app);
  }

  return {
    provide: {
      auth,
    },
  };
});
