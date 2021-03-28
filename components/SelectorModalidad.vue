<template>
  <div class="d-flex justify-content-center mt-3">
    <div class="btn-group" role="group">
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
      />
      <label
        @click="clickPresencial"
        class="btn btn-outline-primary"
        for="btnradio2"
        >Presencial</label
      >

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
      />
      <label
        @click="clickTelemedicina"
        class="btn btn-outline-primary bg-blanco d-flex"
        for="btnradio3"
      >
        <!-- Cambiar por img/video-blanco.svg cuando el botón se active -->
        Telemedicina
        <img
          ref="imgTelemedicina"
          src="@/assets/img/video.svg"
          class="icon-agenda"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectorModalidad",
  data() {
    return {
      imgCamara: "~/assets/img/video.svg",
    };
  },
  methods: {
    clickPresencial() {
      this.$refs.imgTelemedicina.src = "/assets/img/video.svg";
    },
    clickTelemedicina() {
      this.$refs.imgTelemedicina.src = "/assets/img/video-blanco.svg";
    },
  },
};
</script>

<style>
</style>
