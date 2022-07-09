<template>
  <TheHeader @toogleBackdrop="backdrop = !backdrop" />
  <TheContent />
  <TheBrands />
  <div
    v-if="backdrop"
    class="backdrop" />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheContent from './components/TheContent.vue'
import TheBrands from './components/TheBrands.vue'
export default {
  components: {
    TheHeader,
    TheContent,
    TheBrands
  },
  data: () => ({
    backdrop: false
  })
}
</script>

<style lang="scss">
@import '@/assets/base.scss';
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #000;
  opacity: .5;
  z-index: 1;
}
</style>
