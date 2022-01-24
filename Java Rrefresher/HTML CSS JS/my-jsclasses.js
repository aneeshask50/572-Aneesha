//document.write("<hr>Creating classes and object of the class<hr>");
class Bus {
    constructor(pr, colr) {
        this.price = pr;
        this.color = colr;
    }

    display() {
        document.write('<br>object"s price is ' + this.price);
        document.write('  object"s color is ' + this.color);
    }

    setPrice = function (x) {
        this.price = x
    }

    applyDiscount = function (percentage) {
        this.price = this.price - (this.price * percentage / 100);
    }

};

//OOP
//document.write("<hr>Extending classes(Inheritance) <hr>");

class LuxuryBus extends Bus {
    // sub class can overide and define new constructor
    // if they wish
    constructor(a,b,ac) {
        super(a, b);
        this.withAC = ac;
    }

    display() {
        super.display();
        //using string literal (in ES6)
        var displayString = `<br>object"s Has AC is **** ${this.withAC}  *** 
        asassasasasasas
        qasasasasa
        asasasasa `;
        //document.write('<br>object"s Has AC is ****' + this.withAC + '***');
        document.write(displayString);
    }
};

var lbus1 = new LuxuryBus(1000,"blue",true);

function f(x){
    alert("Test " + x);
}

//f(1);