import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.components';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'


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

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);