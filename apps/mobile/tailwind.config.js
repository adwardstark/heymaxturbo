import nativewind from "nativewind/preset";
import sharedConfig from "@package/ui/tailwind.config.ts";

export default {
  content: ["*.{js,jsx,ts,tsx}", "./src/**/*.{ts,tsx}"],
  presets: [sharedConfig, nativewind],
  theme: {
    extend: {
      fontFamily: {
        interRegular: ["Inter_400Regular"],
        interMedium: ["Inter_500Medium"],
        interSemiBold: ["Inter_600SemiBold"],
        interBold: ["Inter_700Bold"],
      },
    },
    colors: {
      mobile: {
        background: "var(--mobile-background)",
      },
    },
  },
};