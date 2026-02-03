function functionName(Parametri1,Parametri2 ){
    // code that needs so be executed

}
function showMessage(){
    alert("This message is inside the function");
}
 showMessage();

 function sum(number1, number2){
    return number1 + number2;

 }
 console.log(sum(25,5));

 var result = toCelsius(54);

 console.log("54 fahrenheit is equal to "+result+"celsius");

 function toCelsius(f) {
    return (5/9) * (f-32);
 }
 console.log("54fahrenheit is equals to "+toCelsius(54)+"celsius");

 var arrowFunction = () => alert("Hello world");
 arrowFunction();
 var arrowFunction = name => alert('Hello ${name}');
 arrowFunction("John Doe");

 function newFunction(){
    var localVar = "This is a local variable";
    alert(localVar);

 }

 //kjo kupton
 newFunction();


 //kjo nuk punon
 alert(localVar);

 function MinutatNeSekonda(minut) {
    return minut * 60;
 }
 console.log(MinutatNeSekonda(60));

 //objektet
 var car ={ name:"bmw", color :"black", year:2025, model:"g80", kilometers: 3321,
 


 get getKilometers(){
    return this.kilometers = kilometers;
 },
 set setKilometers(kilometers){
    this.kilometers = kilometers;
 }
};




var school ={
    name:"Digital School",
    subject:"programming",
    studebts:5,
    year:2026
};
alert(car.name);

alert(car['color']);

var computer =new Object();
computer.name="Nvidia";
computer.cpu = "i5 12gen";
computer.ram = "24gb";
computer.gpu = "rtx 3060";
 
computer.type = function(){
    return this.name + " " + this.cpu + " " + this.ram + " " + this.gpu;
}

delete computer.gpu;
car.setKilometers = 100;
console.log(car.getKilometers);