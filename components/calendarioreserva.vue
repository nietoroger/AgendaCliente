<template>
  <div class="col d-flex flex-row align-items-center">
    <div
      class="col d-flex flex-column align-items-center bg-gris p-1 rounded-3 me-1 mt-2"
    >
      <div class="p-2">
        <img src="@/assets/img/calendario.svg" class="icon-mini" alt="" />
      </div>
      <div class="d-flex align-items-center">
        <label class="color-texto fw-bold">{{
          $moment(reserva.fecha).format("dddd, D MMM")
        }}</label>
      </div>
    </div>
    <div
      class="col d-flex flex-column align-items-center bg-gris p-1 rounded-3 ms-1 mt-2"
    >
      <div class="p-2">
        <img src="@/assets/img/reloj.svg" class="icon-mini" alt="" />
      </div>
      <div class="d-flex align-items-center">
        <label class="color-texto fw-bold">{{ reserva.hora }} hrs</label>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "calendarioreserva",
  computed: {
    ...mapState({
      reserva: (state) => state.reserva,
    }),
  },
};
</script>
<style scoped>
label {
  margin-bottom: 0em;
}
</style>
