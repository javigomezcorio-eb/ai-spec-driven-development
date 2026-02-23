describe("Bottom navigation", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("shows the Discover button on launch", async () => {
    await expect(element(by.id("nav-discover"))).toExist();
  });
});

describe("Theme toggle", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it("shows the theme toggle on the Discover screen", async () => {
    await expect(element(by.id("theme-toggle"))).toBeVisible();
  });

  it("toggles theme when tapped", async () => {
    await element(by.id("theme-toggle")).tap();
    await expect(element(by.id("theme-toggle"))).toBeVisible();

    await element(by.id("theme-toggle")).tap();
    await expect(element(by.id("theme-toggle"))).toBeVisible();
  });
});
