import React from 'react';
import {ProductItem} from "../product-item/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishList} from "../../redux";

export const ProductList = ({products}) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(({wishlist: {wishlist}}) => wishlist)
    const cart = useSelector(({cart: {cart}}) => cart)

    console.log(...wishlist)

    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    };
    const onAddToWishList = (product) => {
        dispatch(toggleItemInWishList(product))
    };


    return (
        <div>
            {
                products.map((product) => (
                    <ProductItem
                        isAddedToWishlist={!!wishlist.find(({id}) => id === product.id)}
                        isAddedToCart={!!cart.find(({id}) => id === product.id)}
                        onAddToCart={onAddToCart}
                        onAddToWishList={onAddToWishList}
                        key={product.id} product={product}/>

                ))}

            {
                wishlist.map(el => <h1>(el.price}</h1>)
            }

        </div>

    );
};
