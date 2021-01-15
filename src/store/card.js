export default {
    namespaced: true,
    state: {
        cards: [
            {id: 1, full_name: 'Arman Avetisyan', date: '03/12', number: '1321123112311201'},
            {id: 2, full_name: 'Gexam Gexamyan', date: '10/12', number: '1121123112311251'},
        ],
        banks: [
            {id: 1, full_name: 'Poxos Poxosyan', date: '06/12', number: '36454242'},
            {id: 2, full_name: 'Petros Petrosyan', date: '03/12', number: '75321842'},
        ],
        selected_methods: null
    },
    getters: {
        getCards: state => {
            return state.cards
        },
        getBanks: state => {
            return state.banks
        },
    },
    mutations: {
        GET_AND_SET_CARD_AND_BANKS(state){
            if(localStorage.getItem('banks') && localStorage.getItem('cards')){
                state.cards = JSON.parse(localStorage.getItem('cards'));
                state.banks = JSON.parse(localStorage.getItem('banks'));
            } else {
                localStorage.setItem('cards', JSON.stringify(state.cards))
                localStorage.setItem('banks', JSON.stringify(state.banks))
            }
        },
        SET_SELECTED_METHODS(state, payload){
            state.selected_methods = state[payload.type + "s"].filter(method => {
                return method.id == payload.id;
            })[0];
        },
        ADD_CARD(state, payload){
            payload.id = state.cards.length + 1;
            state.cards.push(payload);
            localStorage.setItem('cards', JSON.stringify(state.cards));
        },
        ADD_BANK(state, payload){
            payload.id = state.banks.length + 1;
            state.banks.push(payload);
            localStorage.setItem('banks', JSON.stringify(state.banks));
        }
    },
}