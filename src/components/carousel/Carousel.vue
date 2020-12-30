<template>
  <div class="carousel">
    <slot></slot>
    <button class="carousel__nav prev" @click.prevent="prev"></button>
    <button class="carousel__nav next" @click.prevent="next"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      slides: [],
      direction: "right",
      slideInterval: null,
    };
  },
  mounted() {
    this.slides = this.$children;
    this.slideInterval = setInterval(this.autoSlide, 3000);
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      clearInterval(this.slideInterval);
      this.index++;
      this.direction = "right";
      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
      this.slideInterval = setInterval(this.autoSlide, 3000);
    },
    prev() {
      clearInterval(this.slideInterval);
      this.index--;
      this.direction = "left";
      if (this.index < 0) {
        this.index = this.slidesCount - 1;
      }
      this.slideInterval = setInterval(this.autoSlide, 3000);
    },
    autoSlide() {
      this.direction = "right";
      this.index++;
      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
  },
};
</script>

<style src="./carousel.scss" lang="scss"></style>
