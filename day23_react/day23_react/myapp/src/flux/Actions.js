import Dispatcher from "./Dispatcher";

function addToCart(item){
    Dispatcher.dispatch({
        type: 'ADD_TO_CART',
        item
    })
}

function removeItemCart(item){
    Dispatcher.dispatch({
        type: 'REMOVE_ITEM_CART',
        item
    })
}

export {
    addToCart,
    removeItemCart
}