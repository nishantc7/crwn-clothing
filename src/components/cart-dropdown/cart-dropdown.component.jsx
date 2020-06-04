import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.components';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown"> 
    <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={CartItem.id} item={cartItem} />)
                
                }
    </div>

    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems : cartItems
})

export default connect(mapStateToProps)(CartDropdown);