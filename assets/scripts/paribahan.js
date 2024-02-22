//scrollIntoView section after click the button
document.getElementById('btn-buy').addEventListener('click', function(){
    const pariBahan = document.getElementById('green-paribahan');
    pariBahan.scrollIntoView({behavior:"smooth"});
})

// coupon code field and button
document.getElementById('input-coupon').addEventListener('keyup', function(event){
    const inputValue = event.target.value;
    const button = document.getElementById('btn');

    const coupon15 = document.getElementById('normal-coupon');
    const couponVal = coupon15.innerText;
    // console.log(couponVal);

    const coupon20 = document.getElementById('coupon-20');
    const coupon20Val = coupon20.innerText;
    // console.log(coupon20Val);

    for(let i=1; i<=1; i++){
        if(inputValue === couponVal || inputValue === coupon20Val){
            button.removeAttribute('disabled');
        }
        else{
            button.setAttribute('disabled', true);
        }
    }
})


// 40 seats 
//For A1 seat
function selectSeats(){
     setAttributeById('A1');
    
}
function seatA2(){
    setAttributeById('A2');
}
function seatA3(){
    setAttributeById('A3');
}
function seatA4(){
    setAttributeById('A4');
}

/******** */
function seatB1(){
    setAttributeById('B1');
}
function seatB2(){
    setAttributeById('B2');
}
function seatB3(){
    setAttributeById('B3');
}
function seatB4(){
    setAttributeById('B4');
}

/********* */
function seatC1(){
    setAttributeById('C1');
}
function seatC2(){
    setAttributeById('C2');
}
function seatC3(){
    setAttributeById('C3');
}
function seatC4(){
    setAttributeById('C4');
}
