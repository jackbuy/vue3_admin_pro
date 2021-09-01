/**
 * Storage
 * @author zhaozj
 */

class Storage {
    constructor(storageType) {
        this.storageType = storageType
    }

    get(name) {
        return this.storageType.getItem(name)
    }

    set(name, value) {
        return this.storageType.setItem(name, value)
    }

    remove(name) {
        return this.storageType.removeItem(name)
    }

    clear() {
        return this.storageType.clear()
    }
}

export default Storage
