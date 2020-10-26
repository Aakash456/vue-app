const state = {
    products: null,
    categories:null,
}

const getters = {

}

const mutations = {
    // products
    SET_PRODUCTS(state, productsPayload){
        state.products = productsPayload
    },
    REMOVE_PRODUCTS(state){
        state.categories = null
    },
    SET_CATEGORIES(state, categoriesPayload) {
        state.categories = categoriesPayload
    },

    REMOVE_CATEGORIES(state) {
        state.categories = null
    },
    // end categories
}


const actions = {
    // Products
    setProducts({commit}, productsPayload){
        commit('SET_PRODUCTS', productsPayload)
    },
    removeProducts({commit}){
        commit('REMOVE_PRODUCTS')
    },
    // end products

    // categories
    setCategories({commit}, categoriesPayload) {
        commit('SET_CATEGORIES', categoriesPayload)
    },
    removeCategories({commit}){
        commit('REMOVE_CATEGORIES')
    },
    // end categories
}
export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}