export default {
    saveEncoded(key, value) {
        const encodedValue = JSON.stringify(value);
        localStorage.setItem(key, encodedValue);
    },
    save(key, value) {
        localStorage.setItem(key, value);
    },
    getDecoded(key) {
        const item = localStorage.getItem(key);
        try {
            return JSON.parse(item);
        } catch(e) {
            // throw or handle
        }
    }
};
