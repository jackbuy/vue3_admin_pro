/**
 * Storage
 */

class Storage {
    get(name) {
        return sessionStorage.getItem(name)
    }

    set(name, value) {
        return sessionStorage.setItem(name, value)
    }

    remove(name) {
        return sessionStorage.removeItem(name)
    }

    clear() {
        return sessionStorage.clear()
    }
}

export default new Storage()
