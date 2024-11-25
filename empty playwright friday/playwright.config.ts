import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";
import { env } from "./env";

/*
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: "90%",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  timeout: 7000,
  use: {
    baseURL: env.FRONTEND_URL,
    headless: process.env.CI ? true : false,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
