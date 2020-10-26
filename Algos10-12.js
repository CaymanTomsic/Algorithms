function combineStringsArr(str1, str2, str3){
    var newArr= str1.split();
    newArr.push(str2.split()[0]);
    newArr.push(str3.split()[0]);
    var newStr = newArr.join(", ");
    return newStr
}


var str1 = "this"
var str2 = "is a"
var str3 = "test"

console.log(combineStringsArr(str1, str2, str3))

function combineStrings() {
    var str1 = "Hello ";
    var str2 = "world!";
    var str3 = " Have a nice day!";
    var str4 = str3.concat(str1, str2);
    return str4
}
console.log(combineStrings())

mpg = 25
gas = 20
function distance(mpg, gas){
    var distance = gas * mpg
    return distance + " Miles"
}
console.log (distance(mpg, gas))

