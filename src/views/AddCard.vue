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
    <router-link to="add-card" class="w-2/4 h-10 text-center py-2 bg-blue-600 text-white">CARD</router-link>
    <router-link to="add-bank" class="w-2/4 h-10 border border-2 border-black text-center py-2">Bank Account</router-link>
  </div>
  <form @submit.prevent="addCard()" class="text-left">
    <div class="my-8">
      <label>Full Name</label><br />
      <input type="text" class="w-full" v-model="card.full_name" placeholder="Name Surname "/>
    </div>
    <div class="my-8">
      <label>Card Number</label><br />
      <input
          type="number"
          class="w-full"
          v-model="card.number"
          placeholder="4554 4554 4554 4554"
          @input="card.number.length > 16 ? card.number = card.number.slice(0, 15) : card.number"
      />
    </div>
    <div class="my-8">
      <label>Expire Date</label><br />
      <input
          type="text"
          class="w-full"
          v-model="card.date"
          placeholder="mm/yy"
          maxlength="5"
          @keydown.delete="cc"
          @input="card.date.length == 2 ? card.date += '/' : card.date"
      />
    </div>

    <span class="text-red-800 text-center block" v-if="errors.empty">Please fill all fields</span>
    <span class="text-red-800 text-center block" v-if="errors.date">Please write true date</span>
    <span class="text-red-800 text-center block" v-if="errors.number">Not a valid Visa credit card number!</span>
    <span class="text-red-800 text-center block" v-if="errors.expired">The expiry date is before today's date. Please select a valid expiry date</span>

    <button class="bg-blue-500 w-full py-4 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      SAVE
    </button>
  </form>
</template>

<script>
import {mapMutations} from "vuex";
import {useStore} from 'vuex';
import {reactive, ref} from "vue";
import { useRouter } from 'vue-router';
import {form_validate} from "../mixins/error";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    let errors = reactive({
      empty: false,
      expired: false,
      date: false,
      number: false,
    });

    const card = reactive({
        full_name: '',
        number: '',
        date: ''
    })

    const addCard = () => {
      errors.empty = false;
      if (form_validate(card) == true) {
        return errors.empty = true
      }

      expireValidation();
      numberValidation();
      for (let a in errors){
        if(errors[a]){
          return;
        }
      }

      store.commit('card/ADD_CARD', card);
      router.push('/payment')
    }

    //validations
    function numberValidation(){
      errors.number = false;
      let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      if(!cardno.test(card.number)) {
        errors.number = true;
      }
    }

    function expireValidation(){
      errors.expired = false;
      errors.date = false;

      let today, someday;
      let exYear = card.date.slice(3, 5);
      let exMonth = card.date.slice(0, 2);
      if(exMonth < 1 || exMonth > 12 || isNaN(exYear) || isNaN(exMonth)){
        errors.date = true;
        return;
      }

      today = new Date();
      someday = new Date();
      someday.setFullYear(Number(('20' + exYear)), exMonth - 1, 1);
      if (someday < today) {
        errors.expired = true;
      }
    }

    function cc(){
      if(card.date.length == 3){
        card.date = card.date.split('/').join('');
      }
    }

    return {card, errors, addCard, cc}
  }
}
</script>
