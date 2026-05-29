export class HashMap<K, V> {
    private buckets: Array<Array<[K, V]>>;
    private bucketCount: number;
    private _size = 0;

    constructor(capacity = 16) {
        this.bucketCount = capacity;
        this.buckets = Array.from({ length: capacity }, () => []);
    }

    getSize(): number {
        return this._size;
    }

    set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
        this._size++;
    }

    get(key: K): V | undefined {
        const bucket = this.buckets[this.hash(key)];
        for (const [storedKey, value] of bucket) {
            if (storedKey === key) return value;
        }
        return undefined;
    }

    has(key: K): boolean {
        return this.get(key) !== undefined;
    }

    delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this._size--;
                return true;
            }
        }

        return false;
    }

    keys(): K[] {
        return this.buckets.flatMap((bucket) => bucket.map(([key]) => key));
    }

    values(): V[] {
        return this.buckets.flatMap((bucket) => bucket.map(([, value]) => value));
    }

    private hash(key: K): number {
        const raw = typeof key === 'number' ? key.toString() : JSON.stringify(key);
        let hash = 0;
        for (let i = 0; i < raw.length; i++) {
            hash = (hash * 31 + raw.charCodeAt(i)) >>> 0;
        }
        return hash % this.bucketCount;
    }
}
