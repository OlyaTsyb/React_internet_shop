import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {useServices} from "./services";
import {setProducts} from "./redux/action-creators";


export default function App() {
    const {cart, wishlist, products} = useSelector(({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
            cart,
            wishlist,
            products
        })
    );
    console.log(cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProducts())
        //fetchData()
    }, [dispatch])

    return (
        <div className="App">
            <Header/>
            <ProductList products={products}/>
            <h1>{cart.length} {wishlist.length} {products.length}
            </h1>
        </div>
    );
}

