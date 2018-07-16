module.exports = class Greeter {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return 'Hello' + this.name;
    }
}