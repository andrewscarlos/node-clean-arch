import { Customer } from "../../customer/entity/customer";
import { Order } from "../entity/order";
import OrderItem from "../entity/order-item";

import { OrderService } from "./order.service";

describe("Order Service unit tests", () => {

    it("should place an order", () => {
        const customer = new Customer("c1", "customer1");
        const item1 = new OrderItem("i1", "item1", 10, "p1", 1);

        const order = OrderService.placeOrder(customer, [item1]);

        expect(customer.rewardPoints).toBe(5)
        expect(order.total()).toBe(10)
    })
    it("should get total of orders", () => {
        const orderItem = new OrderItem("123", "item 1", 100, "p1", 1);
        const orderItem2 = new OrderItem("123", "item 1", 200, "p1", 2);

        const order1 = new Order("o1", "customer 1", [orderItem]);
        const order2 = new Order("o2", "customer 1", [orderItem2]);

        const total = OrderService.total([order1, order2]);

        expect(total).toBe(500)
    })
})