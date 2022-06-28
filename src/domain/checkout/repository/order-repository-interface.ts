import { Order } from "../entity/order";
import { RepositoryInterface } from "../../@shared/repository/repository-interface";


export interface OrderRespositoryInterface extends RepositoryInterface<Order> { }