export default class ArrayList<T> {
    public length: number;
    private array: T[];

    constructor() {
        this.length = 0;
        this.array = [];
    }

    prepend(item: T): void {
        this.length++;
        this.array.unshift(item);
    }

    insertAt(item: T, idx: number): void {
        if (idx >= this.length || idx < 0) {
            throw new Error("out of bound");
        }
        if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }
        this.length++;
        this.array.splice(idx, 0, item);
    }

    append(item: T): void {
        this.array[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        const idx = this.array.indexOf(item);
        if (idx === -1) {
            return undefined;
        }
        return this.removeAt(idx);
    }

    get(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return undefined;
        }
        return this.array[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return undefined;
        }
        this.length--;
        return this.array.splice(idx, 1)[0];
    }
}
