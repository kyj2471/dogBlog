import RegisterPageTemplate from "../../components/templates/RegisterPageTemplate";
import { render } from "@testing-library/react";

describe("<RegisterPageTemplate>", () => {
  it("test registerPageTemplate is rendered", () => {
    const { getByText } = render(<RegisterPageTemplate />);
    expect(getByText(/dog/i)).toBeInTheDocument();
    expect(getByText(/profile/i)).toBeInTheDocument();
    expect(getByText(/register/i)).toBeInTheDocument();
    expect(getByText(/upload/i)).toBeInTheDocument();
  });
});
