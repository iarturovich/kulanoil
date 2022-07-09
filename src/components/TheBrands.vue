<template>
  <div class="common-width">
    <div class="mb-3 d-flex justify-content-between text-nowrap">
      <h5 class="fw-bold">
        Бренды
      </h5>
      <a
        href="#"
        class="link-danger link-red">
        Посмотреть все
        <i class="bi bi-chevron-right" />
      </a>
    </div>
    <div class="d-flex align-items-center overflow-hidden">
      <button
        type="button"
        class="btn btn-danger">
        <i class="bi bi-chevron-left" />
      </button>
      <ul class="mx-3 px-3 pb-4 overflow-auto flex-grow-1 d-flex justify-content-between align-items-center gap-3">
        <li
          v-for="(brand, key) in brands"
          :key="key"
          style="cursor: pointer;"
          class="d-flex flex-column rounded pb-3 mx-auto"
          :class="[
            {'shadow': currentBrand === brand},
            brand.class
          ]"
          @click="changeCurrentBrand(brand)">
          <img :src="getImage(brand.img)">
          <span
            :class="{'text-blue': currentBrand === brand}"
            class="fw-bold text-center text-uppercase">
            {{ brand.name }}
          </span>
        </li>
      </ul>
      <button
        type="button"
        class="btn btn-danger">
        <i class="bi bi-chevron-right" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    brands: [
      { name: 'ad battery', img: 'adbattery' },
      { name: 'mobil', img: 'mobil', class: 'px-3' },
      { name: 'mann-filter', img: 'mann filter', class: 'px-3' },
      { name: '555', img: '555' },
      { name: 'denso', img: 'denso', class: 'px-3' },
      { name: 'fram', img: 'fram', class: 'px-3' }
    ],
    currentBrand: null
  }),
  created () {
    this.changeCurrentBrand(this.brands[0])
  },
  methods: {
    changeCurrentBrand (brand) {
      this.currentBrand = brand
    },
    getImage (imgName) {
      return new URL(`/src/assets/img/${imgName}.png`, import.meta.url).href
    }
  }
}
</script>

<style>
.bg-test {
  background: url('src/assets/img/ad battery.png');
  position: relative;
  width: 100px;
  height: 100px;
}
.layer {
  background-color: rgba(17, 15, 28, 0.505);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>