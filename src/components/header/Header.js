import React from 'react';
import {useSelector} from "react-redux";


export const Header = (props) => {
    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({wishlist, cart}))
    let summa = cart.reduce((a, cart) => a + cart.price, 0)
    let summa_wishlist = wishlist.reduce((a, wishlist) => a + wishlist.price, 0)
    return (
        <header className=" header d-flex justify-between">
            <h2>Shop</h2>
            <div className="d-flex justify-between align-center">
                <div className="mx-10" style={{cursor: "pointer"}} title={summa_wishlist}>wishlist
                    :{wishlist.length}</div>
                <div className="mx-10" style={{cursor: "pointer"}} title={summa}>cart :{cart.length}</div>
            </div>
        </header>
    )
}
