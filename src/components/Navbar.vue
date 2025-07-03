<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-container">
        <a href="#" class="logo" @click="$emit('navigate', 'home')">
          <img src="/images/logo11.svg" alt="KOKOS Logo" class="logo-img" />
        </a>
        <!-- <img src="/images/splash.svg" alt="KOKOS motto" class="motto-img" /> -->

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
}

.container {
  position: relative;
  top: 0;
  z-index: 10000;
  min-width: 100vw;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  position: fixed;
  top: 0;
  z-index: 9000;
  background-color: #011d3e; /* Primary Dark Blue */
  box-shadow: 4px 10px 16px -1px rgba(0, 0, 0, 0.4); /* Stronger shadow for contrast */
  min-width: 100vw;
  margin-left: -1.1rem;
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
  height: 6rem; /* Keep logo size as is */
  width: auto;
  margin: 2.2rem 0 0 2rem;
  transition: transform 0.3s ease;
}

/* .motto-img {
  height: 14rem;
  width: auto;
  margin: 4.5rem 0 0 -21rem;
  transition: transform 0.3s ease;
  z-index: -1000;
} */

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
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 0.75rem;
  color: var(--white);
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  z-index: 2001;
  position: relative;
  top: 0rem;
  right: 2rem;
}
.menu-toggle:active {
  transform: scale(0.95);
}

.menu-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  transition: transform 0.3s ease;
  font-size: 2.8rem;
  position: relative;
  pointer-events: none;
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(1, 7, 14, 0.6);
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  padding-top: 4rem; /* ensures items start below navbar */
  transition: background-color 0.4s ease;
}

.slide-down {
  background: rgba(109, 163, 255, 0.07);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 80%;
  max-width: 300px;
  border-radius: 0.75rem;
  animation: slideIn 0.3s ease forwards;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
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
  color: #fd8804;
  background-color: rgba(109, 163, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.228);
  transition: all 2ms ease-in-out;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }

  .mobile-nav {
    display: none;
  }

  .logo-img {
    height: 6rem;
    margin: 2.5rem 0 0 2rem;
  }

  .navbar-container {
    height: 3.5rem;
  }

  .nav-link {
    margin-top: 1rem;
  }
}
</style>
