
function sayMyName(){
    console.log('ram');
    console.log('h');
    console.log('g');
    console.log('f');
    console.log('e');
    console.log('d');
    console.log('g');
    console.log('t');
}



function addTwoMyNumbers(num1, num2){
    // console.log( num1 + num2);
    
  
}


function loginUserMessage(username){
    if(username === undefined){
       console.log('please enter the username');
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ram"))
console.log(loginUserMessage())
