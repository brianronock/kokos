<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-logo">
            <img src="/images/logo.jpg" alt="KOKOS Logo" class="logo-img">
            <div class="logo-text">KOKOS</div>
          </div>
          <p class="footer-description">
            Transforming education in Namibia through innovative AI and coding programs for the next generation.
          </p>
          <div class="footer-social">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <h3 class="footer-heading">Quick Links</h3>
          <ul class="footer-menu">
            <li>
              <a href="#home">
                <span class="material-symbols-outlined">arrow_right</span>
                Home
              </a>
            </li>
            <li>
              <a href="#why">
                <span class="material-symbols-outlined">arrow_right</span>
                Why AI Education?
              </a>
            </li>
            <li>
              <a href="#offer">
                <span class="material-symbols-outlined">arrow_right</span>
                What We Offer
              </a>
            </li>
            <li>
              <a href="#how">
                <span class="material-symbols-outlined">arrow_right</span>
                How It Works
              </a>
            </li>
            <li>
              <a href="#team">
                <span class="material-symbols-outlined">arrow_right</span>
                Our Team
              </a>
            </li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h3 class="footer-heading">Contact Info</h3>
          <ul class="contact-info">
            <li>
              <span class="material-symbols-outlined">location_on</span>
              Independence Avenue, Windhoek, Namibia
            </li>
            <li>
              <span class="material-symbols-outlined">phone</span>
              +264 61 123 4567
            </li>
            <li>
              <span class="material-symbols-outlined">email</span>
              info@kokos.ai
            </li>
            <li>
              <span class="material-symbols-outlined">schedule</span>
              Mon-Fri: 8:00 AM - 5:00 PM
            </li>
          </ul>
        </div>
        
        <div class="footer-newsletter">
          <h3 class="footer-heading">Newsletter</h3>
          <p class="newsletter-text">
            Subscribe to our newsletter for the latest updates on AI education.
          </p>
          <form class="newsletter-form">
            <input type="email" placeholder="Your email address" class="newsletter-input">
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">© {{ currentYear }} KOKOS Namibia. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#" class="legal-link">Privacy Policy</a>
          <a href="#" class="legal-link">Terms of Service</a>
          <a href="#" class="legal-link">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
<style scoped>
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 4rem 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-about {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-logo .logo-img {
  height: 2.5rem;
  width: auto;
}

.footer-logo .logo-text {
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-description {
  color: var(--gray-400);
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social .social-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  transition: all 0.3s ease;
}

.footer-social .social-icon:hover {
  background-color: var(--primary);
  color: var(--white);
}

.footer-heading {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--gray-800);
}

.footer-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-menu a {
  color: var(--gray-400);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.footer-menu a:hover {
  color: var(--primary);
}

.footer-menu span {
  font-size: 1rem;
}

.contact-info {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--gray-400);
}

.contact-info span {
  color: var(--primary);
  font-size: 1.25rem;
}

.newsletter-text {
  color: var(--gray-400);
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.newsletter-input {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--gray-800);
  border: 1px solid var(--gray-700);
  color: var(--white);
  transition: border-color 0.3s ease;
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--primary);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--gray-800);
  text-align: center;
}

.copyright {
  color: var(--gray-500);
  margin-bottom: 1rem;
}

.footer-legal {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.legal-link {
  color: var(--gray-500);
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: var(--primary);
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  
  .copyright {
    margin-bottom: 0;
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>