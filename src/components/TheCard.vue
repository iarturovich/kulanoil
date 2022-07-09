<template>
  <div>
    <span
      v-if="category.list"
      class="fw-bold">
      {{ category.title }}
    </span>
    <a
      v-else
      class="link-red fw-bold"
      href="#">
      {{ category.title }}
    </a>
    <ul class="ps-0 d-flex flex-column">
      <li
        v-for="(item, key) in category.list || []"
        :key="key">
        <a
          href="#"
          class="link-red">
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>