import { render, screen } from "@testing-library/react";
import { Skills } from "./Skilss";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("should render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("should render list correctly", () => {
    render(<Skills skills={skills} />);
    const listItemsElement = screen.getAllByRole("listitem");
    expect(listItemsElement).toHaveLength(skills.length);
  });

  test("should render Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("should render Start learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("should render Start learning button eventually", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).toBeInTheDocument();
  });
});
