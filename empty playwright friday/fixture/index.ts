import test from "playwright/test";
import { Applicaiton } from "../app";
import { UserCreateRequest, UserCreatedResponse } from "../api/models";
import { randomUUID } from "crypto";

type DefaultUserOption = {
  defaultUser: {
    email: string;
    password: string;
  };
};

interface UserContext {
  userModel: UserCreateRequest;
  createdUser: UserCreatedResponse;
}

const userDD = {
  email: "test+d184efea-e858-456a-a200-e2c26cd5fe31@test.com",
  password: "xotabu4@gmail.com",
};

export const shopTest = test.extend<{
  app: Applicaiton;
}>({
  app: async ({ page }, use) => {
    const app = new Applicaiton(page);
    console.log("setup");
    await use(app);
    //cleanup
    console.log("cleanup");
  },
});

export const shopTestLoggedUser = shopTest.extend<
  DefaultUserOption & {
    app: Applicaiton;
    newUser: UserContext;
    adminUser;
  }
>({
  defaultUser: [
    {
      email: "xotabu4@gmail.com",
      password: "xotabu4@gmail.com",
    },
    { option: true },
  ],

  app: async ({ page }, use) => {
    const app = new Applicaiton(page);
    await use(app);
    //cleanup
    console.log("cleanup");
  },

  newUser: async ({ app, page }, use) => {
    const userModel = {
      isSubscribed: false,
      email: `test+${randomUUID()}@test.com`,
      firstName: "test",
      lastName: "test",
      password: "xotabu4@gmail.com",
    };

    const createdUser = await app.api.auth.register(userModel);
    await app.headlessLogin({
      email: userModel.email,
      password: userModel.password,
    });
    await app.products.open();

    await use({ userModel, createdUser });
  },

  adminUser: async ({ app, page }, use) => {
    await app.headlessLogin({
      email: "xotabu4@gmail.com",
      password: "xotabu4@gmail.com",
    });

    await use(app);
  },
});
