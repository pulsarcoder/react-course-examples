import React from 'react';
import logo from '../../logo.svg';
import './ShoppingCartApp.css';

const initialCartItems = [
    { productName: 'Chicken Momo', quantity: 1, price: 10.50 },
    { productName: 'Spicy Mexican Potatoes', quantity: 1, price: 8.50 },
    { productName: 'Breakfast', quantity: 1, price: 5.90 }
];

const stateArray = [
    { cartItems: initialCartItems }
];

export default class ShoppingCartApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: initialCartItems
        };
    }

    getCartTotal = () => {
        const cartItems = this.state.cartItems;
        let cartTotal = 0;
        cartItems.forEach((c) => (cartTotal += (c.price * c.quantity)));
        return cartTotal;
        // return cartItems.reduce((cp, cc) => ((cp.price * cp.quantity) + (cc.price * cc.quantity)));
    }

    onIncrement = (cartItem) => {
        this.dispatch({ type: 'INCREMENT', payload: { cartItem } });
    }

    onQuantityChange = (e, cartItem) => {
        const quantity = parseFloat(e.target.value);
        this.dispatch({ type: 'UPDATE_QUANTITY', payload: { quantity, cartItem } });
    }

    onDecrement = (cartItem) => {        
        this.dispatch({ type: 'DECREMENT', payload: { cartItem } });
    }

    onRemove = (cartItem) => {
        this.dispatch({ type: 'REMOVE', payload: { cartItem } });
    }

    onUndo = () => {
        this.dispatch({ type: 'UNDO', payload: { cartItem: {} } });
    }

    onCancel = () => {
        this.dispatch({ type: 'CANCEL', payload: { cartItem: {} }});
    }

    onCheckout = () => {
    }

    dispatch = (action) => {
        // action will type, payload
        const { cartItems } = Object.assign({}, this.state);
        const nextState = this.cartReducer({ cartItems }, action);
        stateArray.push({ cartItems: initialCartItems });
        this.setState(nextState);
    }

    // reducer with prevState, action { type: string, payload: object }
    cartReducer = (prevState = {}, action) => {
        const { cartItems } = {...prevState};
        const { cartItem } = action.payload;
        const cartItemIdx = cartItems.findIndex(c => c.productName === cartItem.productName);
        
        switch(action.type) {
            case 'INCREMENT':
                cartItem.quantity = cartItem.quantity + 1;
                cartItems[cartItemIdx] = cartItem;
                return Object.assign({}, { cartItems });
            case 'DECREMENT':
                cartItem.quantity = cartItem.quantity - 1;
                cartItems[cartItemIdx] = cartItem;
                return { cartItems };
            case 'REMOVE':
                cartItems.splice(cartItemIdx, 1);
                return { cartItems };
            case 'UPDATE_QUANTITY':
                cartItem.quantity = cartItem.quantity + action.payload.quantity;
                cartItems[cartItemIdx] = cartItem;
                return { cartItems };
            case 'UNDO':
                return { cartItems: [
                    { productName: 'Chicken Momo', quantity: 1, price: 10.50 },
                    { productName: 'Spicy Mexican Potatoes', quantity: 1, price: 8.50 },
                    { productName: 'Breakfast', quantity: 1, price: 5.90 }
                ] };
            case 'CANCEL':
                return { ...stateArray[0] };
            default:
                return {...prevState};
        }
    }

    render() {
        return (
            <div className="shopping-cart-app">
                <section className="shopping-cart">
                    <h3>Shopping Cart</h3>
                    <div className="cart-items-block">
                        <ul className="cart-item-list">
                            {this.state.cartItems.map((cartItem) => {
                                return (<li className="cart-list-item">
                                    <div className="cart-item">
                                        <img src={logo} alt="avatar" className="cart-item-avatar" />
                                        <h4 className="cart-item-name">{cartItem.productName}</h4>
                                        <div className="counter">
                                            <button type="button" className="btn" onClick={() => this.onDecrement(cartItem)}>-</button>
                                            <input type="text" value={cartItem.quantity} onChange={(e) => this.onQuantityChange(e, cartItem)} />
                                            <button type="button" className="btn" onClick={() => this.onIncrement(cartItem)}>+</button>
                                        </div>
                                        <span>{cartItem.price}</span>
                                        <button type="button" className="btn" onClick={() => this.onRemove(cartItem)}>&times;</button>
                                    </div>
                                </li>);
                            })}
                        </ul>
                        <span className="cart-total">{this.getCartTotal()}</span>
                    </div>
                </section>
                <section className="card-details">
                    <div className="card-details-block">
                        <button type="button" className="checkout-btn" onClick={this.onUndo}>Undo</button>
                        <button type="button" className="checkout-btn" onClick={this.onCancel}>Cancel</button>
                        <button type="button" className="checkout-btn">Checkout</button>
                    </div>
                </section>
            </div>
        )
    }
}