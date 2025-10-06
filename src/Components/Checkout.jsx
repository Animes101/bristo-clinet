import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import useAxiosSecure from '../hooks/useAxiosSecure'
import useCart from '../hooks/useCart'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Checkout = () => {
  const stripe = useStripe()
  const elements = useElements()
  const axiosSecure = useAxiosSecure()
  const {cart} =useCart()
  const {user}=useContext(AuthContext)

  console.log(user)


const total = Math.round(cart.reduce((sum, item) => sum + Number(item.price || 0), 0))


  console.log(total)

  const [error, setError] = useState('')
  const [client, setClient] = useState('')

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { amount: total })
      .then(res => {
        console.log(res.data.clientSecret)
        setClient(res.data.clientSecret)
      })
      .catch(err => console.log(err))
  }, [axiosSecure, total])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) return

    const card = elements.getElement(CardElement)
    if (!card) return

    // 🟢 Step 1: পেমেন্ট মেথড তৈরি করা
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('[error]', error)
      setError(error.message)
      return
    } else {
      console.log('[PaymentMethod]', paymentMethod)
      setError('')
    }

    // 🟢 Step 2: পেমেন্ট কনফার্ম করা
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(client, {
      payment_method: {
        card: card,
        billing_details: {
          name: 'Anik barman'
        }
      }
    })

    if (confirmError) {
      console.log('[Confirm Error]', confirmError)
      setError(confirmError.message)
    } else {
      console.log('Payment successful ✅', paymentIntent)
      alert('Payment Successful!');



      //save payment info to the database
      const paymentInfo = {
        id: paymentIntent.id,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        status: paymentIntent.status,
        email:user?.email,
        date: new Date(),
        cartItemId: cart.map(item => item._id),
        PaymentStatus:'pending'
        
      }

      console.log(paymentInfo)

      axiosSecure.post('/payments', paymentInfo)
        .then(res => {
          console.log('Payment info saved to database:', res.data)
        })
        .catch(err => {
          console.error('Error saving payment info:', err)
        })
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">

      <h2>{`Total: $${total}`}</h2>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': { color: '#aab7c4' },
              },
              invalid: { color: '#9e2146' },
            },
          }}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          type="submit"
          className="btn btn-secondary mt-6"
          disabled={!stripe || !client}
        >
          Pay
        </button>
      </form>
    </div>
  )
}

export default Checkout
