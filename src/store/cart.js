import swal from 'sweetalert'

const state = {
    cart: [],
}

const getters = {
    cartLength(){
        return state.cart.length
    }
}
const mutations = {
    ADD_TO_CART(state, productId){
        // add the cart or append the card
        const cart = JSON.parse(localStorage.getItem('cart'))
        if(cart){
            const exisiting_cart = JSON.parse(localStorage.getItem('cart'))
            exisiting_cart.push(productId)
            state.cart = exisiting_cart
            localStorage.setItem('cart', JSON.stringify(exisiting_cart))
        }
        else{
            state.cart.push(productId)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
        swal('Success!', 'Item Added to Cart', 'success');
    },
    Remove_FROM_CART(state, productId){
        // remove item from cart
        const exisiting_cart = JSON.parse(localStorage.getItem('cart'))
        let position = exisiting_cart.indexOf(productId)
        exisiting_cart.splice(position, 1)
        state.cart = exisiting_cart
        localStorage.setItem('cart', JSON.stringify(exisiting_cart))
        swal('Removed!', 'Item Removed from Cart', 'warning');
    },
    LOAD_CART(state) {
        if(JSON.parse(localStorage.getItem('cart'))) {
            state.cart = JSON.parse(localStorage.getItem('cart'))
        }
        
    },
}
const actions = {
    addToCart({commit}, productId){
        commit('ADD_TO_CART', productId)
    },
    removeFromCart({commit}, productId){
        commit('REMOVE_FROM_CART', productId)
    },
    loadCart({commit}) {
        commit('LOAD_CART')
    },
}
export default{
    state: state,
    getters:getters,
    mutations: mutations,
    actions:actions
}