const digits = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

const rand = (list) => list[Math.floor(Math.random() * list.length)];

const padLeft = (num, targetLength) => num.toString().padStart(targetLength, "0");

exports.dateFmt = (o, d) => o.getUTCFullYear() + d
    + padLeft(o.getUTCMonth() + 1, 2) + d
    + padLeft(o.getUTCDate(), 2);

exports.dateTimeFmt = (o) => o.getUTCFullYear() + "-"
    + padLeft(o.getUTCMonth() + 1, 2) + "-"
    + padLeft(o.getUTCDate(), 2) + "T"
    + padLeft(o.getUTCHours(), 2) + ":"
    + padLeft(o.getUTCMinutes(), 2) + ":"
    + padLeft(o.getUTCSeconds(), 2) + "."
    + padLeft(o.getUTCMilliseconds(), 3) + "Z";

const phoneNumberLocal = () => rand(digits) + rand(digits) + rand(digits)
    + "-" + rand(digits) + rand(digits) + rand(digits)
    + "-" + rand(digits) + rand(digits) + rand(digits);

exports.phoneNumberLocal = phoneNumberLocal;

exports.phoneNumber = () => "+" + rand(digits) + rand(digits) + " " + phoneNumberLocal();

exports.cleanStr = (s) => JSON.stringify(s).slice(1, -1);
