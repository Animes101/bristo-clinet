import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Checkout from '../Components/Checkout';
import SectionHeading from '../Components/SectionHeading';







const stripePromise = loadStripe('pk_test_51SCGF3BYEar1XfTaZRScYRHs5WpIKbYz2VwALFkV6yyYRpgWse4AZFCU3Xc9w9UH5UeTD6e5jPC2wz4apT2IJklz00rhAbpZHu');
const Payment = () => {
  return (
    <div>
      <SectionHeading title={" Pament now"} 
        desc={""} 
        time={"---Pament Now?---"}>

      </SectionHeading>
      <Elements stripe={stripePromise}>

        <Checkout />

      </Elements>
    </div>
  )
}

export default Payment