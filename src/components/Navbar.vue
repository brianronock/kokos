<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-container">
        <a href="#" class="logo" @click.prevent="$emit('navigate', 'home')">
          <img src="/images/logo2.png" alt="KOKOS Logo" class="logo-img" />
          <div class="logo-text">Namibia</div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="nav-link"
            @click="$emit('navigate', 'home')"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- MOBILE MENU -->
        <div ref="mobileMenu" class="mobile-nav">
          <button class="menu-toggle" @click="toggleMenu">
            <span class="material-symbols-outlined">
              {{ menuOpen ? "close" : "menu" }}
            </span>
          </button>

          <div
            v-if="menuOpen"
            class="mobile-menu-overlay"
            @click.self="closeMobileMenu"
          >
            <div class="mobile-menu-items slide-down">
              <a
                v-for="link in links"
                :key="link.href"
                :href="link.href"
                class="mobile-nav-link"
                @click="
                  $emit('navigate', 'home');
                  closeMobileMenu();
                "
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
      links: [
        { href: "#home", label: "Home" },
        { href: "#why", label: "Why AI Education?" },
        { href: "#offer", label: "What We Offer" },
        { href: "#how", label: "How It Works" },
        { href: "#team", label: "Team" },
        { href: "#contact", label: "Contact" },
        { href: "#faq", label: "FAQ" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMobileMenu() {
      this.menuOpen = false;
    },
  },
  watch: {
    menuOpen(newVal) {
      document.body.style.overflow = newVal ? "hidden" : "";
    },
  },
  beforeUnmount() {
    document.body.style.overflow = ""; // safety reset
  },
};
</script>

<style scoped>
/* --- COLOR PALETTE (for reference) --- */
/* Primary Dark Blue: #022D5E */
/* Secondary Orange: #FD8804 */
/* Accent Yellow: #FCBE03 */
/* Light Blue Background: #E5EFFF */
/* Off-white Neutral: #FBFAFB */
/* Mid-light Blue: #BBD4F5 */
/* Readable Dark Grey: #4A5568 */

.navbar {
  background-color: #022d5e; /* Primary Dark Blue */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2); /* Stronger shadow for contrast */
  position: sticky;
  top: 0;
  z-index: 1000;
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
  height: 8.5rem; /* Keep logo size as is */
  width: auto;
  margin-right: -0.5rem;
  transition: transform 0.3s ease;
}

.logo-text {
  color: #fd8804; /* Secondary Orange for logo text */
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: -1rem;
}

/* .location - uncomment and style if needed
.location {
  color: #FBFAFB;
  font-size: 0.875rem;
  margin-left: 0.5rem;
}
*/

.desktop-nav {
  display: none;
}

.nav-link {
  color: #fbfafb; /* Off-white Neutral */
  padding: 0.5rem 0.75rem;
  margin: 0 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  text-decoration: none; /* Ensure no underline */
}

.nav-link:hover {
  color: #fd8804; /* Secondary Orange on hover */
}

.mobile-nav {
  display: block;
}
.menu-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fbfafb; /* Off-white Neutral */
  transition: color 0.3s ease;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 2001;
  position: relative;
  top: 0rem;
  right: 2rem;
}
.menu-toggle:active {
  transform: scale(0.95);
}

.menu-toggle:hover {
  color: var(--primary);
}
.material-symbols-outlined {
  font-variation-settings: "wght" 300;
  font-size: 3rem;
  position: relative;
  pointer-events: none;
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  padding-top: 4rem; /* ensures items start below navbar */
  transition: background-color 0.4s ease;
}

/* Slide-down animation */
.slide-down {
  background-color: var(--black);
  width: 80%;
  max-width: 300px;
  border-radius: 0.5rem;
  animation: slideIn 0.3s ease forwards;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.mobile-nav-link {
  padding: 1rem;
  text-decoration: none;
  color: #fbfafb; /* Off-white Neutral */
  font-size: 1rem;
  transition: background 0.3s ease;
  text-decoration: none; /* Ensure no underline */
}



.mobile-nav-link:hover {
  color: #fd8804; /* Secondary Orange on hover */
  background-color: rgba(253, 136, 4, 0.15); /* Subtle orange tint background on hover */
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