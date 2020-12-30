<template>
  <article>
    <div class="work">
      <section
        v-for="(work, i) in works"
        :key="i"
        class="work-item"
        @click="showModal(i)"
      >
        <img :src="work.imgSrc" :alt="work.imgAlt" />
        <div class="work_mask"></div>
        <div class="work-item-label">
          <span class="work-title">{{ work.title }}</span>
          <p>{{ work.subTitle }}</p>
        </div>
      </section>
    </div>
    <section class="work_subtitle">
      ALL OUR WORKS
    </section>
    <transition>
      <div v-if="isModalShow" class="work-modal">
        <div class="work_modal_content">
          <span class="close_modal" @click="hideModal">&#10006;</span>
          <div class="modal_title">{{ modalContent.title }}</div>
          <div class="modal_subtitle">{{ modalContent.subTitle }}</div>
          <div class="modal_body">
            <section class="section_right">
              <img :src="modalContent.imgSrc" :alt="modalContent.alt" />
            </section>
            <section class="section_left">
              <h5>{{ modalContent.textTitle }}</h5>
              <div class="section_left_body">
                <p>
                  {{ modalContent.text }}
                </p>
              </div>
              <button class="btn btn_white " @click="hideModal">Lorem</button>
              <button class="btn btn_danger margin-left" @click="hideModal">
                Cuncat
              </button>
            </section>
          </div>
        </div>
      </div>
    </transition>
  </article>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          imgSrc: "./assets/img/marc-mueller-654355-unsplash.png",
          imgAlt: "marc-mueller-654355-unsplash",
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum dolor, sit amet",
          textTitle: "Businesses often become known",
          text: `Today through effective marketing. The marketing may be in the
                form of a regular news item or half column society news in the
                Sunday newspaper. The marketing may be in the form of a heart to
                heart talk with Mr. Brown on his prominent local television
                show. These are all advertising. Businesses cannot get away from
                the force of advertising. If they want to make their products
                known in the marketplace they have to use some form of
                advertisement. Advertising is being more and more known as a
                reasonable and desirable business force. Let’s say you own a
                department store. The advertising manager of the store is like
                the managing editor of a daily newspaper with his group of
                reporters regularly bringing fresh matter to his desk and the
                different department heads acts as the reporters. Take it on a
                Thursday or Friday, when the big Sunday advertisements are in
                process of construction, the scene is remarkably lively, and the
                man at the head of the advertising department has plenty
                occasions to exercise his ready cleverness and level-headedness.`,
        },
        {
          imgSrc: "./assets/img/marc-mueller-654355-unsplash.png",
          imgAlt: "marc-mueller-654355-unsplash",
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum dolor, sit amet",
          textTitle: "Businesses often become known",
          text: `Today through effective marketing. The marketing may be in the
                form of a regular news item or half column society news in the
                Sunday newspaper. The marketing may be in the form of a heart to
                heart talk with Mr. Brown on his prominent local television
                show. These are all advertising. Businesses cannot get away from
                the force of advertising. If they want to make their products
                known in the marketplace they have to use some form of
                advertisement. Advertising is being more and more known as a
                reasonable and desirable business force. Let’s say you own a
                department store. The advertising manager of the store is like
                the managing editor of a daily newspaper with his group of
                reporters regularly bringing fresh matter to his desk and the
                different department heads acts as the reporters. Take it on a
                Thursday or Friday, when the big Sunday advertisements are in
                process of construction, the scene is remarkably lively, and the
                man at the head of the advertising department has plenty
                occasions to exercise his ready cleverness and level-headedness.`,
        },
        {
          imgSrc: "./assets/img/marc-mueller-654355-unsplash.png",
          imgAlt: "marc-mueller-654355-unsplash",
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum dolor, sit amet",
          textTitle: "Businesses often become known",
          text: `Today through effective marketing. The marketing may be in the
                form of a regular news item or half column society news in the
                Sunday newspaper. The marketing may be in the form of a heart to
                heart talk with Mr. Brown on his prominent local television
                show. These are all advertising. Businesses cannot get away from
                the force of advertising. If they want to make their products
                known in the marketplace they have to use some form of
                advertisement. Advertising is being more and more known as a
                reasonable and desirable business force. Let’s say you own a
                department store. The advertising manager of the store is like
                the managing editor of a daily newspaper with his group of
                reporters regularly bringing fresh matter to his desk and the
                different department heads acts as the reporters. Take it on a
                Thursday or Friday, when the big Sunday advertisements are in
                process of construction, the scene is remarkably lively, and the
                man at the head of the advertising department has plenty
                occasions to exercise his ready cleverness and level-headedness.`,
        },
        {
          imgSrc: "./assets/img/marc-mueller-654355-unsplash.png",
          imgAlt: "marc-mueller-654355-unsplash",
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum dolor, sit amet",
          textTitle: "Businesses often become known",
          text: `Today through effective marketing. The marketing may be in the
                form of a regular news item or half column society news in the
                Sunday newspaper. The marketing may be in the form of a heart to
                heart talk with Mr. Brown on his prominent local television
                show. These are all advertising. Businesses cannot get away from
                the force of advertising. If they want to make their products
                known in the marketplace they have to use some form of
                advertisement. Advertising is being more and more known as a
                reasonable and desirable business force. Let’s say you own a
                department store. The advertising manager of the store is like
                the managing editor of a daily newspaper with his group of
                reporters regularly bringing fresh matter to his desk and the
                different department heads acts as the reporters. Take it on a
                Thursday or Friday, when the big Sunday advertisements are in
                process of construction, the scene is remarkably lively, and the
                man at the head of the advertising department has plenty
                occasions to exercise his ready cleverness and level-headedness.`,
        },
        {
          imgSrc: "./assets/img/marc-mueller-654355-unsplash.png",
          imgAlt: "marc-mueller-654355-unsplash",
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum dolor, sit amet",
          textTitle: "Businesses often become known",
          text: `Today through effective marketing. The marketing may be in the
                form of a regular news item or half column society news in the
                Sunday newspaper. The marketing may be in the form of a heart to
                heart talk with Mr. Brown on his prominent local television
                show. These are all advertising. Businesses cannot get away from
                the force of advertising. If they want to make their products
                known in the marketplace they have to use some form of
                advertisement. Advertising is being more and more known as a
                reasonable and desirable business force. Let’s say you own a
                department store. The advertising manager of the store is like
                the managing editor of a daily newspaper with his group of
                reporters regularly bringing fresh matter to his desk and the
                different department heads acts as the reporters. Take it on a
                Thursday or Friday, when the big Sunday advertisements are in
                process of construction, the scene is remarkably lively, and the
                man at the head of the advertising department has plenty
                occasions to exercise his ready cleverness and level-headedness.`,
        },
        {
          imgSrc: "./assets/img/marc-mueller-654355-unsplash.png",
          imgAlt: "marc-mueller-654355-unsplash",
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum dolor, sit amet",
          textTitle: "Businesses often become known",
          text: `Today through effective marketing. The marketing may be in the
                form of a regular news item or half column society news in the
                Sunday newspaper. The marketing may be in the form of a heart to
                heart talk with Mr. Brown on his prominent local television
                show. These are all advertising. Businesses cannot get away from
                the force of advertising. If they want to make their products
                known in the marketplace they have to use some form of
                advertisement. Advertising is being more and more known as a
                reasonable and desirable business force. Let’s say you own a
                department store. The advertising manager of the store is like
                the managing editor of a daily newspaper with his group of
                reporters regularly bringing fresh matter to his desk and the
                different department heads acts as the reporters. Take it on a
                Thursday or Friday, when the big Sunday advertisements are in
                process of construction, the scene is remarkably lively, and the
                man at the head of the advertising department has plenty
                occasions to exercise his ready cleverness and level-headedness.`,
        },
        {
          imgSrc: "./assets/img/marc-mueller-654355-unsplash.png",
          imgAlt: "marc-mueller-654355-unsplash",
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum dolor, sit amet",
          textTitle: "Businesses often become known",
          text: `Today through effective marketing. The marketing may be in the
                form of a regular news item or half column society news in the
                Sunday newspaper. The marketing may be in the form of a heart to
                heart talk with Mr. Brown on his prominent local television
                show. These are all advertising. Businesses cannot get away from
                the force of advertising. If they want to make their products
                known in the marketplace they have to use some form of
                advertisement. Advertising is being more and more known as a
                reasonable and desirable business force. Let’s say you own a
                department store. The advertising manager of the store is like
                the managing editor of a daily newspaper with his group of
                reporters regularly bringing fresh matter to his desk and the
                different department heads acts as the reporters. Take it on a
                Thursday or Friday, when the big Sunday advertisements are in
                process of construction, the scene is remarkably lively, and the
                man at the head of the advertising department has plenty
                occasions to exercise his ready cleverness and level-headedness.`,
        },
        {
          imgSrc: "./assets/img/igor-ovsyannykov-329196-unsplash.png",
          imgAlt: "igor-ovsyannykov-329196-unsplash",
          title: "Lorem ipsum",
          subTitle: "Lorem ipsum dolor, sit amet",
          textTitle: "Businesses often become known",
          text: `Today through effective marketing. The marketing may be in the
                form of a regular news item or half column society news in the
                Sunday newspaper. The marketing may be in the form of a heart to
                heart talk with Mr. Brown on his prominent local television
                show. These are all advertising. Businesses cannot get away from
                the force of advertising. If they want to make their products
                known in the marketplace they have to use some form of
                advertisement. Advertising is being more and more known as a
                reasonable and desirable business force.  and the
                man at the head of the advertising department has plenty
                occasions to exercise his ready cleverness and level-headedness.`,
        },
      ],
      isModalShow: false,
      modalContent: null,
    };
  },
  methods: {
    hideModal() {
      this.isModalShow = false;
    },
    showModal(index) {
      this.isModalShow = true;
      this.modalContent = this.works[index];
    },
  },
};
</script>

<style src="./work.scss" lang="scss"></style>
