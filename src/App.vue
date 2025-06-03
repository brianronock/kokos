<template>
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
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Why from './components/Why.vue'
import Offer from './components/Offer.vue'
import How from './components/How.vue'
import Team from './components/Team.vue'
import FAQ from './components/FAQ.vue'
import Contact from './components/Contact.vue'

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Why,
    Offer,
    How,
    Team,
    FAQ,
    Contact,
    Footer
  }
}
</script>

<style>
@import './assets/styles/main.css';
</style>