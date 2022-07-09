<template>
  <header
    style="z-index: 3;"
    class="position-relative bg-white">
    <nav class="common-width text-nowrap py-2 d-flex align-items-center overflow-hidden gap-3 flex-wrap">
      <div>
        <i class="bi bi-geo-alt fs-5" />
        <select class="border-0">
          <option value="1">
            Алматы
          </option>
          <option value="2">
            Нур-Султан
          </option>
        </select>
      </div>
      <ul class="ps-0 mb-0 d-flex gap-3 overflow-auto align-items-center">
        <li
          v-for="(link, key) in links"
          :key="key">
          <a
            :class="['link-red', {'text-danger': key + 1 === links.length}]"
            href="#">
            {{ link }}
          </a>
        </li>
      </ul>
      <div class="ms-auto d-flex align-items-center">
        <img
          class="me-1"
          src="@/assets/img/kulanoil.png">
        <span style="font-weight: 600;">
          {{ Intl.NumberFormat().format(balance) }}
        </span>
        <div class="ms-5">
          <img
            class="me-1"
            src="@/assets/img/wallet.png">
          <select class="border-0 text-blue">
            <option value="1">
              Кошелек
            </option>
            <option value="2">
              Покупки
            </option>
          </select>
        </div>
      </div>
    </nav>
    <div class="common-width py-3 d-flex align-items-center gap-3 flex-wrap shadow-sm">
      <img
        src="@/assets/img/brand.png"
        class="me-4">
      <button
        type="button"
        class="me-4 px-4 py-0 btn btn-danger d-flex align-items-center"
        @click="showCategory">
        <i
          class="me-2 fs-5"
          :class="[isOpenCategory ? 'bi-x-lg' : 'bi-list']" />
        Категории
      </button>
      <div class="p-2 d-flex flex-grow-1 border rounded">
        <select class="my-auto border-0">
          <option value="1">
            Название
          </option>
          <option value="2">
            Теги
          </option>
        </select>
        <div class="border-end ms-1 me-2" />
        <input
          id="search"
          class="flex-grow-1 w-100 me-1 p-1 border-0"
          type="text"
          placeholder="Поиск по названию товара">
        <label
          for="search"
          class="my-auto pe-1">
          <i class="bi bi-search fs-5" />
        </label>
      </div>
      <ul class="d-flex gap-3 text-nowrap mb-0 ps-0">
        <li>
          <a
            href="#"
            class="d-flex flex-column align-items-center position-relative link-red">
            <i class="bi bi-box fs-4" />
            <span
              style="right: -7px;"
              class="position-absolute mt-2 translate-middle badge rounded-pill bg-danger">
              2
            </span>
            Заказы
          </a>
        </li>
        <li>
          <a
            href="#"
            class="d-flex flex-column align-items-center link-red">
            <i class="bi bi-heart fs-4" />
            Избранное
          </a>
        </li>
        <li>
          <a
            href="#"
            class="d-flex flex-column align-items-center link-red">
            <i class="bi bi-cart4 fs-4" />
            Корзина
          </a>
        </li>
        <li>
          <a
            href="#"
            class="d-flex flex-column align-items-center link-red">
            <i class="bi bi-person fs-4" />
            ИП Ильяс
          </a>
        </li>
      </ul>
    </div>
  </header>
  <TheCategories v-if="isOpenCategory" />
</template>

<script>
import TheCategories from './TheCategories.vue'
export default {
  components: {
    TheCategories
  },
  emits: ['toogleBackdrop'],
  data: () => ({
    links: ['О нас', 'Бренды', 'Подбор', 'Новости', 'Акции', 'Контакты', 'Помощь', 'Sale%'],
    balance: 38420,
    isOpenCategory: false
  }),
  methods: {
    showCategory () {
      this.$emit('toogleBackdrop')
      this.isOpenCategory = !this.isOpenCategory
    }
  }
}
</script>

<style lang="scss">
nav {
  background: #f6f6f6;
}
</style>