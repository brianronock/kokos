<template>
  <div class="homepage-wrapper">
    <main>
      <Hero
        @request-demo="$emit('request-demo')"
        @navigate="$emit('navigate', $event)"
      />
      <Why />
      <Offer @request-demo="$emit('request-demo')" />
      <How />
      <Team />
      <FAQ />
      <Contact />
    </main>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Why from "./Why.vue";
import Offer from "./Offer.vue";
import How from "./How.vue";
import Team from "./Team.vue";
import FAQ from "./FAQ.vue";
import Contact from "./Contact.vue";

export default {
  name: "HomePage",
  components: {
    Hero,
    Why,
    Offer,
    How,
    Team,
    FAQ,
    Contact,
  },
  emits: ["request-demo"],
};
</script>
