<template>
  <div class="flex items-center justify-between mb-10">
    <router-link to="/contact">
      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM23 10.5L2 10.5V13.5L23 13.5V10.5Z" fill="black"/>
      </svg>
    </router-link>
    <h1 class="text-center text-2xl">New contact</h1>
    <div class="opacity-0">
      <span class="text-4xl">+</span>
    </div>
  </div>
  <form @submit.prevent="addContact" class="text-left">
    <div class="my-8">
      <label>First Name</label><br />
      <input type="text" class="w-full" v-model="contact.first_name" />
    </div>
    <div class="my-8">
      <label>Last Name</label><br />
      <input type="text" class="w-full" v-model="contact.last_name">
    </div>
    <div class="my-8">
      <label>Email</label><br />
      <input type="text" class="w-full" v-model="contact.email">
    </div>

    <span class="text-red-800 text-center block" v-if="error">Please fill all fields</span>
    <span class="text-red-800 text-center block" v-if="errorEmail">Email is not valid :(</span>
    <button class="bg-blue-500 w-full py-4 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      SAVE
    </button>
  </form>
</template>

<script>
import {useStore} from 'vuex';
import {reactive, ref} from "vue";
import { useRouter } from 'vue-router';
import {form_validate} from "../mixins/error";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    let error = ref(false);
    let errorEmail = ref(false);

    const contact = reactive({
      first_name: '',
      last_name: '',
      email: ''
    })
    const addContact = () => {
      error.value = false;
      errorEmail.value = false;

      if (form_validate(contact) == true) {
        return error.value = true
      }
      if (!validateEmail()) {
        errorEmail.value = true;
        return ;
      }

      store.commit('contact/ADD_CONTACT', contact);
      store.commit('contact/SET_SELECTED_CONTACT', store.state.contact.contacts.length);
      router.push('/')
    }

    function validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(contact.email);
    }

    return {contact, error, errorEmail, addContact}
  },
}
</script>
