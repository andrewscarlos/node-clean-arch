import { EventInterface } from "./event-interface";
import { EventDispatcherInterface } from "./event-dispatcher-interface";
import { EventHandlerInterface } from "./event-handler-interface";


export class EventDispatcher implements EventDispatcherInterface {

    private eventHandlers: { [eventName: string]: EventHandlerInterface<EventInterface>[] } = {};

    get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
        return this.eventHandlers;
    };

    notify(event: EventInterface): void {
        const eventName = event.constructor.name;
        if (!this.eventHandlers[eventName]) {
            return
        }
        this.eventHandlers[eventName].forEach(eh => eh.handle(event));
    };

    register(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }
        this.eventHandlers[eventName].push(eventHandler);
    };

    unregister(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
        if (!this.eventHandlers[eventName]) {
            return;
        }
        this.eventHandlers[eventName] = this.eventHandlers[eventName].filter(eh => eh !== eventHandler);
    };

    unregisterAll(): void {
        this.eventHandlers = {};
    };

}