//mutable and immutable
const firstName = "Tuan";
let lastName = "Thai";
var midName = "K";          //best not to use var
console.log(lastName);
lastName = "Law";
console.log(lastName);

 //string
    const message = 'Hello, JavaScript!';
  
    const message2 = 'this is an "example"';
    const strNbr1 = "1";
    const strNbr2 = "2";
    console.log(strNbr1 + strNbr2);
    console.log(firstName, lastName);

    //number
    let grossIncome = 75000;
    let tax = 0.05;
    let income = grossIncome - (grossIncome * tax);
    console.log("$" + income);
    console.log(3 * 0.00000000005);

    //boolean
    //> < === ==
    console.log("1" === 1); //false.  not same type
    console.log("1" == 1); //true. shallow equal. careless about type
    console.log(3 > 5);
    console.log(true);
    console.log(false);
