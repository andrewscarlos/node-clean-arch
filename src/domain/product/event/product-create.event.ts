import { EventInterface } from "../../@shared/event/event-interface";

export class ProductCreatedEvent implements EventInterface {
    dataTimeOccured: Date;
    eventData: any;

    constructor(eventName: any) {
        this.eventData = eventName;
        this.dataTimeOccured = new Date();
    }

}