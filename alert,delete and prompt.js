alert("hello your")
// it invokes mini window and its type is always a string
let a = prompt("enter avalue", "90")
// after appearing alert window this allows the user to give input
// that 90 is a defualt value which is defualt input
document.write(a)


let write = confirm("do you want to write?")
if(write){
    document.write(a)
}
else{
    document.write("please allow me  to write")
}