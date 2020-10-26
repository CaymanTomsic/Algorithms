function print1to255(){
    for (var i=1; i<256; i++){
    console.log(i);
    }
}

print1to255();


function printodd255(){
    for (var i=1; i<256; i += 2){
    console.log(i);
    }
}

printodd255();

function printintsum(){
    var sum=0
    for(var i=0; i<256; i++){
        console.log(i);
        sum=sum + i;
        console.log(sum);
    }
    }

printintsum();

function printarray(arr){
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

function printmax(arr){
    var max = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i]>max){
            max= arr[i];
        }
    }
    console.log(max);
}

printmax([3,5,8,-2]);

function printavg(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum= sum + arr[i];
    }
    var avg = sum/arr.length;
    console.log(avg);
}

printavg([8,12,14]);

function returnOddsArr(){
    var arr = [];
    for (var i=1; i < 256; i+=2){
        arr.push(i);
    }
    console.log(arr);
}

returnOddsArr();

function squareArrValues(arr){
    for (var i=0; i<arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
    console.log(arr);
}

squareArrValues([2,4,3]);

function greaterthan(arr, y){
    sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            sum = sum + 1;
        }
    }
    console.log(sum);
}

function zeroOutNegatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}

function maxminavg(arr){
    var max= arr[0];
    for (var i=1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    var min= arr[0];
    for (var i=1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    var arrNew = [max,min,avg];
    console.log(arrNew);
}

maxminavg([10,20,30]);

function shiftArrVal(arr){
    for (var i = arr.length - 1; i >= 1; i--){
        arr[i]=arr[i-1];
    }
    arr[arr.length-1] = 0;
    console.log(arr);
}

shiftArrVal([1,2,3,4,5]);