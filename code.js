/*function buttonclick(){
    alert("you clicked");
    document.getElementById('ref').innerHTML=("text changed");
}*/
//here yhe get element by id is an object where iner html is a property of it
//the innerHTML property gives the value in the element as a string


//using get elemnt by id for validation


function buttonclick(){
    var val=document.getElementById("username").value;
    var val1=document.getElementById("confirm").value;
    if (val1==va1){
        alert("correct");
    }
    else{
        alert("incorrect");
    }
}