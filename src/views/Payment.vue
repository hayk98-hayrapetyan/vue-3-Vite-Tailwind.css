<template>
  <div class="flex items-center justify-between mb-10">
    <router-link to="/">
      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM23 10.5L2 10.5V13.5L23 13.5V10.5Z" fill="black"/>
      </svg>
    </router-link>
    <h1 class="text-center text-2xl">Select methods</h1>
    <router-link to="/add-card" class="rounded-full border-solid border-2 border-black h-10 w-10 flex items-center justify-center">
      <span class="text-4xl">+</span>
    </router-link>
  </div>
  <h1 class="text-left text-2xl">Credit/debit cards</h1>
  <div class="my-4 p-4 border border-2 border-black" v-for="(card, index) in cards" :key="index" @click="setMethods('card', card.id)">
    <div class="flex items-center justify-between mb-5">
      <div class="cvv w-12 h-8 border border-2 border-black text-center pt-1"></div>
      <div>
        <div class="rounded-full bg-black h-1 w-1 mb-1" v-for="n in 3"></div>
      </div>
    </div>
    <h1 class="text-2xl">{{ card.full_name }}</h1>
    <div class="flex items-center justify-between mt-5">
      <div class="code">**** **** **** {{ card.number.slice(12) }}</div>
      <h1 class="text-2xl">{{ card.date }}</h1>
    </div>
  </div>

  <h1 class="text-left text-2xl mt-8">Bank account</h1>
  <div class="my-4 p-4 border border-2 border-black" v-for="(bank, index) in banks" :key="index" @click="setMethods('bank', bank.id)">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h1 class="text-2xl">{{ bank.full_name }}</h1>
        <h1 class="text-2xl">{{ bank.number }}</h1>
      </div>
      <div>
        <div class="rounded-full bg-black h-1 w-1 mb-1" v-for="n in 3"></div>
      </div>
    </div>
    <div class="flex items-center justify-between mt-5">
      <div class="code"></div>
      <h1 class="text-2xl">{{ bank.date }}</h1>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

export default {
  setup(){
    const store = useStore();
    const router = useRouter();

    const cards = store.state.card.cards;
    const banks = store.state.card.banks;
    function setMethods(type, id) {
      store.commit('card/SET_SELECTED_METHODS', {type: type, id: id})
      router.push('/')
    }

    return {cards, banks, setMethods}
  },
}
</script>
