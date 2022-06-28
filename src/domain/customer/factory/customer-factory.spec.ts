import { Address } from "../value-object/address";
import { CustomerFactory } from "./customer-factory";

describe("Customer Factory Unit Test", () => {
    it("Should crearte a customer", () => {
        const customer = CustomerFactory.create("Jhon Doe");
        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Jhon Doe");
        expect(customer.Address).toBeUndefined();
    })

    it("Should create a customer with an address", () => {
        const address = new Address("Street 1", 123, "123456-123", "San Francisco");
        const customer = CustomerFactory.createWithAddress("Jhon Doe", address);
        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Jhon Doe");
        expect(customer.Address).toBe(address);

    })
})