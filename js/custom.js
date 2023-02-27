/**
 * Problem 1: Let’s play a mind game
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5
Input: 50
Output: 75
Input: 33
Output: 49.5
 */
// 
function mindGame(number) {
  if (typeof number == 'number') {
    return (number * 3 + 10) / 2 - 5;
  } else {
    return 'Please valid Data';
  }
}

console.log(mindGame(-5));




/**
 * তোমাকে একটা function দেওয়া হবে called evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। 
   এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
 */

function evenOdd(str) {
  if (typeof str == 'string') {
    let lengthStr = str.length;
    if (lengthStr % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Please valid Data";
  }
}

console.log(evenOdd("Phero"));


/**
 * তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে। 
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুট এবং ৭ এর মধ্যে পার্থক্য। নাহলে তোমাকে return করতে হবে double of their absolute difference.Sample Input & Output:-
Input: 6
Output: -1
Input: -15
Output: 44
Input: 13
Output: 6
 */

function isLGSeven(number) {
  if (typeof number == "number") {
    if (number < 7) {
      return number - 7;
    } else if (number >= 7) {
      return number  * 2;
    }
  } else {
    return "Please valid Data";
  }
}
console.log(isLGSeven(7));



/**
 * Problem 4: Finding Bad data
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
Input: [ -4, -9, -5, -33, -55 ]
Output: 5
 */

function findingBadData(arrays) {
   if (Array.isArray(arrays)) {
     let badData = 0;
     for (let i = 0; i < arrays.length; i++) {
       if (arrays[i] < 0) {
         badData++;
       }
     }
     return badData;
   } else {
    return "Please valid Data";
   }
}

const inputArr = [2, -5, -7, -13];
console.log(findingBadData(inputArr));



/**
 * Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে।
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303
 */

function gemsToDiamond(friend1, friend2, friend3) {

   if (
     typeof friend1 === "number" &&
     typeof friend2 === "number" &&
     typeof friend3 === "number"
   ) {
     const friend1Diamond = 21 * friend1;
     const friend2Diamond = 32 * friend2;
     const friend3Diamond = 43 * friend3;

     let totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;

     if (totalDiamond > 1000 * 2) {
       return totalDiamond - 2000;
     }
     return totalDiamond;
   } else {
     return "Please valid Data";
   }
}

console.log(gemsToDiamond(10, 6, 1001));