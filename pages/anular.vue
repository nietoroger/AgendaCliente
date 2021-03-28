<template>
  <div>
    <div v-if="!anulada">
      <button class="btn-volver" @click="$router.push('/')">
        <img src="@/assets/img/flecha-atras.svg" alt="volver" />
        <span>Volver</span>
      </button>
      <div class="d-flex justify-content-center pb-4">
        <div class="card-1">
          <h3 class="text-center text-sm-start color-azul fw-bold">Anular una reserva</h3>
          <!-- <div v-if="!showDetails"> -->
          <div>
            <div class="mb-2 mt-3">
              <!-- <h5 class="text-center text-sm-start color-azul">Queda un último paso...</h5> -->
              <h5 class="text-center text-sm-start color-azul">Ingresa los datos de la reserva</h5>
            </div>
            <div class="d-flex flex-column">
              <!-- Rut o pasaporte -->
              <input-identificacion
                ref="idPaciente"
                :readonly="showDetails"
                v-model.lazy="$v.form.idPaciente.$model"
              ></input-identificacion>

              <!-- Código reservaectrónico -->
              <div class="form-floating mb-4">
                <b-form-input
                  type="text"
                  :readonly="showDetails"
                  class="form-control"
                  id="reserva"
                  :class="{ 'is-invalid': $v.form.reserva.$error }"
                  v-model.trim.lazy="$v.form.reserva.$model"
                ></b-form-input>
                <label for="reserva">Código de reserva</label>
                <div v-if="!$v.form.reserva.required" class="invalid-feedback">Valor obligatorio</div>
                <div
                  v-if="!$v.form.reserva.minLength"
                  class="invalid-feedback"
                >Debe contener 5 caracteres</div>
              </div>
              <div>
                <b-alert
                  class="mb-4"
                  variant="success"
                  :show="showAlert"
                >La reserva ingresada no existe</b-alert>
              </div>
              <!-- Botón Aceptar / botón debería desplegar  -->
              <b-button class="btn boton-azul" v-if="!showDetails" @click="MostrarDetalles">Aceptar</b-button>

              <LazyDetallesReserva
                ref="detareserva"
                v-if="showDetails"
                :reserva="reserva"
                @AbrirModal="abrirModal"
              />
              <b-button
                type="reset"
                v-if="showDetails"
                class="col-12 btn btn-secondary mt-4"
                @click="clear"
              >Limpiar</b-button>

              <LazyModalAnular @ok="anularReserva" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <LazyReservaAnulada v-if="anulada" />
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import InputIdentificacion from "@/components/InputIdentificacion.vue";
import DetallesReserva from "../components/DetallesReserva.vue";
import Calendarioreserva from "../components/calendarioreserva.vue";
export default {
  name: "anular",
  components: {
    InputIdentificacion,
    DetallesReserva,
    Calendarioreserva,
  },
  data() {
    return {
      errorIdentififacion: false,
      showDetails: false,
      showAlert: false,
      reserva: null,
      anulada: false,
      form: {
        reserva: "2HBR6Y",
        idPaciente: {
          tipo: "R",
          identificacion: "21606447K",
        },
      },
    };
  },
  validations: {
    form: {
      reserva: {
        required,
        minLength: minLength(5),
      },
      idPaciente: {
        required,
      },
    },
  },
  methods: {
    async MostrarDetalles() {
      this.$refs.idPaciente.validate();
      this.$v.$touch();
      if (!this.$v.$invalid) {
        var res = await this.$api.getReservaConcreta(
          this.form.reserva,
          this.form.idPaciente.tipo,
          this.form.idPaciente.identificacion
        );
        if (res.value.length > 0) {
          this.showAlert = false;
          this.showDetails = true;
          this.reserva = res.value[0];
          this.$store.dispatch("setReserva", res.value[0]);
          //this.$refs.detareserva.load();
        } else {
          this.showAlert = true;
          this.showDetails = false;
          this.reserva = null;
        }
      }
    },
    abrirModal() {
      // console.log("Abriendo modal");
      this.$bvModal.show("modalAnular");
    },
    async anularReserva() {
      // console.log("anular reserva");
      await this.$api.anularReserva(this.reserva.id);
      this.anulada = true;
    },
    clear() {
      this.showDetails = false;
      this.form.reserva = "";
      this.form.idPaciente.tipo = "R";
      this.form.idPaciente.identificacion = "";
      this.$v.$reset();
      this.$refs.idPaciente.reset();
    },
  },
};
</script>

<style>
</style>
