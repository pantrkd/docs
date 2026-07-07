import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "CourseScheduler",
      width: "130px",
    },
    showPoweredBy: false,
  },
  redirects: [{ from: "/", to: "/api" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
