import { Order } from "./order";
import OrderItem from "./order-item";


describe('Order unit tests', () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            new Order('', "123", []);
        }).toThrowError("Id is required");
    })

    it("should throw error when customer id is empty", () => {
        expect(() => {
            new Order('123', "", []);
        }).toThrowError("Customer Id is required");
    })

    it("should throw error when items is empty", () => {
        expect(() => {
            new Order('123', "123", []);
        }).toThrowError("Item quantity must be greater than 0");
    })

    it("should calculate total", () => {
        const item1 = new OrderItem("i7", "Intel i7", 2000, "product Id", 2);
        const item2 = new OrderItem("i9", "Intel i9", 4000, "product Id", 2);
        const order = new Order('123', "123", [item1, item2]);
        const total = order.total();
        expect(total).toEqual(12000);
    })

    it("should throw error if the item quantity is greater than 0", () => {
        expect(() => {
            const item1 = new OrderItem("i7", "Intel i7", 2000, "product Id", 0);
            const order = new Order('123', "123", [item1]);
        }).toThrowError("Item quantity must be greater than 0");
    })


})