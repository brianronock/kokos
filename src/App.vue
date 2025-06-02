<template>
  <div>
    <div w-25>
      <img src="./assets/img/kokosnam_logo.png" alt="" srcset="" />
    </div>
    <div navBar boxCont bg-5 co-5>
      <nav>
        <button f-5 f-big><router-link to="/">Home</router-link></button> |
        <button f-5 f-big><router-link to="/about">About</router-link></button> |
        <button f-5 f-big><router-link to="/pricing">Pricing</router-link></button> |
        <button f-5 f-big><router-link to="/contact">Contact</router-link></button>
      </nav>
    </div>

    <router-view></router-view>

    <!-- Footer Section -->
    <footer boxCont center bg-5 co-6 p-5 f-7 f-small>
      <p>&copy; 2025 KOKOS.ai Namibia. All rights reserved.</p>
      <p>Empowering Namibian learners with AI & Coding Education.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
nav a {
  text-decoration: none;
}
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
