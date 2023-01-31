var firstname = "AKASH JENA";
var age = "     AGE:";
var number = "20";
var gender = "     GENDER:";
var types = "MALE";
console.log(firstname + " " + age + " " + number + " " + gender + " " + types);
var subject = "ENGLISH     : ";
var mark = "19";
console.log(subject + mark);
var subject = "PHYSICS     : ";
var mark = "13";
console.log(subject + mark);
var subject = "MATH        : ";
var mark = "11";
console.log(subject + mark);
var subject = "CHEMISTRY   : ";
var mark = "15";
console.log(subject + mark);
var subject = "IT          : ";
var mark = "28";
console.log(subject + mark);
var subject = "SANSKRIT    : ";
var mark = "21";
console.log(subject + mark);
var total = "      TOTAL : ";
var mark = 19 + 13 + 11 + 15 + 28 + 21;
console.log(total + mark);
var average = "      AVG : ";
var final = mark / 6;
console.log(average + final);
if (final < 30) {
    alert("FAIL");
}
else if (final < 40) {
    alert("Second class");
}
else if (final > 60) {
    alert("FIRST CLASS");
}