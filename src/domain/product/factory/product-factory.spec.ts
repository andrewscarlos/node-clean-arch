import { ProductFactory } from "./product-factory";

describe("Product Factory Unit Test", () => {
    it("Should crearte a product type A", () => {
        const product = ProductFactory.create("A", "Product A", 1);
        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product A");
        expect(product.price).toBe(1);
        expect(product.constructor.name).toBe("Product");
    })

    it("Should crearte a product type A", () => {
        const product = ProductFactory.create("B", "Product B", 2);
        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product B");
        expect(product.price).toBe(4);
        expect(product.constructor.name).toBe("ProductB");
    })

    it("Should throw an error when product type is not supported", () => {
        expect(() => ProductFactory.create("C", "Product C", 3)).toThrowError("Product type not supported");
    })
})