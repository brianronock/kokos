<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-container">
        <a href="" class="logo" @click="$emit('navigate', 'home')">
          <img src="/images/logo2.png" alt="KOKOS Logo" class="logo-img" />
          <div class="logo-text">Namibia</div>
          <!-- <div class="location"></div> -->
        </a>

        <nav class="desktop-nav">
          <a href="#home" class="nav-link" @click="$emit('navigate', 'home')"
            >Home</a
          >
          <a href="#why" class="nav-link" @click="$emit('navigate', 'home')"
            >Why AI Education?</a
          >
          <a href="#offer" class="nav-link" @click="$emit('navigate', 'home')"
            >What We Offer</a
          >
          <a href="#how" class="nav-link" @click="$emit('navigate', 'home')"
            >How It Works</a
          >
          <a href="#team" class="nav-link" @click="$emit('navigate', 'home')"
            >Team</a
          >
          <a href="#contact" class="nav-link" @click="$emit('navigate', 'home')"
            >Contact</a
          >
          <a href="#faq" class="nav-link" @click="$emit('navigate', 'home')"
            >FAQ</a
          >
        </nav>

        <div ref="mobileMenu" class="mobile-nav">
          <details class="mobile-menu">
            <summary class="menu-toggle">
              <span class="material-symbols-outlined">menu</span>
            </summary>
            <div class="mobile-menu-items">
              <a
                href="#home"
                class="mobile-nav-link"
                @click="
                  $emit('navigate', 'home');
                  closeMobileMenu();
                "
                >Home</a
              >
              <a
                href="#why"
                class="mobile-nav-link"
                @click="
                  $emit('navigate', 'home');
                  closeMobileMenu();
                "
                >Why AI Education?</a
              >
              <a
                href="#offer"
                class="mobile-nav-link"
                @click="
                  $emit('navigate', 'home');
                  closeMobileMenu();
                "
                >What We Offer</a
              >
              <a
                href="#how"
                class="mobile-nav-link"
                @click="
                  $emit('navigate', 'home');
                  closeMobileMenu();
                "
                >How It Works</a
              >
              <a
                href="#team"
                class="mobile-nav-link"
                @click="
                  $emit('navigate', 'home');
                  closeMobileMenu();
                "
                >Team</a
              >
              <a
                href="#contact"
                class="mobile-nav-link"
                @click="
                  $emit('navigate', 'home');
                  closeMobileMenu();
                "
                >Contact</a
              >
              <a
                href="#faq"
                class="mobile-nav-link"
                @click="
                  $emit('navigate', 'home');
                  closeMobileMenu();
                "
                >FAQ</a
              >
            </div>
          </details>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    closeMobileMenu() {
      const details = this.$el.querySelector(".mobile-menu");
      if (details) details.removeAttribute("open");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--black);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}

.logo:hover .logo-img {
  transform: scale(1.05);
}

.logo-img {
  height: 8.5rem;
  width: auto;
  margin-right: -0.5rem;
  transition: transform 0.3s ease;
}

.logo-text {
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: -1rem;
}

.location {
  color: var(--white);
  font-size: 0.875rem;
  margin-left: 0.5rem;
}

.desktop-nav {
  display: none;
}

.nav-link {
  color: var(--white);
  padding: 0.5rem 0.75rem;
  margin: 0 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--primary);
}

.mobile-nav {
  display: block;
}

.menu-toggle {
  color: var(--white);
  cursor: pointer;
}

.mobile-menu-items {
  position: absolute;
  right: 1rem;
  top: 4rem;
  width: 12rem;
  background-color: var(--black);
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 50;
  display: none;
}

.mobile-menu[open] .mobile-menu-items {
  display: block;
}

.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--white);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  color: var(--primary);
  background-color: rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }

  .mobile-nav {
    display: none;
  }
}
</style>
