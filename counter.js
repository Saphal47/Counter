function increase() {
     
     let num=document.getElementById("enterno").value;
    num++;
     document.getElementById("enterno").value=num;
    console.log(num);


    }

function decrease() {
      
    let num=document.getElementById("enterno").value;
    num--;
     document.getElementById("enterno").value=num;
    console.log(num);

        
        }
function reset(){
    
    let num =document.getElementById("enterno").value;
    num = 0;
    document.getElementById("enterno").value=num;
}