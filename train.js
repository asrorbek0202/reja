
// C -TASK
// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
const moment = require("moment");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  getTime() {
    return moment().format("HH:mm");
  }

  qoldiq() {
    return `hozir ${this.getTime()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
  }

  async sotish(mahsulot, miqdor) {
    if (this[mahsulot] === undefined) {
      throw new Error(`Bizda '${mahsulot}' mahsuloti sotilmaydi!`);
    }

    if (this[mahsulot] < miqdor) {
      throw new Error(`Omborda yetarli ${mahsulot} yo'q`);
    }

    this[mahsulot] -= miqdor;
    return `hozir ${this.getTime()}da ${miqdor}ta ${mahsulot} sotildi`;
  }

  async qabul(mahsulot, miqdor) {
    if (this[mahsulot] === undefined) {
      throw new Error(`Biz faqat mavjud mahsulotlarni qabul qila olamiz`);
    }

    this[mahsulot] += miqdor;
    return `hozir ${this.getTime()}da ${miqdor}ta ${mahsulot} qabul qilindi`;
  }
}

const shop = new Shop(3, 7, 9);

async function run() {
  try {
    console.log(shop.qoldiq());

    let javob = await shop.sotish("non", 3);
    console.log(javob);

    javob = await shop.qabul("cola", 4);
    console.log(javob);

    console.log(shop.qoldiq());

    javob = await shop.sotish("non", 10);
    console.log(javob);
  } catch (err) {
    console.log("XATOLIK:", err.message);
  }
}

run();



// B- Task
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


// function countDigits(word, callback) {
//   let count = 0;
//   if (typeof word !== "string") {
//     callback("wrong choice", null);
//   } else {
//     for (let i = 0; i < word.length; i++) {
//       count++;
//     }
//     callback(null, count);
//   }
// }

// countDigits("independency", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("Javob:", data); 
//   }
// });



// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// function countLetter(xarf, word, callback) {
//   let count = 0;
//   for (let letter of word) {
//     if (letter === xarf) {
//       count++;
//     }
//   }
//   callback(count);
// }

// countLetter("e", "engineer", (result) => {
//   console.log("natija:", result); 
// });


// console.log("Jack Ma maslahatlari:")
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "ozingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan ishlarni qiling ", //40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq :)", // 60 ~
// ];



// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return list[5];
//         //  setTimeout(function () {
//         //      return list[5];
//         //  }, 5000);
//     }
// }

// setInterval calllbacklarda ishlayda qayta qayta lekin asynch funksiyalarda ishlamaydi

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve , reject){
//              setTimeout(() => {
//              resolve (list[5]);
//          }, 5000);
//         });
//     }
// }

// async function run() {
//     let javob = await maslahatBering(17);
//     console.log(javob);
//     javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(35);
//     console.log(javob);
// }
// run();

// console.log("passed here 0");
// maslahatBering(20)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");


// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         callback(null, list[5]);
//     }
// }

// maslahatBering(10, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     console.log("javob:", data);
// });
