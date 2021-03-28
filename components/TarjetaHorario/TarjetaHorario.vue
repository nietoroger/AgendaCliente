<template>
  <div class="row card-medico col-12 col-sm-10 col-md-9 col-lg-8 col-xl-6 my-2">
    <div class="col-sm-5 d-flex justify-content-center align-self-center px-3">
      <div class="avatar-custom">
        <img src="@/assets/img/avatar.png" />
      </div>
      <div class="d-flex flex-column px-3">
        <label class="color-texto fw-bold">Nombre médico</label>
        <label class="color-texto">Especialidad médica</label>
        <span class="color-rojo">No atiende mayores de 45 años.</span>
      </div>
    </div>
    <SelectorFechas />
  </div>
</template>
<script>
import SelectorFechas from "@/components/TarjetaHorario/SelectorFechas";
export default {
  components: { SelectorFechas },
};
</script>
