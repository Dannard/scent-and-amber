import { ShopClient } from "@/components/commerce/shop-client";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("shop client", () => {
  it("filters products by search text", async () => {
    const user = userEvent.setup();
    render(<ShopClient />);

    const search = screen.getByPlaceholderText("Search scent or profile");
    await user.type(search, "Noir");

    expect(screen.getByText("Ember Noir")).toBeInTheDocument();
  });
});
