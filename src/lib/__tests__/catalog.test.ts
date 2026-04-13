import { filterProducts, products } from "@/lib/catalog";

describe("catalog filtering", () => {
  it("filters by family and mood", () => {
    const filtered = filterProducts(products, { family: "Fresh", mood: "Weekend" });
    expect(filtered.every((product) => product.family === "Fresh" && product.mood === "Weekend")).toBe(true);
  });

  it("filters by query", () => {
    const filtered = filterProducts(products, { query: "Noir" });
    expect(filtered.some((product) => product.slug === "ember-noir")).toBe(true);
  });
});
