import {PaymentElement} from '@stripe/react-stripe-js';
import { Button } from 'reactstrap';

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <Button className='mt-3'>Submit</Button>
    </form>
  );
};

export default CheckoutForm;
