<template>
  <div class="flex items-center justify-between mb-10">
    <router-link to="/payment">
      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM23 10.5L2 10.5V13.5L23 13.5V10.5Z" fill="black"/>
      </svg>
    </router-link>
    <h1 class="text-center text-2xl">New Card</h1>
    <div class="opacity-0">
      <span class="text-4xl">+</span>
    </div>
  </div>
  <div class="nav flex items-center justify-around">
    <router-link to="add-card" class="w-2/4 h-10 border border-2 border-black text-center py-2">CARD</router-link>
    <router-link to="add-bank" class="w-2/4 h-10 text-center py-2 bg-blue-600 text-white">Bank Account</router-link>
  </div>
  <form @submit.prevent="addCard" class="text-left">
    <div class="my-8">
      <label>Account Name</label><br />
      <input type="text" class="w-full" v-model="card.full_name" placeholder="Name Surname "/>
    </div>
    <div class="my-8">
      <label>Account Number</label><br />
      <input
          type="text"
          class="w-full"
          v-model="card.number"
          placeholder="############"
      />
    </div>
    <div class="my-8">
      <label>BSB</label><br />
      <input
          type="text"
          class="w-full"
          v-model="card.date"
          placeholder="####"
      />
    </div>

    <span class="text-red-800 text-center block" v-if="empty">Please fill all fields</span>
    <button class="bg-blue-500 w-full py-4 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      SAVE
    </button>
  </form>
</template>

<script>
import { useStore } from 'vuex';
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router';
import { form_validate } from "../mixins/error";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    let error = ref(false);

    const card = reactive({
      full_name: '',
      number: '',
      date: ''
    })
    const addCard = () => {
      if (form_validate(card) == true) {
        return error.value = true
      }
      store.commit('card/ADD_BANK', card);
      router.push('/payment')
    }

    return {card, error, addCard}
  },
}
</script>
