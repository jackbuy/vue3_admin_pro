/**
 * Storage
 */

class Storage {
    constructor(sessionType) {
        this.sessionType = sessionType
    }

    get(name) {
        return this.sessionType.getItem(name)
    }

    set(name, value) {
        return this.sessionType.setItem(name, value)
    }

    remove(name) {
        return this.sessionType.removeItem(name)
    }

    clear() {
        return this.sessionType.clear()
    }
}

export default new Storage(sessionStorage)
