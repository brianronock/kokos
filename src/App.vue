<template>
  <div id="app">
    <Navbar :current-view="currentView" @navigate="currentView = $event" />
    <component
      :is="currentViewComponent"
      :key="currentView"
      @request-demo="goToDemo"
      @navigate="currentView = $event"
      @go-home="goToHome"
      @go-team="goToTeam"
    />
    <Footer @navigate="currentView = $event" @request-demo="goToDemo" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Demo from "./components/Demo.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";
import Homepage from "./components/Homepage.vue";
import DemoVideo from "./components/DemoVideo.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Demo,
    About,
    Homepage,
    DemoVideo,
  },
  data() {
    return {
      currentView: "home",
    };
  },
  computed: {
    currentViewComponent() {
      switch (this.currentView) {
        case "home":
          return Homepage;
        case "demo":
          return Demo;
        case "about":
          return About;
        case "demo-video":
          // check localStorage before allowing access
          return localStorage.getItem("demoAccess") === "granted"
            ? DemoVideo
            : Demo;
        default:
          return Homepage; // fallback
      }
    },
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("access") === "preview157") {
      localStorage.setItem("demoAccess", "granted");
      this.currentView = "demo-video";
    }
  },
  methods: {
    async goToDemo() {
      this.currentView = null;
      await this.$nextTick();
      this.currentView = "demo";
      await this.$nextTick();
      window.scrollTo({ top: 0, behavior: "auto" });
    },
    async goToHome() {
      if (this.currentView === "home") {
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        this.currentView = null;
        await this.$nextTick();
        this.currentView = "home";
        await this.$nextTick();
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    },
    async goToTeam() {
      if (this.currentView === "home") {
        // Already on homepage, just scroll
        const teamSection = document.getElementById("team");
        if (teamSection) {
          teamSection.scrollIntoView({ behavior: "auto" });
        }
      } else {
        this.currentView = null;
        await this.$nextTick();
        this.currentView = "home";
        await this.$nextTick();

        // Scroll after homepage is loaded
        setTimeout(() => {
          const teamSection = document.getElementById("team");
          if (teamSection) {
            teamSection.scrollIntoView({ behavior: "auto" });
          } else {
            window.scrollTo({ top: 0, behavior: "auto" });
          }
        }, 1);
      }
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
