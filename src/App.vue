<template>
  <div class="px-7">
    <router-view v-slot="slotProps">
        <transition name="route">
          <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName: 'slide'
    }
  },
  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.meta.depth || 0;
  //     const fromDepth = from.meta.depth || 0;
  //
  //     this.transitionName = toDepth >= fromDepth ? 'slide' : 'slide-right';
  //   }
  // }
}
</script>

<style scoped>
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-active,
.route-enter-active {
  transition: all 0.3s ease;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
