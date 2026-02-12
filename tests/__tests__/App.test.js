import React from "react";
import { Text } from "react-native";
import renderer, { act } from "react-test-renderer";
import App from "../../App";

describe("App", () => {
  it("renders the Discover label", () => {
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<App />);
    });
    const matches = testRenderer.root
      .findAllByType(Text)
      .filter((node) => node.props.children === "Discover");
    expect(matches).toHaveLength(1);
  });
});
