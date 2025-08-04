<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <a href="#" class="footer-logo" @click="$emit('navigate', 'home')">
            <img src="/images/logo11.svg" alt="KOKOS Logo" class="logo-img" />
          </a>
          <p class="footer-description">
            Transforming education in Namibia through innovative AI and coding
            programs for the next generation.
          </p>
          <a
            href="https://www.facebook.com/Africafuturetech"
            class="social-link-wrapper"
            target="_blank"
            rel="noopener"
          >
            <span class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </span>
            <p class="social-text">Follow us on Facebook!</p>
          </a>
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
              ERF Academy, Windhoek, Namibia
            </li>
            <li>
              <span class="material-symbols-outlined">phone</span>
              +264 81 716 4769
            </li>
            <li>
              <span class="material-symbols-outlined">phone</span>
              +43 660 9177324
            </li>
            <li>
              <span class="material-symbols-outlined">phone</span>
              +264 81 465 1384
            </li>
            <li>
              <span class="material-symbols-outlined">email</span>
              contact@futuretechafrica.com
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
          <form @submit.prevent="handleSubmit" class="newsletter-form">
            <input
              v-model="form.email"
              type="email"
              name="email"
              required
              placeholder="Your email address"
              class="newsletter-input"
              :class="{ 'input-error': emailError }"
            />
            <p v-if="emailError" class="form-error">{{ emailError }}</p>

            <button type="submit" class="btn btn-primary">Subscribe</button>

            <p v-if="success" class="newsletter-success">
              🎉 Thank you for subscribing!
            </p>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} KOKOS Namibia. All rights reserved.
        </p>
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
  name: "Footer",
  data() {
    return {
      form: {
        email: "",
      },
      success: false,
      emailError: "",
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    async handleSubmit() {
      this.emailError = "";

      // Validate email
      if (!this.form.email) {
        this.emailError = "Please enter your email address.";
        setTimeout(() => {
          if (this.emailError === "Please enter your email address.") {
            this.emailError = "";
          }
        }, 3000);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email)) {
        this.emailError = "Please enter a valid email address.";
        setTimeout(() => {
          if (this.emailError === "Please enter a valid email address.") {
            this.emailError = "";
          }
        }, 3000);
        return;
      }

      try {
        const response = await fetch("https://formspree.io/f/movlkvke", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.form.email,
            message: "KOKOS Newsletter Signup",
          }),
        });

        const result = await response.json();

        if (response.ok) {
          this.success = true;
          this.form.email = "";
          setTimeout(() => (this.success = false), 5000);
        } else {
          this.emailError =
            result?.errors?.[0]?.message || "There was an error.";
        }
      } catch (error) {
        this.emailError = "Network error. Please try again.";
      }
    },
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

.footer {
  background-color: #022d5e; /* Primary Dark Blue background for the footer */
  color: #fbfafb; /* Off-white for general text on dark background */
  padding: 4rem 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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
  gap: 0rem;
}

.footer-logo .logo-img {
  height: 5rem;
  width: auto;
  margin-top: -2.5rem;
  margin-left: -2rem;
}
.footer-logo .logo-img:hover {
  transform: translateY(-0.1rem);
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

.footer-logo .logo-text {
  color: #fd8804; /* Secondary Orange for the logo text */
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-about {
  display: flex;
  align-items: center;
}

.social-link-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.social-link-wrapper:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fd8804;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link-wrapper:hover .social-icon {
  background-color: #fd8804;
  color: #022d5e;
}

.footer-description {
  color: #bbd4f5; /* Mid-light Blue for description text */
}

.footer-heading {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle white border */
  color: #fcbe03; /* Accent Yellow for headings */
}

.footer-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0; /* Remove default padding */
}

.footer-menu a {
  color: #bbd4f5; /* Mid-light Blue for menu links */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease;
}

.footer-menu a:hover {
  color: #fd8804; /* Secondary Orange on hover for menu links */
}

.footer-menu span {
  font-size: 1rem;
  color: #fd8804; /* Secondary Orange for arrow icons */
}

.contact-info {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0; /* Remove default padding */
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #bbd4f5; /* Mid-light Blue for contact info text */
}

.contact-info span {
  color: #fd8804; /* Secondary Orange for contact icons */
  font-size: 1.25rem;
}

.newsletter-text {
  color: #bbd4f5; /* Mid-light Blue for newsletter description */
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
  background-color: rgba(
    255,
    255,
    255,
    0.1
  ); /* Slightly transparent white for input background */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Slightly more opaque border */
  color: #fbfafb; /* Off-white text in input */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6); /* Lighter placeholder on dark background */
}

.newsletter-input:focus {
  outline: none;
  border-color: #fd8804; /* Secondary Orange on focus */
  box-shadow: 0 0 0 3px rgba(253, 136, 4, 0.2); /* Orange glow on focus */
}

.newsletter-success {
  color: #fcbe03;
  font-weight: 600;
  margin-top: 1rem;
  text-align: center;
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.input-error {
  border: 2px solid #ff4d4f;
}

.form-error {
  color: #ff4d4f;
  margin: 0.25rem 0 -0.25rem 0;
  font-size: 0.9rem;
  text-align: center;
  font-family: var(--font2);

}
/* Primary Button (Subscribe) Styles - adapted for dark background */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease,
    transform 0.2s ease;
  cursor: pointer;
  border: none;
  font-size: 1.1rem;
  line-height: 1;

  background-color: #fd8804; /* Secondary Orange background */
  color: #022d5e; /* Dark Blue text on orange button */
  box-shadow: 0 4px 8px rgba(253, 136, 4, 0.2);
}

.btn-primary:hover {
  background-color: #fcbe03; /* Accent Yellow on hover */
  color: #022d5e; /* Dark Blue text on yellow hover */
  box-shadow: 0 6px 12px rgba(252, 190, 3, 0.3);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
}

.footer-bottom {
  padding: 2rem 0; /* Adjusted padding to be symmetrical */
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Subtle white border */
  text-align: center;
  margin-top: 3rem; /* Add some space above the bottom section */
}

.copyright {
  color: #bbd4f5; /* Mid-light Blue for copyright text */
  margin-bottom: 1rem;
}

.footer-legal {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.legal-link {
  color: #bbd4f5; /* Mid-light Blue for legal links */
  transition: color 0.3s ease;
  text-decoration: none; /* Remove default underline */
}

.legal-link:hover {
  color: #fd8804; /* Secondary Orange on hover */
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
