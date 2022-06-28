import { Customer } from "../../customer/entity/customer";
import { Order } from "../entity/order";

import { v4 as uuid } from 'uuid';
import  OrderItem  from "../entity/order-item";
export class OrderService {
    static total(orders: Order[]): number {
        return orders.reduce((acc, order) => acc + order.total(), 0);
    }

    static placeOrder(customer: Customer, orderItems: OrderItem[]): Order {
        if (!orderItems.length) {
            throw new Error("Order must have at least one item");
        }

        const order = new Order(uuid(), customer.id, orderItems);
        customer.addRewardPoints(order.total() / 2);
        return order
    }
}