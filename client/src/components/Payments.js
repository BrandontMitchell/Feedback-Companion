import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                amount={500} // 5 dollars us currency (500 cents)
                token={token => console.log(tokend)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default Payments;