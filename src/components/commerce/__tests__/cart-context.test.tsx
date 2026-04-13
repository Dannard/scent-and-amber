import { CartProvider, useCart } from "@/components/commerce/cart-context";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "vitest";

function Probe() {
  const { addItem, itemCount } = useCart();

  return (
    <div>
      <p data-testid="count">{itemCount}</p>
      <button
        type="button"
        onClick={() =>
          addItem({
            productId: "x",
            productName: "X",
            image: "https://example.com/x.jpg",
            sizeLabel: "50ml",
            quantity: 1,
            unitPrice: 100,
          })
        }
      >
        Add
      </button>
    </div>
  );
}

beforeEach(() => {
  const store = new Map<string, string>();
  Object.defineProperty(window, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => store.set(key, value),
      removeItem: (key: string) => store.delete(key),
      clear: () => store.clear(),
    },
  });
});

describe("cart provider persistence", () => {
  it("stores cart updates to localStorage", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <Probe />
      </CartProvider>,
    );

    await user.click(screen.getByText("Add"));

    await waitFor(() => {
      expect(screen.getByTestId("count")).toHaveTextContent("1");
      expect(window.localStorage.getItem("scent-ember-cart")).toContain("productId");
    });
  });
});
