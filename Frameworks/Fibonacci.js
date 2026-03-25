function Fibonacci(){
    const n = 10000;
    let num1 = 0;
    let num2 =1;
    let next_num;
    let counter =1;

while (counter <= n){
    next_num = num1 + num2;
    num1 = num2;
    num2 = next_num;
    counter += 1;
    console.log(num2, counter);
}
    console.log("fib_done");
return num2
}
console.log(Fibonacci());
