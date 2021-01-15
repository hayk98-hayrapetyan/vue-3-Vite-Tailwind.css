<template>
  <div class="flex items-center justify-between mb-10">
    <router-link to="/">
      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM23 10.5L2 10.5V13.5L23 13.5V10.5Z" fill="black"/>
      </svg>
    </router-link>
    <h1 class="text-center text-2xl">Select contact</h1>
    <router-link to="/add-contact" class="rounded-full border-solid border-2 border-black h-10 w-10 flex items-center justify-center">
      <span class="text-4xl">+</span>
    </router-link>
  </div>
  <div class="my-4" v-for="contact in contacts">
    <input
        type="text"
        class="w-full"
        :value="contact.first_name + ' ' +contact.last_name + ' => ' + contact.email"
        readonly
        @click="select(contact.id)"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

export default {
  setup(){
    const store = useStore();
    const router = useRouter();

    const contacts = store.state.contact.contacts
    function select(id) {
      store.commit('contact/SET_SELECTED_CONTACT', id)
      router.push('/')
    }

    return {
      contacts,
      select
    }
  },
}
</script>
