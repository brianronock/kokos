<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-container">
        <div class="logo">
          <img src="/images/logo.jpg" alt="KOKOS Logo" class="logo-img">
        //#<div class="logo-text"></div>
          <div class="location">Namibia</div>
        </div>
        
        <nav class="desktop-nav">
          <a href="#home" class="nav-link">Home</a>
          <a href="#why" class="nav-link">Why AI Education?</a>
          <a href="#offer" class="nav-link">What We Offer</a>
          <a href="#how" class="nav-link">How It Works</a>
          <a href="#team" class="nav-link">Team</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="#faq" class="nav-link">FAQ</a>
        </nav>
        
        <div class="mobile-nav">
          <details class="mobile-menu">
            <summary class="menu-toggle">
              <span class="material-symbols-outlined">menu</span>
            </summary>
            <div class="mobile-menu-items">
              <a href="#home" class="mobile-nav-link">Home</a>
              <a href="#why" class="mobile-nav-link">Why AI Education?</a>
              <a href="#offer" class="mobile-nav-link">What We Offer</a>
              <a href="#how" class="mobile-nav-link">How It Works</a>
              <a href="#team" class="mobile-nav-link">Team</a>
              <a href="#contact" class="mobile-nav-link">Contact</a>
              <a href="#faq" class="mobile-nav-link">FAQ</a>
            </div>
          </details>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
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
}

.logo-img {
  height: 2.5rem;
  width: auto;
  margin-right: 0.5rem;
}

.logo-text {
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 700;
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