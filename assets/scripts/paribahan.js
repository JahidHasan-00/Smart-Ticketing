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

/*********** */

const allBtn = document.getElementsByClassName('seat-btn');
let count = 40;

for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count -= 1;
        e.target.style = 'background: #1ED202';
        const seatName = e.target.innerText;
        const appendChildContainer = document.getElementById('append-container');

        const div = document.createElement('div');

        const span1 = document.createElement('span');
        span1.innerText = seatName;
        const span2 = document.createElement('span');
        span2.innerText = 'Economy';
        const span3 = document.createElement('span');
        span3.innerText = 550;

        //p.innerText = seatName + ' Economy ' + '550';
        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);
        // 
        appendChildContainer.appendChild(div);

        //total Price calculation
        // const total = document.getElementById('total-price').innerText;
        // const sum = parseInt(total) + parseInt(span3.innerText);

        //grand total price calculation
        totalPrice('total-price', parseInt(span3.innerText));
        grandTotal();
        // setInnerText('total-price', sum);
        setInnerText('seat-num', count);
    });
}

function setInnerText(elementId, seatNum){
    document.getElementById(elementId).innerText = seatNum;
}


function totalPrice(id, val){
    const total = document.getElementById(id).innerText;
    const sum = parseInt(total) + parseInt(val);
    setInnerText('total-price', sum);
}

function grandTotal(){
    // const grandTotal = document.getElementById(id).innerText;
    // const sum = parseInt(grandTotal) + parseInt(val);
    
    const total = document.getElementById('total-price').innerText;
    const convertedToTotal = parseInt(total);
    setInnerText('grand-price', convertedToTotal);
    // discount price 
    const inputVal = document.getElementById('input-coupon').value;
    
    if(inputVal === 'NEW15'){
        const discountInitial = document.getElementById('discount');
        const afterDiscount = (15/100)*convertedToTotal;
        discountInitial.innerText = afterDiscount;
        //grand total
        const grandTotal = document.getElementById('grand-price');
        grandTotal.innerText = convertedToTotal - parseFloat(afterDiscount);
        const button = document.getElementById('btn');
        button.setAttribute('disabled', true);

    }
    else if(inputVal === 'Couple 20'){
        const discountInitial = document.getElementById('discount');
        const afterDiscount = (20/100)*convertedToTotal;
        discountInitial.innerText = afterDiscount;
        //grand total
        const grandTotal = document.getElementById('grand-price');
        grandTotal.innerText = convertedToTotal - parseFloat(afterDiscount);
        const button = document.getElementById('btn');
        button.setAttribute('disabled', true);
    }
}
