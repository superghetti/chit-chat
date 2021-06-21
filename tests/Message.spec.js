import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Message from "../src/components/Message";

describe("Message", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders with a username and message", () => {
    act(() => {
      render(
        <Message userName="superghetti" message="Hello world" />,
        container
      );
    });
    expect(container.textContent).toBe("superghetti: Hello world");

    act(() => {
      render(<Message userName="jimbo" message="foo bar" />, container);
    });
    expect(container.textContent).toBe("jimbo: foo bar");
  });
});
