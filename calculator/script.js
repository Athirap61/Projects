const result = document.querySelector("#res");
const button = document.querySelectorAll("button");

const spcloperator = ["%","*","+","-","/","="];
let output ="";

const calculate = (btnValue)=>{
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%","/100"));
    }
    else if(btnValue === "AC")
        output="";
    else if(btnValue === "DEL")
        output = output.toString().slice(0,-1);
    else{
        if(output === "" && spcloperator.includes(btnValue))
          return;
        output += btnValue;

    }
   result.value = output;    

};



button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        calculate(e.target.dataset.value)
    })

});