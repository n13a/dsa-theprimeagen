type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>
        this.length++
        if (!this.head) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index is out of bounds.")
        }
        if (idx === this.length) {
            this.append(item)
            return
        } else if (idx === 0) {
            this.prepend(item)
            return
        }

        this.length++
        const currentNode = this.getAt(idx) as Node<T>
        const newNode = { value: item } as Node<T>

        newNode.next = currentNode
    }

    append(item: T): void {
        this.length++
        const newNode = { value: item } as Node<T>

    }

    remove(item: T): T | undefined {
    }

    get(idx: number): T | undefined {
    }

    removeAt(idx: number): T | undefined {
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next
        }
        return curr

    }
}
