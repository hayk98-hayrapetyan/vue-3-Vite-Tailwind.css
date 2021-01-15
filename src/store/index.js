import { createStore } from 'vuex'
import contact from "./contact"
import card from "./card"

const store = createStore({
    modules: {
        contact,
        card
    }
})


export default store;