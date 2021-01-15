export default {
    namespaced: true,
    state: {
        contacts: [
            {id: 1, first_name: 'Arman', last_name: 'Avetisyan', email: "arman@gmail.com"},
            {id: 2, first_name: 'Gexam', last_name: 'Gexamyan', email: "gexam@gmail.com"},
            {id: 3, first_name: 'Poxos', last_name: 'Poxosyan', email: "poxos@gmail.com"},
            {id: 4, first_name: 'Petros', last_name: 'Petrosyan', email: "petros@gmail.com"},
            {id: 5, first_name: 'Minas', last_name: 'Minasyan', email: "minas@gmail.com"},
        ],
        selected_contact: null
    },
    getters: {
        getContacts: state => {
            return state.contacts
        }
    },
    mutations: {
        GET_AND_SET_CONTACTS(state){
            if(localStorage.getItem('contacts') && localStorage.getItem('contacts') != undefined){
                state.contacts = JSON.parse(localStorage.getItem('contacts'));
            } else {
                localStorage.setItem('contacts', JSON.stringify(state.contacts))
            }
        },
        SET_SELECTED_CONTACT(state, payload){
            state.selected_contact = state.contacts.filter(contact => {
                return contact.id == payload;
            })[0];
        },
        ADD_CONTACT(state, payload){
            payload.id = state.contacts.length + 1;
            state.contacts.push(payload);
            localStorage.setItem('contacts', JSON.stringify(state.contacts));
        }
    },
}