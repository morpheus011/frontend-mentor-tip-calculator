let bill = 0;
function myBill(val) {
    bill = document.getElementById("bill").innerHTML = val;
}
let btn_1=document.getElementById("btn-1");
let btn_2=document.getElementById("btn-2");
let btn_3=document.getElementById("btn-3");
let btn_4=document.getElementById("btn-4");
let btn_5=document.getElementById("btn-5");
let btn_6 = 0;
let people = 0;
let tip = 0;
let personTip = 0.00;
let totalTip = 0.00;

btn_1.addEventListener("click", function () {
  tip = 5;
});
btn_2.addEventListener("click", function () {
  tip = 10;
});

btn_3.addEventListener("click", function () {
  tip = 15;
});

btn_4.addEventListener("click", function () {
  tip = 25;
});

btn_5.addEventListener("click", function () {
  tip = 50;
});


function customInput(val) {
    btn_6 = (document.getElementById("btn-6").innerHTML = val);
    tip=(btn_6)
}

function numOfPeople(val) {
    people = document.getElementById("people").innerHTML = val;
    totalTip = (bill * tip) / 100;
    totalTip = totalTip / people;
    personTip = (bill / 100) * totalTip;
    console.log(personTip)
    document.getElementById("t1").textContent = totalTip;
    document.getElementById("t2").textContent = personTip;
}






