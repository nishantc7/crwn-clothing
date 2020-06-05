import React from 'react';
import StripeCheckout from 'react-stripe-checkout'


const onToken = token => {
    console.log(token)
    alert('Payment Successful')
} 

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100
    
    return (<StripeCheckout 
    label='Pay Now'
    name="CRWN Clothing Ltd"
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/LpV.svg"
    description ={`Your Total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey="pk_test_51GqkXNFbxmu0GM8AzH3oMPjzYt3IEKzPM9aKIoUY6pIzTs0QS6G6F1055Xs2NQBnlZ3B0qtcD4BtvNuONYLIUqSF00IyzqD1qS"
    />)
    
    }
    export default StripeCheckoutButton;