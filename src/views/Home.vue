<template>
  <h1 class="text-center text-2xl">Make a payment</h1>
  <div class="text-left flex flex-col justify-between w-full min-h-screen pb-20">
    <div>
      <router-link :to="{name: 'Contact'}" class="my-8 block">
        <label>Select contact</label><br />
        <input
            type="text"
            class="w-full"
            v-model="form.contact"
            placeholder="Name Surname"
            readonly
        />
      </router-link>
      <router-link :to="{name: 'Payment'}" class="my-8 block">
        <label>Select payment method</label><br />
        <input
            type="text"
            class="w-full"
            v-model="form.method"
            placeholder="Name Surname"
            readonly
        />
      </router-link>
      <div class="my-8 block">
        <label>Enter amount</label><br />
        <input type="number" class="w-full" placeholder="1000" v-model="form.amount">
      </div>
    </div>

    <div>
      <span class="text-red-800 text-center block" v-if="error">Please fill all fields</span>
      <button @click="pay" class="bg-blue-500 w-full py-4 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        PAY
      </button>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {reactive, ref} from "vue";
import { useRouter } from 'vue-router';
import {form_validate} from "../mixins/error";

export default {
  setup(){
    const store = useStore();
    const router = useRouter();
    let error = ref(false);

    const form = reactive({
      contact: store.state.contact.selected_contact ? store.state.contact.selected_contact.first_name + ' ' + store.state.contact.selected_contact.last_name : '',
      method: store.state.card.selected_methods ? store.state.card.selected_methods.full_name : '',
      amount: ''
    })
    const pay = () => {
      if (form_validate(form) == true) {
        return error.value = true
      }
      router.push({name: "Done"})
    }

    return {
      form, pay, error
    }
  },
}
</script>
