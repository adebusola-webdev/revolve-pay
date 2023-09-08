const hamBurger = document.querySelector(".hamburger");
const headerList = document.querySelector(" .header-list");



function openMenu() {
 
  hamBurger.classList.toggle("open");
  headerList.classList.toggle("show");

}

hamBurger.addEventListener("click", openMenu);


function calculate() {
  const cur=currency.value;
  const amounts =amount.value
 
  if (cur==1000){
   result = cur * amounts;
  

  }else if(cur==1300){
    result = cur * amounts;
   
  
  }else{
    
  }
}




const currency =document.getElementById('currency');
const amount =document.getElementById('amount');
const convertBtn =document.getElementById('btn');
const value =document.getElementById('value');


currency.addEventListener('change', calculate);
amount.addEventListener('input', calculate);
convertBtn.addEventListener('click', () => {
  value.innerText=`₦ ${result}`
  calculate();
})


window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
}


function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
