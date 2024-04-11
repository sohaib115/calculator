let string = "";
let a;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{

button.addEventListener('click',(e)=>{
     
    if(e.target.innerHTML == "="){
     string=eval(string);
     document.querySelector('input').value=string;
         
    }
    else if(e.target.innerHTML=="C"){
          string=" ";
          document.querySelector('input').value=string;         
}
  else if (e.target.innerHTML=="AC"){
           string=string.substring(0,string.length-1);
           document.querySelector('input').value=string;
         

  }
  
     else{
    console.log(button.innerHTML);
    a=button.innerHTML;
    string=string+a;
    document.querySelector('input').value=string;
     }
})

})

// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e) => {
    
//     console.log(e.target);

//   })

// })