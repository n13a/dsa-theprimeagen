export default class MinHeap {
  public length: number;
  public data: number[];

  constructor() {
    this.data = []
    this.length = 0
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];

    this.length--;
    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);

    return out;
  }

  private heapifyDown(idx: number): void {
    const rIdx = this.rightChild(idx);
    const lIdx = this.leftChild(idx);

    if (idx >= this.length || lIdx >= this.length) {
      return;
    }

    const lValue = this.data[lIdx];
    const rValue = this.data[rIdx];
    const value = this.data[idx];

    if (lValue > rValue && rValue < value) {
      this.data[rIdx] = value;
      this.data[idx] = rValue;
      this.heapifyDown(rIdx)
    } else if (rValue > lValue && lValue < value) {
      this.data[lIdx] = value;
      this.data[idx] = lValue;
      this.heapifyDown(lIdx)
    }

  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    const parent = this.parent(idx);
    const parentValue = this.data[parent];
    const value = this.data[idx];

    if (parentValue > value) {
      this.data[parent] = value;
      this.data[idx] = parentValue;
      this.heapifyUp(parent);
    }


  }
  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  private leftChild(idx: number): number {
    return 2 * idx + 1
  }

  private rightChild(idx: number): number {
    return 2 * idx + 2
  }
}
