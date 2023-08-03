function last() {
    return this.at(-1)
}

String.prototype.last = last
Array.prototype.last = last