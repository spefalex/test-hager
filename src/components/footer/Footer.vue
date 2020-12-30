<template>
  <footer class="footer">
    <div class="footer_top">
      <h4>
        Say hello
      </h4>
    </div>
    <article class="footer_center">
      <section class="footer_left">
        <div class="footer_tab ">
          <div class="tab">
            <a
              href="#"
              :class="{ active: tabActive == 'paris' }"
              @click.prevent="changeTabTo('paris')"
              >PARIS</a
            >
          </div>
          <div class="tab">
            <a
              href="#"
              :class="{ active: tabActive == 'london' }"
              @click.prevent="changeTabTo('london')"
              >LONDON</a
            >
          </div>
        </div>
        <div class="footer_tab_content">
          <p v-for="(content, i) in tabContent.contents" :key="i">
            {{ content }}
          </p>
        </div>
        <div class="footer_social_media">
          <div>FOLLOW US</div>
          <a href="http://twitter.com" target="_blank">
            <span class="icon icon_twitter"></span>
          </a>
          <a href="http://facebook.com" target="_blank">
            <span class="icon icon_facebook"></span>
          </a>
          <a href="http://linkdin.com" target="_blank">
            <span class="icon icon_linkedin"></span>
          </a>
        </div>
      </section>
      <section class="footer_right">
        <form action="">
          <div class="form_group">
            <label for="name">Name *</label>
            <input class="footer_input" type="text" name="name" />
          </div>
          <div class="form_group">
            <label for="email" class="float_label">Email *</label>
            <input type="email" name="email" />
          </div>
          <div class="form_group">
            <label for="message" class="float_label">Message *</label>
            <textarea class="footer_textarea" rows="4"></textarea>
          </div>
          <div class="content_center">
            <button class="btn btn_dark">Send</button>
          </div>
        </form>
      </section>
    </article>
    <article class="footer_bottom">
      <div class="footer_Copyright">Copyright © Tous droits réservés 2018</div>
      <div class="footer_bottom_link">
        <a href="#" class="margin_left">Conditions générales de vente</a>
        <a href="#" class="margin_left">Politique de confidentialité </a>
        <a href="#" class="margin_left"> Mentions légales</a>
      </div>
    </article>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: "paris",
          contents: {
            location: "1 rue de Paris - 75009 Paris",
            number: "+33 9 34 67 89 45",
          },
        },
        {
          name: "london",
          contents: {
            location: "16 rue de london - 7509 london",
            number: "+261 9 34 67 89 45",
          },
        },
      ],
      tabContent: {
        name: "paris",
        contents: {
          location: "1 rue de Paris - 75009 Paris",
          number: "+33 9 34 67 89 45",
        },
      },
    };
  },
  methods: {
    changeTabTo(tabName) {
      this.tabs.forEach((tab) => {
        if (tabName === tab.name) {
          this.tabContent = tab;
        }
      });
    },
  },
  computed: {
    tabActive() {
      return this.tabContent.name;
    },
  },
};
</script>

<style src="./footer.scss" lang="scss"></style>
