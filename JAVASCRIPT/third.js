var firstname = "ASISH KUMAR JENA";
var age="     AGE:";
var number="19";
var gender="     GENDER:";
var types="MALE";
console.log( firstname +" "+age+" "+number+" "+gender+" "+types);
var subject = "ENGLISH     : ";
var mark = "31";
var total = subject + mark;
console.log(total);
var subject = "PHYSICS     : ";
var mark = "32";
var total = subject + mark;
console.log(total);
var subject = "MATH        : ";
var mark = "35";
var total = subject + mark;
console.log(total);
var subject = "CHEMISTRY   : ";
var mark = "18";
var total = subject + mark;
console.log(total);
var subject = "IT          : ";
var mark = "27";
var total = subject + mark;
console.log(total);
var subject = "HINDI       : ";
var mark = "38";
var total = subject + mark;
console.log(total);
var sum = "      TOTAL : ";
var total = 31 + 32 + 35 + 18 + 27 + 38;
var avg = sum + total;
console.log(avg);
var sum = "      AVG : ";
var average = total / 6;
console.log(sum + average);
if(average<30){
    alert("FAIL");
}
else if(average<40){
    alert("SECOND CLASS");
}
else if( average>60){
    alert("FIRST CLASS");
}