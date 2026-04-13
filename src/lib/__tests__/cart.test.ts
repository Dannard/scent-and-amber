import { addToCart, getSubtotal, removeFromCart, updateQuantity } from "@/lib/cart";
import { CartItem } from "@/types/commerce";

const sample: CartItem = {
  productId: "prod-1",
  productName: "Test",
  image: "https://example.com/a.jpg",
  sizeLabel: "50ml",
  quantity: 1,
  unitPrice: 100,
};

describe("cart logic", () => {
  it("adds and merges matching variants", () => {
    const first = addToCart([], sample);
    const second = addToCart(first, sample);
    expect(second).toHaveLength(1);
    expect(second[0].quantity).toBe(2);
  });

  it("updates and removes quantity", () => {
    const updated = updateQuantity([sample], sample.productId, sample.sizeLabel, 3);
    expect(updated[0].quantity).toBe(3);

    const removed = updateQuantity(updated, sample.productId, sample.sizeLabel, 0);
    expect(removed).toHaveLength(0);
  });

  it("removes line and computes subtotal", () => {
    const lines = [sample, { ...sample, sizeLabel: "30ml", quantity: 2, unitPrice: 70 }];
    expect(getSubtotal(lines)).toBe(240);

    const withoutOne = removeFromCart(lines, sample.productId, "30ml");
    expect(withoutOne).toHaveLength(1);
  });
});
