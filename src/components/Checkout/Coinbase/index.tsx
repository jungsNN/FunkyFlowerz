
const CoinbaseCheckout = () => {
  return (
    <div>
      <a className="donate-with-crypto"
        href={`https://commerce.coinbase.com/checkout/${process.env.NEXT_COINBASE_CHECKOUT_ID}`}
        target="_blank"
        rel="noreferrer"
        style={{color: '#e4ebff'}}
        >
        Coinbase Checkout
      </a>
  </div>
  )
}

export default CoinbaseCheckout;
