<template>
  <div id="app">
    <div>
      <Header></Header>
      <About id="about"></About>
      <Service id="service"></Service>
      <Work id="works"></Work>
      <Footer id="contact"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/header/Header";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";

export default {
  name: "App",
  components: { Header, About, Service, Work, Footer },
};
</script>

<style lang="scss">
@import url("./assets/css/app.scss");
@import url("./assets/css/font.scss");
div {
  font-family: Roboto;
}
</style>
