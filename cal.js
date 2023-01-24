var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");
let store = 0;

// adding eventListner to buttons
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext = e.target.innerText;
        if(btntext == '×')
        {
            btntext='*';
        }
        if(btntext == '÷'){
            btntext = '/'
        }
        if(btntext == 'mod')
        {
            btntext = '%';
        }
        console.log(e.target.innerText);

        screen.value+=btntext;
    });
}
// function for backspace
function backs(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}
// function for pie
function pie(){
    screen.value = 3.14159265359;
}

// function for power
power = () =>{
    // let a = screen.value;
    screen.value = Math.pow(screen.value,2);
}
// function for 1/x
power2 = () =>{
    // let a = screen.value;
    screen.value = Math.pow(screen.value,-1);
}
//function for 10^x
power3 = () =>{
    // let a = screen.value;
    screen.value = Math.pow(10,screen.value);
}

// memory save
msFunction = () =>{
    store = eval(screen.value);
    // console.log(store);


}
// Memory read
mrFunction = () =>{
    screen.value = store;
}
 
// memory clear
mcFunction = () => {
    store = 0 ;
}

//memory plus
mpFunction = () => {
    store += eval(screen.value);
    
}

//memory minus
mmFunction = () => {
    store -= eval(screen.value);
    
}

// clear display
clearFun = () => {
    document.getElementById('screen').value = "";
    // console.log("hi");
}
// exponential e
expo = () =>{
    screen.value = 2.7182818284;
}
factorial = () => {
    let temp = screen.value;
    let fac = 1;
    for (let index = temp; index >= 1; index--) {
        
        fac = fac * index;
    }
    screen.value = fac;
    // console.log(fac);
}

plusMinus = () =>{
    screen.value = 0 - screen.value;
}

getLog = () =>{
    
    let log = screen.value;
    // console.log(log);
    
    screen.value = Math.log10(log);
}
trigo = () => {


    let trig = document.getElementById('trigono').value;
    
    if(trig == 'sin'){
        screen.value = Math.sin(eval(screen.value));
    }
    else if(trig == 'cos'){
        screen.value = Math.cos(eval(screen.value));
    }
    else if(trig == 'tan'){
        screen.value = Math.tan(eval(screen.value));
    }
    // console.log(trig);
}