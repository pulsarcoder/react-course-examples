
export default class ApiService {
    static get() {
        console.log('getting the data');
        return { name: 'Hey patient' }
    }

    static getAll() {
        console.log('getting all data');
        return [{ name: 'Hey' }]
    }

    static addOnChange(callback) {
        callback();
    }

    static removeOnChange(callback) {
        callback();
    }
}