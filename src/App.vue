<!-- <template>
  <div id="app">
    <Navbar />
    <main>
      <Hero />
      <Why />
      <Offer />
      <How />
      <Team />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </div>
</template> -->

<!-- <template>
  <div id="app">
    <Navbar @navigate="currentView = $event" />
    <main v-show="currentView === 'home'">
      <Hero @request-demo="currentView = 'demo'" />
      <Why />
      <Offer />
      <How />
      <Team />
      <FAQ />
      <Contact />
    </main>
    <Demo v-show="currentView === 'demo'" />
    <Footer />
  </div>
</template> -->

<template>
  <div id="app">
    <Navbar @navigate="currentView = $event" />

    <transition name="fade" mode="out-in">
      <component
        :is="currentViewComponent"
        @request-demo="currentView = 'demo'"
      />
    </transition>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Why from "./components/Why.vue";
import Offer from "./components/Offer.vue";
import How from "./components/How.vue";
import Team from "./components/Team.vue";
import FAQ from "./components/FAQ.vue";
import Contact from "./components/Contact.vue";
import Demo from "./components/Demo.vue";
import Footer from "./components/Footer.vue";
import { h } from "vue";

const HomePage = {
  name: "HomePage",
  props: ["requestDemo"],
  emits: ["request-demo"],
  render() {
    return h("main", {}, [
      h(Hero, { onRequestDemo: () => this.$emit("request-demo") }),
      h(Why),
      h(Offer),
      h(How),
      h(Team),
      h(FAQ),
      h(Contact),
    ]);
  },
};

export default {
  name: "App",
  components: {
    Navbar,
    // Hero,
    // Why,
    // Offer,
    // How,
    // Team,
    // FAQ,
    // Contact,
    Footer,
    Demo,
  },
  data() {
    return {
      currentView: "home",
    };
  },
  computed: {
    currentViewComponent() {
      return this.currentView === "home" ? HomePage : "Demo";
    },
  },
  methods: {
    setView(view) {
      this.currentView = view;
    },
  },
};
</script>

<style>
@import "./assets/styles/main.css";

/* html {
  scroll-behavior: smooth;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
