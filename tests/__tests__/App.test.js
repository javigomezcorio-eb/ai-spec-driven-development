import React from "react";
import { Text, SafeAreaView, Pressable } from "react-native";
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

  it("renders with light theme by default", () => {
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<App />);
    });
    const safeArea = testRenderer.root.findByType(SafeAreaView);
    const bgColor = safeArea.props.style.backgroundColor;
    expect(bgColor).toBe("#F5F3EE");
  });

  it("switches to dark mode when the toggle is pressed", () => {
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<App />);
    });

    const toggle = testRenderer.root.findByProps({ testID: "theme-toggle" });
    act(() => {
      toggle.props.onPress();
    });

    const safeArea = testRenderer.root.findByType(SafeAreaView);
    const bgColor = safeArea.props.style.backgroundColor;
    expect(bgColor).toBe("#1F2937");
  });

  it("switches back to light mode when the toggle is pressed again", () => {
    let testRenderer;
    act(() => {
      testRenderer = renderer.create(<App />);
    });

    const toggle = testRenderer.root.findByProps({ testID: "theme-toggle" });

    act(() => {
      toggle.props.onPress();
    });
    act(() => {
      toggle.props.onPress();
    });

    const safeArea = testRenderer.root.findByType(SafeAreaView);
    const bgColor = safeArea.props.style.backgroundColor;
    expect(bgColor).toBe("#F5F3EE");
  });
});
