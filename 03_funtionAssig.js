function display(){
    console.log("1) My Hobbey is Learning New things");
    console.log("___________");

    
    console.log("My Fav Movie South");
    console.log("___________");

}
display();

function personalDetails(firstName,lastName,collegeName){
    console.log(firstName,lastName,collegeName);
    console.log("___________");

}
console.log("2)");
personalDetails("shilpa","patil","sandip university")

 
function swapValues(value1,value2){
    console.log(" before swaping",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("after swaping",value1,value2);
    console.log("___________");
}
console.log("3)");
swapValues("Virat","Anushka");
swapValues(1000,2000);

function addThreeValues(value1,value2,value3){
    console.log(value1+value2+value3);
}
console.log("4)");
addThreeValues(10.23,600,40);
addThreeValues("hello","good","morning");