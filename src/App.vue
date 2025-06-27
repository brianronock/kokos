<template>
  <div id="app">
    <Navbar :current-view="currentView" @navigate="currentView = $event" />
    <component
      :is="currentViewComponent"
      :key="currentView"
      @request-demo="goToDemo"
    />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Demo from "./components/Demo.vue";
import Footer from "./components/Footer.vue";
import Homepage from "./components/Homepage.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Demo,
    Homepage,
  },
  data() {
    return {
      currentView: "home",
    };
  },
  computed: {
    currentViewComponent() {
      return this.currentView === "home" ? Homepage : Demo;
    },
  },
  methods: {
    async goToDemo() {
      this.currentView = null; // ensures clean swap
      await this.$nextTick();
      this.currentView = "demo";
      await this.$nextTick();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
  },
};
</script>

<style>
@import "./assets/styles/main.css";

#app {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>