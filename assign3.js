"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//question # 1:
function CelsiusToFaren(a) {
    return (a * 9 / 5) + 32;
}
const CelsiusTemp = 25;
const FarenTemp = CelsiusToFaren(CelsiusTemp);
console.log(`${CelsiusTemp}oC is equal to ${FarenTemp}oF`);
//question # 2:
let total = 80;
function percent(c) {
    return (c / total) * 100;
}
const finalNo = percent(55);
console.log(finalNo);
//question # 3:
function DaystoWeeks(days, weeks, remainingdays) {
    weeks = Math.floor(days / 7); // gives us the whole weeks in the given no of days 
    remainingdays = (days % 365) % 7; //gives us the no of days remaining after whole weeks 
    return { weeks, remainingdays };
}
const noOfDays = 25;
const finalLeft = DaystoWeeks(noOfDays, 0, 0);
console.log(`${noOfDays} days = ${finalLeft.weeks} weeks and ${finalLeft.remainingdays} days`);
// question # 4:
function calculateDiscount(price) {
    let discountedPercentage;
    if (price > 100) {
        discountedPercentage = 0.1;
    }
    else {
        discountedPercentage = 0.5;
    }
    const discount = price * discountedPercentage;
    const discountedPrice = price - discount;
    return discountedPrice;
}
const productPrice = 120;
const discountedPrice = calculateDiscount(productPrice);
console.log(`${discountedPrice}`); //.tofixed() is used for two decimals 
//question # 5:
let personAge = 5;
if (personAge >= 0 && personAge <= 12) {
    console.log("Child");
}
else if (personAge >= 13 && personAge <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
// question # 6: 
const readlineSync = __importStar(require("readline-sync"));
function suggestedClothes(temperature) {
    if (temperature < 10) {
        return 'It\'s cold! Wear a warm jacket.';
    }
    else if (temperature < 20) {
        return 'It\'s cool. A sweater should be enough.';
    }
    else {
        return 'It\'s warm. You can wear light clothes.';
    }
}
const userInput = readlineSync.question("Enter the temperature: ");
const temperature = parseFloat(userInput); // conver the string into number with decimals
const suggestion = suggestedClothes(temperature);
console.log(suggestion);
//questio # 7:
let no = 25;
if (no % 3 && no % 5) {
    console.log("no is divisible by 3 or 5");
}
else if (no % 3 || no % 5) {
    console.log("both are divisible");
}
else {
    console.log("no it is not");
}
// question # 8:
function leapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || (year % 400 === 0);
}
console.log(leapYear(2016));
// question # 9:
function determineDayOfWeek(dayNumber) {
    if (dayNumber >= 1 && dayNumber <= 7) {
        if (dayNumber === 1) {
            return "Monday";
        }
        else if (dayNumber === 2) {
            return "Tuesday";
        }
        else if (dayNumber === 3) {
            return "Wednesday";
        }
        else if (dayNumber === 4) {
            return "Thursday";
        }
        else if (dayNumber === 5) {
            return "Friday";
        }
        else if (dayNumber === 6) {
            return "Saturday";
        }
        else if (dayNumber === 7) {
            return "Sunday";
        }
    }
    else {
        return "Invalid no";
    }
}
const userInput1 = readlineSync.question("Enter the no of week: ");
const dayNumber = parseInt(userInput1);
const dayOfWeek = determineDayOfWeek(dayNumber);
console.log(`the day of week for given no is ${dayOfWeek}`);
// question # 10:
const userInput2 = readlineSync.question('Enter the number of units consumed: ');
const unitsConsumed = parseInt(userInput2);
// Calculate the bill based on different tax rates
let totalBill = 0;
if (unitsConsumed <= 100) {
    totalBill = unitsConsumed * 1.0;
}
// If they used between 101 and 200 units, they pay $1 per unit for the first 100 units,
// and for the next units, they pay $1.10 per unit (10% extra as tax)
else if (unitsConsumed <= 200) {
    totalBill = 100 + (unitsConsumed - 100) * 1.1;
}
// And so on...
else if (unitsConsumed <= 300) {
    totalBill = 100 + 100 + (unitsConsumed - 200) * 1.15;
}
else if (unitsConsumed <= 500) {
    totalBill = 100 + 100 + 100 + (unitsConsumed - 300) * 1.2;
}
else {
    totalBill = 100 + 100 + 100 + 200 + (unitsConsumed - 500) * 1.25;
}
// Display the total bill amount
console.log(`The total bill amount is: ${totalBill.toFixed(2)}`);
//question # 11:
function processUserInput(anyInput) {
    console.log(`you entered ${anyInput}`);
}
const userInput3 = readlineSync.question("How are you today?");
processUserInput(userInput3);
