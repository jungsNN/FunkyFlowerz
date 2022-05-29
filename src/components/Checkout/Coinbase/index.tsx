
import { Col, Row } from '@/components/styled';
import { BTC, ETH, USDC } from '@/components/svg';
import CoinbaseCommerceButton from 'react-coinbase-commerce';

type MessageData = {
  event: 'charge_confirmed' | 'charge_failed' | 'payment_detected',
  code: any;// <CHARGE_CODE>
}

const CoinbaseCheckout = () => {
  return (
    <Row  justify="center">
      <button style={{ width: '200px', height: '40px', background: '#005CC5'}}>
          <CoinbaseCommerceButton 
              onChargeSuccess={(data: MessageData) => console.log(data)}
              onChargeFailuted={(data: MessageData) => console.log(data)}
              onPaymentDetected={(data: MessageData) => console.log(data)}
              checkoutId={process.env.NEXT_COINBASE_CHECKOUT_TEST_ID}>
                Coinbase Checkout
          </CoinbaseCommerceButton>
          
      </button>
      <div className="coinbase-payment-options" style={{background: '#FFFFFF42', width: '200px', height: '35px'}}>
        <Col justify="space-around" align="center">
          <div className="coinbase-btc">
            <BTC />
          </div>
          <div className="coinbase-eth">
            <ETH fill="white"/>
          </div>
          <div className="coinbase-usdc">
            <USDC />
          </div>
        </Col>
        </div>
    </Row>
  )
}

export default CoinbaseCheckout;
