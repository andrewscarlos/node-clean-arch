import { Address } from "../value-object/address";

export class Customer {
    private _id: string;
    private _name: string
    private _address!: Address
    private _active: boolean = true;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate()
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error('Id is required');
        }
        if (this._name.length === 0) {
            throw new Error('Name is required');
        }

    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    get id(): string {
        return this._id
    }

    get Address(): Address {
        return this._address;
    }
    
    get name(): string {
        return this._name;
    }


    isActive(): boolean {
        return this._active;
    }
    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changeAddress(address: Address) {
        this._address = address;
    }

    deactivate() {
        this._active = false;
    }
    activate() {
        if (this._address === undefined) {
            throw new Error('Address is required');
        }
        this._active = true;
    }

    addRewardPoints(points: number): void {
        this._rewardPoints += points;
    }

    set Address(address: Address) {
        this._address = address;
    }
}