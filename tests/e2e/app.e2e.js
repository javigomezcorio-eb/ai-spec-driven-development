describe("Bottom navigation", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("shows the Discover button on launch", async () => {
    await expect(element(by.id("nav-discover"))).toBeVisible();
  });
});
