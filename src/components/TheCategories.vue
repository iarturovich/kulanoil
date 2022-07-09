<template>
  <div
    class="flex-wrap common-width bg-white overflow-hidden1 bg-white py-3 position-absolute border-bottom d-flex gap-3"
    style="left: 0; right: 0; z-index: 2;">
    <div class="vstack">
      <TheCard
        v-for="(category, key) in arr1"
        :key="key"
        :category="category" />
    </div>
    <div class="vstack">
      <TheCard
        v-for="(category, key) in arr2"
        :key="key"
        :category="category" />
    </div>
    <div class="vstack">
      <TheCard
        v-for="(category, key) in arr3"
        :key="key"
        :category="category" />
    </div>
    <div class="vstack">
      <TheCard
        v-for="(category, key) in arr4"
        :key="key"
        :category="category" />
    </div>
    <div class="ms-4 d-flex flex-column gap-3">
      <img src="@/assets/img/banner 1.png">
      <img src="@/assets/img/banner 2.png">
      <img src="@/assets/img/banner 3.png">
    </div>
  </div>
</template>

<script>
import TheCard from './TheCard.vue'
export default {
  components: {
    TheCard
  },
  data: () => ({
    arr1: [
      {
        title: 'Масла для легкового транспорта',
        list: ['Моторные', 'Трансмиссионные и ГУР']
      },
      {
        title: 'Масла для коммерческого транспорта',
        list: ['Моторные для дизельных двигателей', 'Трансмиссионные и ГУР']
      },
      {
        title: 'Индустриальные масла',
        list: ['Гидравлические ицилиндровые', 'Для газовых двигателей', 'Для холодильных компрессоров', 'Компрессорные', 'Консистентные смазки', 'Редукторные', 'Турбинные и циркуляционные']
      }
    ],
    arr2: [
      {
        title: 'Детали для ТО',
        list: ['Тормозная система', 'Свечи', 'Фильтры']
      },
      {
        title: 'Детали подвески',
        list: ['Рычаги', 'Амортизаторы', 'Стойки стабилизатора', 'Втулки стабилизатора', 'Сайлентблоки']
      },
      {
        title: 'Тормозная система',
        list: ['Тормозные диски', 'Свечи', 'Фильтры']
      }
    ],
    arr3: [
      {
        title: 'Детали для ТО',
        list: ['Тормозная система', 'Колодки', 'Тормозная жидкость']
      },
      {
        title: 'Система впуска',
        list: ['Свечи', 'Свечные провода', 'Катушки', 'Бензонасос']
      },
      {
        title: 'Ремни',
        list: ['Поликлиновые', 'Комплекты ГРМ']
      },
      {
        title: 'Датчики'
      },
      {
        title: 'Предохранители',
        list: ['Комплект', 'Картриджный', 'Плоский', 'Торпедо']
      }
    ],
    arr4: [
      {
        title: 'Автолампы'
      },
      {
        title: 'Автоаксессуары'
      },
      {
        title: 'Аккумуляторы'
      },
      {
        title: 'Щетки'
      },
      {
        title: 'Жидкости и автохимия',
        list: ['Автокосметика', 'Ароматизаторы', 'Жидкость для систем SCR', 'Охлаждающие жидкости', 'Стеклоомывающие жидкости', 'Тормозные жидкости']
      },
      {
        title: 'Фильтры',
        list: ['Воздушный фильтр', 'Салонный фильтр', 'Масляный фильтр', 'Фильтр КПП', 'Топливный фильтр']
      }
    ]
  })
}
</script>

<style scoped>
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