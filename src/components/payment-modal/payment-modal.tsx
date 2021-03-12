import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../../components/button/button'
import { ReactComponent as X } from '../../assets/shared/mobile/times-solid.svg'
import './payment-modal.scss'

const modalVariants = {
  hidden: {
    opacity: 0,
    top: 0
  },
  visible: {
    opacity: 1,
    top: '50%',
    transition: {
      type: 'spring',
      mass: 0.7
    }
  }
}

interface Props {
  setOpenModal: (open: {orderSummary: boolean, payment: boolean}) => void,
  orderTotal: number,
  orderTotalString: string,
  setSelectedOptions: (option: Array<{id: number, optionTitle: string, price?: number}> ) => void,
}

// For form handleChange
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


const PaymentModal: React.FC<Props> = ({ setOpenModal, orderTotal, orderTotalString, setSelectedOptions }) => {
  const stripe = useStripe()
  const elements = useElements()
  let history = useHistory()
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
    const res = await api.post('/secret', {params: { amount: orderTotalString}})
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
        alert("Payment Successfull.")
      }
      setLoading(false)
      closeAllModals()
      history.push('/')
    })
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setFormDetails({[name]: value}as Pick<IState, keyof IState>);
  }

  const closeAllModals = () => {
    setOpenModal({ orderSummary: false, payment: false})
  }

  return (
    <div className='payment-modal'>
      <div className="dark-background" onClick={closeAllModals}></div>
      <motion.div 
        className="payment"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="title-wrap">
          <h2>Payment</h2>
          <p>*Test Card Num: 4242 4242 4242 4242</p>
          <p>*Exp: 12/22, *CVC: 222</p>
          <p>*Zip: 11538</p>
          <div className="close" onClick={closeAllModals}>
            <X />
          </div>
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
              <h3>${ orderTotalString }/mo</h3>
              <Button disabled={isLoading}>
                {
                  isLoading
                    ? 'Processing...'
                    : 'Pay Now'
                }
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default PaymentModal;