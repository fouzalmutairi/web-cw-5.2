var foods=["pizza","spaghetti","ric","pasta"]

 let ordernumber =prompt("choose Number from 1 to 3")

 if (ordernumber == foods [0]) {
 

 console.log ("you like pizza")}
 if (ordernumber== foods[1]) {
console.log("you like spaghetti")
 }
 if(ordernumber == foods [2]){
     console.log ("you like rice") 
 }
 if (ordernumber==foods [3]) {
    console.log ("you like pasata")

 }
 
var n6 = parseInt (prompt("ادخل الرقم الاول"));
var n4= parseInt (prompt("ادخل الرقم الثاني"));
var operations = prompt("(/,*,-,+) اختر العمليه ");
 
if (operations=="+"){
    console.log(n6+n4);
}
if (operations== "*"){
    console.log (n6 *n4);
}
if (operations =="-"){
    console.log (n6-n4);
}
if (operations=="/"){
    console.log(n6/n4);
}
