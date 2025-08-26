let arr = [0,1,2,3,4,5];
console.log(arr);
let res = arr.splice(1,2);
console.log(arr);
console.log(res);


arr = [0,1,2,3,4,5];
res = arr.splice(1,2, "q1", "q2", "q3");
console.log(arr);

arr = [0,1,2,3,4,5];
res = arr.splice(1,0, "q1");
console.log(arr);

arr = [0,1,2,3,4,5];
res = arr.splice(3);
console.log(arr);
console.log(res);

arr = [0,1,2,3,4,5];
res = arr.splice(-3,2);
console.log(arr);

arr = [1,2,["a","b"]];
console.log(arr);
res=arr.flat();
console.log(res);

arr = [1,2,["a","b"]];
console.log(arr);

arr = ["hello ", "java scrpt"];
res = arr.flatMap(str=>str.split(""));
console.log(arr);
console.log(res);

console.log("hello java script".split(" "));



function sum(num1, num2){
    console.log(arguments);
    console.log(num1, arguments[0]);
    console.log(num2, arguments[1]);
}

function sum(num1, num2,...rest){
    console.log(num1);
    console.log(num2);
    console.log(rest);

}

//sum();
//sum(1);
console.log(" ---------- sum(1,2)---------");
sum(1,2);
console.log("-----sum(1,2,3,4, 'qwe', 'qwa')-----");
sum(1,2,3,4, "qwe", "qwa");