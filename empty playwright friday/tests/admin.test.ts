import { shopTestLoggedUser } from "../fixture";

shopTestLoggedUser(
  "Admin should see additional items in dashboard",
  async ({ app: { dashboard }, adminUser }) => {
    await dashboard.open();
    await dashboard.expectedMenuItemVisible("Reviewsaskdnkdajdakdaskjksdj");
    await dashboard.expectedMenuItemVisible("Orders");
    await dashboard.expectedMenuItemVisible("Users");
  }
);
