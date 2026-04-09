// let  a = prompt("a sonini liriting");
// let  n = prompt("n sonini liriting");
// function power(a, n){
//     alert(Math.pow(a,n));

// }
// console.log(power(a,n));



// function mean(a, b){
// let arifmetigi = (a + b) / 2;
// let geometirigi = Math.sqrt(a * b);

// return[arifmetigi, geometirigi]

// }
// console.log(mean(12 , 48));



// let son = +(prompt("son kiriting"));

// function sign(n) {
//     if (n < 0) {
//         return -1;
//     } else if (n > 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// console.log(sign(son));



// function numberOfRoots(A, B, C) {
//     let D = B * B - 4 * A * C;

//     if (D > 0) {
//         return 2;
//     } else if (D === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// console.log(numberOfRoots(1, -6, 9)); 



// function areaCircle(R) {
//     let S = Math.PI * R ** 2
//     return S

// }
// console.log(areaCircle(3));



// let a = +prompt(" a sonini kiriting")
// let b = +prompt(" b sonini kiriting");
// function sumRange(a, b)  {
//     if(a > b ){
//         return 0;
//     }
//     let sum  = 0;
//     for (let i = a ; i <= b ; i++){

//         sum += i;

//     }
//     return sum;

// }

// console.log(sumRange(a,b));



// let a = +prompt("a soninin kiritig");
// let b = +prompt("b sonini kiriting");
// let s = +prompt("c sonini lirtitn");
// function calc(a,b,s){

// if (s === "+") {
//     return a +b;

    
// } else if (s === "-") {
//     return a - b;

    
// }
// else if ( s === " *"){
//     return a * b;

// }
// else if (s ==="/"){
//     return a / b;

// }
// else {
//     return(0)
// }
// }
// console.log(calc(10, 15, "*")); 
// console.log(calc(7, 8, "+"));   
// console.log(calc(5, 0, "/"));   
// console.log(calc(10, 2, "%"));



// let k = +prompt("son kiriting");
// function isEven(k){
//     if (k % 2 === 0) {
//     return(true)
        
//     } else {
//         return(false)
        
//     }

// }
// let natija = isEven(k);
// console.log(natija); 
// alert(natija);



// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");
// function sortABC(a, b, c){
//   let min = Math.min(a, b, c);
//   let max =  Math.max(a, b, c);
//  let orta = (a + b + c) - min - max;

// }
// console.log(min + ", " + orta + ", " + max);
// sortABC(a, b, c);

// let k = +prompt("kkkk")
// let N = +prompt("nnn")
// function isPowerN(K, N){
//     if ( K === 1){
//         return true
//     }
//     if(K < 1 || K % N !== 0){

//         return false
//     }
// return isPowerN(K / N, N);
// }
// console.log(isPowerN(k,N));



// let N = prompt("n kirit");
// function isPrime(N){
//     if (N > 0 && N % 2  !== 0) {
//         return true
        
//     } else {
//         return false
        
//     }
// }

// console.log(isPrime(N));


// function isPrime(n) {
//     if (n < 2) return false; 
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }

// function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//         if (isPrime(i)) {
//             count++; 
//         }
//     }
//     return count;
// }

// let n = 10;
// console.log("Natija:", numberOfPrime(n));


// function digitCount(K) {
//     return String(K).length;
// }

// function digitNth(K, N) {
//     if (digitCount(K) < N) {
//         return -1;
//     }

//     let sK = String(K);
    
//     return Number(sK[N - 1]);
// }

// console.log(digitNth(105782, 5));
// console.log(digitNth(1057, 5));   


// function inverseNumberMath(n) {
//     let reversed = 0;
    
//     while (n > 0) {
//         let digit = n % 10;                
//         reversed = (reversed * 10) + digit; 
//         n = Math.floor(n / 10);           
//     }
    
//     return reversed;
// }

// console.log(inverseNumberMath(56814)); 







// function inverseNumber(n) {
//     let reversed = 0;
//     let tempN = n;
    
