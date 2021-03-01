<template>
  <b-modal
    id="modalAnular"
    header-class="fw-bold"
    title="¿Está seguro que desea anular esta reserva?"
    @ok="anular"
  >
    <template v-slot:modal-title>
      <h5 class="modal-title fw-bold color-texto">
        ¿Está seguro que desea anular esta reserva?
      </h5>
    </template>
    <template v-slot:default>
      <calendarioreserva />
    </template>
    <template #modal-footer="{ close, ok }">
      <b-button class="col btn fw-bold btn-secondary" @click="close"
        >No</b-button
      >
      <b-button class="col btn boton-azul fw-bold texto-blanco" @click="ok">
        Anular reserva
      </b-button>
    </template>
  </b-modal>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      reserva: (state) => state.reserva,
    }),
  },
  methods: {
    async anular() {
      await this.$api.anularReserva(this.reserva.id);
      this.$router.push("/");
    },
  },
};
</script>
