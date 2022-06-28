
import { Customer } from '../../customer/entity/customer'
import { Address } from '../value-object/address';

describe('Customer unit tests', () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            new Customer('', "Jhon Doe");
        }).toThrowError("Id is required");
    })

    it("should throw error when Name is empty", () => {
        expect(() => {
            new Customer('123', "");
        }).toThrowError("Name is required");
    })

    it("should change name", () => {
        const customer = new Customer('123', "Jhon Doe");
        customer.changeName("Jane Doe");
        expect(customer.name).toEqual('Jane Doe');
    })

    it("should activate customer", () => {
        const customer = new Customer('123', "Customer 123");
        const address = new Address('street 1 ', 123, '123456-123', 'San Francisco');
        customer.Address = address;
        customer.activate()
        expect(customer.isActive()).toBe(true)
    })

    it("should throw error when address is undefined", () => {

        expect(() => {
            const customer = new Customer('123', "Customer 123");
            customer.activate()
        }).toThrowError("Address is required");
    })

    it("should deactivate customer", () => {
        const customer = new Customer('123', "Customer 123");
        customer.deactivate()
        expect(customer.isActive()).toBe(false)
    })

    it("should add reward points", () => {

        const customer = new Customer('123', "Customer 123");
        expect(customer.rewardPoints).toBe(0)

        customer.addRewardPoints(100)
        expect(customer.rewardPoints).toBe(100)

        customer.addRewardPoints(10)
        expect(customer.rewardPoints).toBe(110)
    })
})