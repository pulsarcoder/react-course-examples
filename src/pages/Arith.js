const color = 'red';
const color1 = 'white';

const style = {
    [color]: '#ff0000',
    [color1]: '#fffff'
};

class Display {
    display = (txt = '') => console.log(txt, style);
}


export class Arithmetic extends Display {
    constructor(value1, value2) {
        super();
        this.value1 = value1;
        this.value2 = value2;
    }

    add() {
        return this.value1 + this.value2;
    }

    ellapse(time) { console.log('hi im in ellapse'); }

    static multiply(value1, value2) {
        return value1 * value2;
    }
    static Operators = ['add', 'sub', 'multiply'];
}

class INstanceProperties {
    name = "naresh";
    email = "naresh@test.com";

    constructor() {
        console.log(this.name, this.email);
    }

    printName = () => {
        console.log(this.name);
    }
}
const instProper = new INstanceProperties();
const p = instProper.printName;

p();
const obj = { name: 'naresh', email: 'asdasd' }
const obj2 = {...obj};

console.log(obj2.name);
setTimeout(() => {
    console.log(obj.email);
}, 6000);
console.log(obj.name);

const getData = async () => {
    console.log('fetching the data...');
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
}

const printingData = async () => {
    try {
        const data = await getData();
        console.log(data);
        console.log('Displaying data');
    } catch (e) {
        console.log(e);
    }
}
printingData();
// naresh
// asdasd
// naresh