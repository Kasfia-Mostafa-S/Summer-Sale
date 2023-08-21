let total = 0;

function productName(target){

  // adding product
  const eachProductName = target.childNodes[5].childNodes[1].innerText;
  const li = document.createElement('li');
  li.innerText = eachProductName
  const selectedItemContainer = document.getElementById('selected-items')
  selectedItemContainer.appendChild(li)

// prices of the products
  const price = target.childNodes[5].childNodes[3].innerText.split(' ')[0];

  total = parseFloat(total) + parseFloat(price);
  totalTwoDecimal = total.toFixed(2);
  
  // set total price
  document.getElementById('total-price').innerText = totalTwoDecimal;

  // discount
  const discountValueString = document.getElementById('discount').innerText;
  discountValue = parseFloat(discountValueString);
  discountValues = discountValue.toFixed(2);
  const totalAmount = document.getElementById('total-amount').innerText = totalTwoDecimal;

  // purchase
  const productPurchase = document.getElementById('purchase')
  if( totalAmount >= 0){
    productPurchase.removeAttribute('disabled');
  }

  // go home reload
  document.getElementById('home').addEventListener('click',function(){
    location.reload();
  }) 
  
}

// apply and purchase
  document.getElementById('apply-text').addEventListener('keyup',function(event){
    const text = event.target.value;
    const couponButton = document.getElementById('apply-btn');

      if(totalTwoDecimal > 200 && text === 'SELL200'){
        couponButton.removeAttribute('disabled');
        discountValues = totalTwoDecimal * .20;
        finalBuyingAmount = parseFloat(discountValues);
        discount.innerText = finalBuyingAmount.toFixed(2);

        finalAmount = totalTwoDecimal - finalBuyingAmount;
        
        const totalAmount = document.getElementById('total-amount').innerText = finalAmount;
      }
      else{
        couponButton.setAttribute('disabled',true)
       }
      
  })

     
      


       
      

     
  






 