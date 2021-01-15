<template>
  <div class="flex flex-col justify-between w-full min-h-screen pb-16">
    <div>
      <img src="../assets/img/done.png" alt="done" height="150" width="150" class="text-center block mx-auto my-7">
      <h1 class="text-center text-2xl">Payment complete successfully</h1>
    </div>
    <router-link to="/" class="text-center bg-blue-500 w-full py-4 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Make another one
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1);
}

@keyframes ping {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>