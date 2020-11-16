var el = this.document.getElementById("content");

class Gamer {
    name: string;
    age: number;
    constructor(_name: string, _age: number) {

        this.name = _name;
        this.age = _age;
    }
}
var user: Gamer = new Gamer("Tom", 29);
el.innerHTML = "Gamer: Name: " + user.name + " age: " + user.age;
