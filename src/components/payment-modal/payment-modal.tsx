import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button from '../../components/button/button'
import './payment-modal.scss'

interface Props {
  setOpenModal: (open: {orderSummary: boolean, payment: boolean}) => void
}

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

  // const options: any = {
  //   paddingLeft: '5px',
  // }

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
          <form>
            <input type="text" name="name" placeholder="Name" required/>
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
                      fontSize: '15px',
                      color: 'red',
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