import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from './checkoutForm';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Nusq3DVEqXqMsoyNZYJHq2C0asYhAt5sPOGNr3zrza3RmKZw1zI9YaEZIPe0n7Z61Lchc8lLp0VfwzYcFd0IcNN00MmWfr8Gx');

export default function Checkout() {
    const [clientId, setClientId] = useState("");

    const getClientSecrect = ()=>{
        fetch("http://localhost:3000/new/transaction").then(res=>res.json()).then((d)=>{
            setClientId(d.client_secret)
        })
    }
    useEffect(()=>{
        getClientSecrect()
    },[])
  const options = {
    // passing the client secret obtained from the server
    clientSecret: `${clientId}`,
  };

  return (
    <>
    {clientId !=='' &&( <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>)}
    </>
  );
};
