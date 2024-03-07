function click(number){
    document.getElementById("demo").innerHTML = display
   
for ( var a=1;a<=10;a++){
       var result = number*a
        console.log(`${number} X ${a} = ${result}`)
        document.write(`${number} X ${a} = ${result} <br/>`)
       
    }
}
click(2);

