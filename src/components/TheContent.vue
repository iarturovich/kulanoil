<template>
  <main class="common-width my-4 d-flex gap-3">
    <div class="position-relative">
      <h4 class="mt-5 ms-5 position-absolute text-white fw-bold">
        Открытие 40-го Mobil 1
        <br>
        Center в г. Алматы
      </h4>
      <button
        style="top: 50%; left: 1rem; transform: translateY(-50%);"
        type="button"
        class="btn btn-danger position-absolute">
        <i class="bi bi-chevron-left" />
      </button>
      <img
        src="@/assets/img/office.png"
        class="img-fluid h-100 w-100"
        alt="Office">
      <button
        style="top: 50%; right: 1rem; transform: translateY(-50%);"
        type="button"
        class="btn btn-danger position-absolute">
        <i class="bi bi-chevron-right" />
      </button>
    </div>
    <div class="test flex-grow-1 d-flex flex-column gap-3">
      <div
        style="background-color: #F6F6F6; border-radius: 5px;"
        class="flex-grow-1 d-flex overflow-hidden">
        <div class="d-flex flex-column align-items-baseline p-3">
          <h5 class="fw-bold text-blue">
            Подбор по модели
          </h5>
          <p>Подбор запчастей по модели автомобиля</p>
          <button
            type="button"
            class="btn btn-danger mt-auto px-4">
            Попробовать
          </button>
        </div>
        <img
          class="mt-auto img-fluid ms-auto pb-3"
          src="@/assets/img/car.png"
          alt="Car">
      </div>
      <div
        style="background: #F6F6F6; border-radius: 5px;"
        class="flex-grow-1 d-flex overflow-hidden">
        <div class="d-flex flex-column align-items-baseline p-3">
          <h5 class="fw-bold text-blue">
            Подбор масла
          </h5>
          <p>Подбор масел по VIN-коду и модели автомобиля</p>
          <button
            type="button"
            class="btn btn-danger mt-auto px-4">
            Попробовать
          </button>
        </div>
        <img
          class="mt-auto img-fluid ms-auto pb-3"
          src="@/assets/img/oil.png"
          alt="Oil">
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  @media (max-width: 1140px) {
    flex-wrap: wrap;
    & div:first-child {
      width: 100%;
    }
    .test {
      flex-direction: row !important;
      & > div {
        flex-basis: 0;
      }
    }
  }
  @media (max-width: 800px) {
    .test {
      flex-direction: column !important;
      & > div {
        flex-basis: auto;
      }
    }
  }
}
</style>