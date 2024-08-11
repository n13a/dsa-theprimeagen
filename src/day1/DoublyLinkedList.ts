type Node<T> = {
  value: T
  prev?: Node<T>,
  next?: Node<T>
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
    this.tail = undefined
  }

  prepend(item: T): void {
    const newNode = { value: item } as Node<T>
    this.length++
    if (!this.head) {
      this.head = this.tail = newNode
      return
    }
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("can't do that my dude")
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
    newNode.prev = currentNode.prev
    currentNode.prev = newNode

    if (newNode.prev) {
      newNode.prev.next = currentNode

    }
  }
  append(item: T): void {
    this.length++
    const newNode = { value: item } as Node<T>

    if (!this.tail) {
      this.head = this.tail = newNode
      return
    }

    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
  }
  remove(item: T): T | undefined {
    let curr = this.head
    for (let i = 0; curr && i < this.length; ++i) {
      if (curr.value === item) {
        break
      }
      curr = curr.next
    }
    if (!curr) {
      return undefined
    }
    return this.removeNode(curr)
  }
  get(idx: number): T | undefined {
    return this.getAt(idx)?.value
  }
  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx)
    if (!node) {
      return undefined
    }

    return this.removeNode(node)

  }
  private removeNode(node: Node<T>): T | undefined {
    this.length--
    if (this.length === 0) {
      const out = this.head?.value
      this.head = this.tail = undefined
      return out
    }
    if (node.prev) {
      node.prev.next = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    }
    if (node === this.head) {
      this.head = node.next

    }
    if (node === this.tail) {
      this.tail = node.prev
    }
    node.prev = node.next = undefined
    return node.value

  }
  private getAt(idx: number): Node<T> | undefined {
    let curr = this.head
    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next
    }
    return curr

  }
}
