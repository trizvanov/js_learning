let val;

const today = new Date();
let birthday = new Date('04-15-1976 17:45:00');
birthday = new Date('April 15 1976');
birthday = new Date('04/15/1976');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1975);

console.log(birthday);