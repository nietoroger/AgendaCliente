export default ({ $axios, redirect }) => {
  const auth = {
    username: "MKUSERNAME",
    password: "Freedom798",
  };
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
    config.auth = auth;
    //this.$store.dispatch("changeLoadingState", true);
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    // console.log('Error on axios', error);
    //this.$store.dispatch("changeLoadingState", false);
    if (code === 400) {
      redirect('/400')
    }
  })
}