// while (tempN > 0) {
//         reversed = (reversed * 10) + (tempN % 10);
//         tempN = Math.floor(tempN / 10);
//     }
//     return reversed;
// }

// function isPalindrom(N) {
//     return N === inverseNumber(N);
// }
// console.log(isPalindrom(1678761)); 
// console.log(isPalindrom(12345));   
// console.log(isPalindrom(78987));   


// let N = prompt(" n kirit");
// function factorial(N){
//     if (N < 0){
//         return 1
//     }
//     let result = 1 ;
//     for (let i = 1; i<= N; i++){
//         result *= i;

//     }
//     return result;

// }
// console.log(factorial(5));  
// console.log(factorial(0));  
// console.log(factorial(-5)); 
// console.log(factorial(10));


// /**
//  * 1 dan N gacha bo'lgan sonlar ichida 3 ga bo'linadiganlarining yig'indisini hisoblaydi
//  */
// function getSum3(N) {
//     let sum = 0;

//     // 1 dan N gacha bo'lgan barcha sonlarni ko'rib chiqamiz
//     for (let i = 1; i <= N; i++) {
//         // Agar son 3 ga bo'linsa (qoldiq 0 bo'lsa)
//         if (i % 3 === 0) {
//             sum += i; // Yig'indiga qo'shamiz
//         }
//     }

//     return sum;
// }

// // Tekshirib ko'ramiz:
// console.log(getSum3(15)); // Natija: 45
// console.log(getSum3(10)); // Natija: 18 (3 + 6 + 9)



// function sumOddEven(N) {
//     let sumJuft = 0;
//     let sumToq = 0;

//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             sumJuft += i; 
//         } else {
//             sumToq += i; 
//         }
//     }
//     return `${sumJuft}, ${sumToq}`;
// }
// console.log(sumOddEven(10)); 


// function invertTime(H, M, S){
//     let sekund = H * 3600;
//     let minut = M * 60;
//     return sekund + minut + S;

// }
// console.log(invertTime(0, 6, 40));



// function decTime(H, M, S) {
//     let totalSeconds = (H * 3600) + (M * 60) + S - 1;

//     if (totalSeconds < 0) {
//         totalSeconds = 86400 - 1; 
//     }

//     let newH = Math.floor(totalSeconds / 3600);
//     let newM = Math.floor((totalSeconds % 3600) / 60);
//     let newS = totalSeconds % 60;

//     let format = (num) => num.toString().padStart(2, '0');

//     return `${format(newH)}:${format(newM)}:${format(newS)}`;
// }

// console.log(decTime(0, 6, 40)); 
// console.log(decTime(1, 0, 0));  


// function  isLeapYear(Y){
//     if ((Y % 400 === 0) || ( Y % 4 === 0 && Y % 100 !== 0)){
//         return true
//     }
//     else{
//         return false
//     }

// }

// console.log(isLeapYear(2024));
// console.log(isLeapYear(2000)); 
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2023)); 



// function isLeapYear(Y) {
//     return (Y % 400 === 0) || (Y % 4 === 0 && Y % 100 !== 0);
// }

// function monthDays(M, Y) {
//     // M = oy tartib raqami (1-12)
//     // Y = yil
    
//     switch (M) {
//         case 2: // Fevral
//             return isLeapYear(Y) ? 29 : 28;
            
//         case 4: // Aprel
//         case 6: // Iyun
//         case 9: // Sentyabr
//         case 11: 
//             return 30;
            
//         default: 
//             return 31;
//     }
// }

// console.log(monthDays(2, 2020)); 
// console.log(monthDays(2, 2021));
// console.log(monthDays(3, 2021)); 


function prevDate(D, M, Y) {
    if (D > 1) {
        D = D - 1;
    } 
    else {
        M = M - 1;
        if (M === 0) {
            M = 12;
            Y = Y - 1;
        }
        
        D = monthDays(M, Y);
    }

    return D + "." + M + "." + Y;
}

console.log(prevDate(10, 3, 2022)); 
console.log(prevDate(1, 1, 2022));  