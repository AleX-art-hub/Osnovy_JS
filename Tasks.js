//Task 1. Напишите функцию, которая подсчитавает сумму четных элентов массива
let arr = [9, 20, 15, 32, 44, 53, 105, 25, 645, 122, 500];
function MySum(arr){
let sum= 0;
for(i = 0; i < arr.length; i++){         
    sum = sum + arr[i];
    }
console.log('сумма =', sum);
}
MySum(arr);

//5. Создайте и опишите объект worker.  Выведите его в консоль. 
/* 
let userComp={
    userName: "Admin",
    CPU: "Intel(R) Core(TM) i9-9723 CPU @ 4.10GHz",
    systemType: "64-bit",
    typeUSB: "v.4.0", 
    RAM: "32 GB",
    activatedWindows: "05/25",
};
console.log(userComp);

let car={
    carName: "Audi",
    startProd: "oct. 2008",
    endProd:"jan 2011",
    body: "sedan(C6)",
    engineType: "V10",
    powerHP: 435,
    maxSpeed: 250,
    driveUnit: "four-wheel drive",
    transmission: "automatic transmission of 6 steps",
    lengthMm: 4940,
    widthMm: 1860,
    heightMm: 1440,
    numberOfSeats: 5,
    fuelTankVolumeL: 80
};
console.log(car);
*/