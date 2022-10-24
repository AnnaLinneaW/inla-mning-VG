let darkBtn=document.querySelector("#dark");
let answerBtn=document.querySelector("#myAnswer");
let radios = document.querySelectorAll('input[id="quiz"]');
let infoWrapper=document.querySelector("#infoWrapper");
let labels =document.querySelectorAll("label")

clicks=0;
darkBtn.addEventListener("click", ()=>{
    if (clicks===0){
        darkBtn.innerText="Lightmode";
        document.body.style.backgroundColor= "black";
        document.body.style.color= "yellow";
        clicks++;
    }
    else if (clicks===1){
        darkBtn.innerText="Darkmode"
        document.body.style.backgroundColor= "white";
        document.body.style.color= "black";
        clicks--;
    }
});

answerBtn.addEventListener("click",()=>{
    infoWrapper.innerHTML=""
    let points=[];
    let sum = 0;
    for (let radio of radios) {
        if (radio.checked) {
            points.push(+radio.value)
		}};
        
       /*  points.forEach(i => {
            sum += i
    }); */

    if (points.value == "1") {
      radios.style.color = "green";
    } else {
      radios..style.color = "red";
    } 
    for (let i=0; i< points.length; i++){
     sum += points[i]

    }; 
    if(sum <5){infoWrapper.style.color= "red"}
    else if 
    (sum>5&& sum<7.5){infoWrapper.style.color="orange"}
    else
    {infoWrapper.style.color="green"};
   
    infoWrapper.append("Du fick: "+ sum+" rätt!");
    console.log(points);
});


/* if ((radio.checked).value==1)
        {radios.style.color = 'green'
      } */
