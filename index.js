var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");

    
const result=Math.floor(Math.random()*10)+1;
console.log(result);
var no_of_guess=3;
var i=0;
var guessed_number=[];


function Play()
{
    var user_guess=document.querySelector("#guess").value;
    
    if((user_guess<1)||(user_guess>10))
    {
        alert("Please Enter a number between 1-10");
        
    }
    else
    {
        guessed_number.push(user_guess);
       
        no_of_guess-=1;
         
      
       for(i=0;i<=no_of_guess; i++ )
       {
            if(user_guess<result)
            {
            msg1.textContent="Your guess is low";
            msg2.textContent="Remaining Chance:"+no_of_guess;
            msg3.textContent="Guessed Numbers are:"+guessed_number;
           
            }

            else if(user_guess>result )
            {
            msg1.textContent="Your guess is High";
            msg2.textContent="Remaining Chance:"+no_of_guess;
            msg3.textContent="Guessed Numbers are:"+guessed_number;
            }

            else if (user_guess==result)
            {
            msg1.textContent="Hay!!! Your are winner";
            msg2.textContent="You have gussed number is correct:"+ result;
            msg3.textContent="Guessed Numbers are:"+guessed_number;
            document.querySelector("#guess").disabled=true;
            }
       
       }
           if(i===0)
          {
           msg1.textContent="Game over!!!";
           msg2.textContent="Better luck next time"
           document.querySelector("#guess").disabled=true;
          }
}
       }
       
    
