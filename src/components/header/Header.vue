<template>
  <header>
    <div class="topbar">
      <a href="#" class="topbar_logo">
        <img src="./../../assets/svg/logo.svg" alt="Logo" />
      </a>
      <nav class="topbar_nav">
        <a href="#about" class="active" @click.prevent="scrollTo('about')"
          >about</a
        >
        <a href="#service" @click.prevent="scrollTo('service')">service</a>
        <a href="#works" @click.prevent="scrollTo('works')">works</a>
        <a href="#blog" @click.prevent="scrollTo('blog')">blog</a>
        <a href="#contact" @click.prevent="scrollTo('contact')">contact</a>
      </nav>
      <span class="topbar-social">
        <a href="http://twitter.com" target="_blank">
          <span class="icon icon_twitter"></span>
        </a>
        <a href="http://facebook.com" target="_blank">
          <span class="icon icon_facebook"></span>
        </a>
        <a href="http://linkdin.com" target="_blank">
          <span class="icon icon_linkedin"></span>
        </a>
      </span>
    </div>
    <Carousel>
      <CarouselSlide v-for="(slide, i) in slides" :key="i" :index="i">
        <div class="carousel_text">
          <h1>
            We transform every <br />
            dream into digital <br />
            reality
          </h1>
          <button class="btn_danger">
            Discover
          </button>
        </div>
        <img :src="slide.img" width="100%" :alt="slide.alt" />
      </CarouselSlide>
    </Carousel>
  </header>
</template>

<script>
import Carousel from "./../carousel/Carousel";
import CarouselSlide from "./../carouselSlide/CarouselSlide";
export default {
  name: "Header",
  components: {
    Carousel,
    CarouselSlide,
  },
  data() {
    return {
      slides: [
        {
          text: "We transform every /n dream into digital /n reality",
          img: "./../assets/img/marvin-meyer-571072-unsplash.png",
          alt: "marvin-meyer-571072-unsplash",
        },
        {
          text: "We transform every dream into digital reality",
          img: "./../assets/img/marvin-meyer-571072-unsplash copy1.png",
          alt: "marvin-meyer-571072-unsplash copy1",
        },
        {
          text: "We transform every dream into digital reality",
          img: "./../assets/img/marvin-meyer-571072-unsplash copy2.png",
          alt: "marvin-meyer-571072-unsplash copy2",
        },
      ],
    };
  },
  methods: {
    scrollTo(elementId) {
      let el = document.querySelector(`#${elementId}`);
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>

<style src="./header.scss" lang="scss"></style>
