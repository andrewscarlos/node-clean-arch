import {Sequelize} from "sequelize-typescript";
import CustomerModel from "../../../infrastructure/customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../infrastructure/customer/repository/sequelize/customer.repository";
import {Customer} from "../../../domain/customer/entity/customer";
import {Address} from "../../../domain/customer/value-object/address";

describe ( "test find customer use case" , () => {
    let sequelize : Sequelize;

    beforeEach ( async () => {
        sequelize = new Sequelize ( {
            dialect: "sqlite" ,
            storage: ":memory:" ,
            logging: false ,
            sync: {force: true} ,
        } );

        await sequelize.addModels ( [CustomerModel] );
        await sequelize.sync ();
    } );

    afterEach ( async () => {
        await sequelize.close ();
    } );

    it ( "should find customer" , async () => {

        const customer = new Customer ( "123" , "Customer 1" );
        const address = new Address ( "Street 1" , 1 , "Zipcode 1" , "City 1" );
        const customerRepository = new CustomerRepository ();
        const usecase = new FindCustomerUseCase ( customerRepository );
        customer.changeAddress ( address );
        await customerRepository.create ( customer );

        const input = {id: "123"};
        const output = usecase.execute ( input );


    } )
} )