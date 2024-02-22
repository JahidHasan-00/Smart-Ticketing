
let count = 40;
// function setAttributeById(elementId){
//     const seatName = document.getElementById(elementId);
//     seatName.classList.add('bg-[#1ED202]');
//     console.log(seatNumber);
//     // console.log(typeof availableSeat)
//     const seatElement = document.getElementById('seat-num');
//     console.log(seatElement);
//     for(let i=1; i<=1; i++){
//         // if(purchaseLimit)
//         seatNumber -= 1;
//     }
//     console.log(seatNumber);
//     return seatElement.innerText = seatNumber;
// }

const allBtn = document.getElementsByClassName('seat-btn');

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

        // Price calculation
        const total = document.getElementById('total-price').innerText;
        const totalPrice = parseInt(total);

        document.getElementById('total-price').innerText = totalPrice + parseInt(span3.innerText);

        setInnerText('seat-num', count);
    });
}

function setInnerText(elementId, seatNum){
    document.getElementById(elementId).innerText = seatNum;
}