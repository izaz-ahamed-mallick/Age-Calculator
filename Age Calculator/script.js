let userInput = document.querySelector("#datebox");
userInput.max=new Date().toISOString().split("T")[0];
let showResult = document.querySelector("#showResult")

function calculateAge(){
   let birthDate = new Date(userInput.value);

   let d1 = birthDate.getDate();
   let m1 = birthDate.getMonth()+1;
   let y1 = birthDate.getFullYear();

   let todayDate = new Date();

   let d2 = todayDate.getDate();
   let m2 = todayDate.getMonth()+1;
   let y2 = todayDate.getFullYear();

   let d3,m3,y3;

   if(userInput.value === ""){
    showResult.innerHTML = `Please Enter Your Birthdate` 
   }
   else{
    y3 = y2 - y1;

   if(m2>=m1){
    m3 = m2-m1
   }
   else{
    y3--;
    m3 = 12 + m2 - m1
   }
   if(d2>=d1){
    d3 = d2 - d1
   }
   else{
       m3--;
       d3 = getDayInMonth(y1,m1) + d2 - d1;
   }
   showResult.innerHTML = `You are <span>${y3}</span> year's and <span>${m3}</span> month's <span>${d3}</span> day's Old`
   }

console.log(y3,m3,d3);
}

function getDayInMonth(year,month){
  return new Date(year,month,0).getDate()
}

document.querySelector("#calculateBtn").addEventListener("click",calculateAge)