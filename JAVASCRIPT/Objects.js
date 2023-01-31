var object = {
    'Name': 'Debashish Jena',
    'Gender': "Male",
    'Age': 21,
    'Physics': 65,
    'Chemistry': 93,
    'IT': 79,
    'Math': 62,
    'Hindi': 94,
    'English': 84,
    'isgraduate': true
}
// console.log(object.name,'\n', object.Gender,'\n', object.Age,'\n', object.physics,'\n',);
console.log(object);
var deba = object.Physics + object.Chemistry + object.IT + object.Math + object.Hindi + object.English;
console.log('   total : ', " ", deba);
console.log('   percentage : ', " ", deba / 600 * 100);

// alert("yes");

if (object.isgraduate == true) {
    alert("Graduated");
}
else{
    alert("Not Graduated");
}