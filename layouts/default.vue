<template>
  <b-overlay :show="isLoading" rounded="sm">
    <div>
      <Nuxt />
    </div>
  </b-overlay>
</template>

<script>
export default {
  data() {
    return {
      refCount: 0,
      isLoading: false,
    };
  },
  methods: {
    setLoading(isLoading) {
      if (isLoading) {
        this.refCount++;
        this.isLoading = true;
      } else if (this.refCount > 0) {
        this.refCount--;
        this.isLoading = this.refCount > 0;
      }
    },
  },
  created() {
    this.$axios.interceptors.request.use(
      (config) => {
        this.setLoading(true);
        return config;
      },
      (error) => {
        this.setLoading(false);
        console.log("Error");
        return Promise.reject(error);
      }
    );

    this.$axios.interceptors.response.use(
      (response) => {
        this.setLoading(false);
        return response;
      },
      (error) => {
        this.setLoading(false);
        return Promise.reject(error);
      }
    );
  },
};
</script>

<style>
</style>
