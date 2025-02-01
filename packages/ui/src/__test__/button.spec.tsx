import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../button";
import React from "react";

describe("Button", () => {
  it("renders correctly", async () => {
    let rendered;
    await act(async () => {
      rendered = render(<Button>Click me</Button>);
    });
    const button = rendered.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  it("applies variant classes correctly", async () => {
    let rendered;
    await act(async () => {
      rendered = render(<Button variant="outline">Outline Button</Button>);
    });
    const button = rendered.getByRole("button", { name: /outline button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("border-accent", "text-accent");
  });
});
