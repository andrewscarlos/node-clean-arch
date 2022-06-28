import { Product } from "../entity/product";
import { ProductService } from "./product.service";

describe("Product Service unit tests", () => {
    it("Should change the prices of the all products",()=>{
        const product1 = new Product("123","Product 1",10);
        const product2 = new Product("456","Product 2",20);
        const products = [product1,product2];

        ProductService.increasePrices(products,100);

        expect(product1.price).toBe(20);
        expect(product2.price).toBe(40);
    })
})