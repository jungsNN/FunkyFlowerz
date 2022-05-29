
import CoinbaseCommerceButton from 'react-coinbase-commerce';

type MessageData = {
  event: 'charge_confirmed' | 'charge_failed' | 'payment_detected',
  code: any;// <CHARGE_CODE>
}

const CoinbaseCheckout = () => {
  return (
    <div className="donate-with-crypto">      
      <CoinbaseCommerceButton 
          onChargeSuccess={(data: MessageData) => console.log(data)}
          onChargeFailuted={(data: MessageData) => console.log(data)}
          onPaymentDetected={(data: MessageData) => console.log(data)}
          checkoutId={process.env.NEXT_COINBASE_CHECKOUT_TEST_ID}>
            Coinbase Checkout
      </CoinbaseCommerceButton>
    </div>
  )
}

export default CoinbaseCheckout;
