<template>
  <div class="col d-flex flex-row align-items-center">
    <div
      class="col d-flex justify-content-center bg-gris p-1 rounded-3 me-1 mt-2"
    >
      <div class="p-2">
        <img src="@/assets/img/calendario.svg" class="img-mini" alt="" />
      </div>
      <div class="d-flex flex-column">
        <label class="text-start text-sm-center color-texto fw-bold"
          >{{ $moment(reserva.fecha).format("dddd, D") }}</label
        >
        <label class="text-start text-sm-center color-texto fw-bold"
          >de {{ $moment(reserva.fecha).format("MMMM") }}</label
        >
      </div>
    </div>
    <div
      class="col d-flex flex-row justify-content-center bg-gris text-center p-1 rounded-3 ms-1 mt-2"
    >
      <div class="p-2">
        <img src="@/assets/img/reloj.svg" class="img-mini" alt="" />
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
