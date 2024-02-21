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

