export class Address {
    _street: string;
    _number: number;
    _zipcode: string;
    _city: string;

    constructor(street: string, number: number, zipcode: string, city: string) {
        this._street = street;
        this._number = number;
        this._zipcode = zipcode;
        this._city = city;
        this.validate();
    }

    validate() {
        if (this._city.length === 0) {
            throw new Error("City is empty");
        }
        if (this._zipcode.length === 0) {
            throw new Error("Zipcode is empty");
        }
        if (this._number < 0) {
            throw new Error("Number is negative");
        }
        if (this._street.length === 0) {
            throw new Error("Street is empty");
        }
    }

    get street(): string {
        return this._street;
    }

    get number(): number {
        return this._number;
    }
    get zipcode(): string {
        return this._zipcode;
    }
    get city(): string {
        return this._city;
    }

    toString(): string {
        return `${this._street} ${this._number} ${this._zipcode} ${this._city}`;
    }

}