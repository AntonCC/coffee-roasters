import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import Button from '../../components/button/button'
import './payment-modal.scss'

interface Props {
  setOpenModal: (open: {orderSummary: boolean, payment: boolean}) => void
}

interface IState {
  name: string
  email: string
  address: string 
  city: string
  state: string
}

const api = axios.create({
  baseURL: 'https://antonchet.com:5050/api',
  headers: {'Access-Control-Allow-Origin': '*'}
})


const PaymentModal: React.FC<Props> = ({ setOpenModal }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setLoading] = useState(false)
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!stripe || !elements) {
      return;
    }
    setLoading(true)
    const res = await api.post('/secret', {params: { amount: '14'}})
    const clientSecret = res.data.client_secret

    const cardElement = elements.getElement(CardElement)!
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: formDetails.name,
          // @ts-ignore
          address: formDetails.address,
          city: formDetails.city,
        }
      }
    }).then(result => {
      if(result.error) {
        console.log(result.error.message)
        alert('Error processing the payment. Please review billing information and try again.')
      } else if(result.paymentIntent.status === 'succeeded') {
        console.log("Payment successful.")
        alert("Payment Successfull.")
      }
      setLoading(false)
    })
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setFormDetails({[name]: value}as Pick<IState, keyof IState>);
  }

  const handleBackgroundClick = () => {
    setOpenModal({ orderSummary: false, payment: false})
  }

  return (
    <div className='payment-modal'>
      <div className="dark-background" onClick={handleBackgroundClick}></div>
      <div className="payment">
        <div className="title-wrap">
          <h2>Payment</h2>
        </div>
        <div className="body-wrap">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="text" name="address" placeholder="Address" required/>
            <div className="row">
              <input type="text" name="city" placeholder="City" required/>
              <input type="text" name="state" placeholder="State" required/>
            </div>
            <div className="element-wrapper">
              <CardElement options={{
                  style: {
                    base: {
                      fontSize: '17px',
                      fontStyle: "'Barlow', sans-serif"
                    },
                  }
                }} 
              />
            </div>
            <div className="cta">
              <Button>
                Pay Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal;