<template>
  <section class="about-section">
    <div class="container">
      <div class="title">
        <h1>About Us</h1>
      </div>
      <div class="content">
        <p class="intro">
          We are a proudly local African initiative working at the grassroots
          level to bring cutting-edge AI and coding education to schools across
          the continent. In collaboration with international partners like
          <a href="https://kokos.ai" target="_blank">Kokos.ai</a> and
          <a href="https://exposoft.in" target="_blank">Exposoft India</a>, we
          aim to equip the next generation with digital skills for a brighter
          future.
        </p>

        <div class="partners">
          <div class="partner hover-wrapper">
            <a href="https://kokos.ai" target="_blank" class="partner-link">
              <img
                src="/images/kokos_logo.png"
                alt="KOKOS Logo"
                class="partner-img"
              />
              <div class="hover-card">
                Visit Kokos.ai – Global EdTech Innovator
              </div>
            </a>
            <p>
              Kokos is a global ed-tech platform dedicated to reimagining
              education through AI-driven personalized learning paths,
              curriculum mapping, and data insights.
            </p>
          </div>

          <div class="partner hover-wrapper">
            <a
              href="https://www.exposoft.in"
              target="_blank"
              class="partner-link"
            >
              <img
                src="/images/exposoft_logo.png"
                alt="Exposoft Logo"
                class="partner-img2"
              />
              <div class="hover-card">
                Visit Exposoft.in – Kokos India Implementation Partner
              </div>
            </a>
            <p>
              Exposoft is the implementation partner for Kokos in India,
              bringing digital education tools into classrooms and supporting
              nationwide adoption.
            </p>
          </div>
        </div>

        <div class="cta-buttons">
          <button class="btn btn-primary" @click.prevent="$emit('go-home')">
            Back to Home
          </button>
          <button class="btn btn-secondary" @click.prevent="$emit('go-team')">
            Meet Our Team
          </button>
        </div>

        <div class="social-links">
          <p>Follow us on:</p>
          <a
            href="https://www.facebook.com/profile.php?id=61577846649405"
            target="_blank"
            class="social-text"
            >Facebook</a
          >
          <!-- Add more social links if needed -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  emits: ["go-home", "go-team"],
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 1.5rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: start;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  margin-top: 2rem;
}

.content {
  position: relative;
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack columns on mobile */
  align-items: center; /* Center content vertically in the column */
  gap: 3rem; /* Space between text and video columns */
  text-align: center; /* Center text on mobile */
  width: 100%;
  z-index: 1; /* Ensure content is above the background */
}

.about-section {
  position: relative;
  color: #fbfafb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url("/images/bg2-mobile2.jpg") center / cover no-repeat;
  background-attachment: fixed;
  padding: 4rem 0;
  overflow: hidden;
}

.about-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(2, 45, 94, 0.95),
    rgba(15, 80, 155, 0.9)
  );
  z-index: 0;
}

.about-section > * {
  position: relative;
  z-index: 1;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.partners {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.partner h2 {
  color: #fd8804;
}

.partner p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.partner-img {
  height: 5rem;
  width: auto;
  margin-top: -3rem;
}

.partner-img2 {
  height: 7rem;
  width: auto;
  margin-top: -1rem;
}
.hover-wrapper {
  position: relative;
  display: inline-block;
}

.partner-link {
  position: relative;
  display: inline-block;
  text-align: center;
}

.hover-card {
  visibility: hidden;
  background-color: #022d5e;
  color: #fff;
  text-align: center;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  position: absolute;
  z-index: 10;
  bottom: 110%; /* Show above image */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  white-space: nowrap;
  font-size: 0.9rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.partner-link:hover .hover-card {
  visibility: visible;
  opacity: 1;
}

.partner-link:hover .partner-img,
.partner-link:hover .partner-img2 {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
  opacity: 0.95;
}

.cta-buttons {
    font: var(--font3);
    display: flex;
    gap: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.85rem 2rem; /* Slightly larger buttons */
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none; /* Remove underline from links */
  font-size: 1rem; /* Consistent button font size */
}

.btn-primary {
  background-color: #fd8804; /* Secondary Orange */
  color: #022d5e; /* Primary Dark Blue text for contrast */
  box-shadow: 0 4px 10px rgba(253, 136, 4, 0.3); /* Orange-tinted shadow */
}

.btn-primary:hover {
  background-color: #022d5e6d; /* Accent Yellow on hover */
  color: var(--primary);
  transform: translateY(-3px); /* More pronounced lift */
}

.btn-secondary {
  border: 2px solid #fcbe03; /* Accent Yellow border */
  color: #fcbe03; /* Accent Yellow text */
  background-color: transparent;
}

.btn-secondary:hover {
  background-color: #fc9d037b; /* Accent Yellow fill on hover */
  color: #022d5e; /* Primary Dark Blue text on hover */
  transform: translateY(-3px); /* More pronounced lift */
}

.btn-secondary {
  background-color: #022d5e;
  color: white;
}

.social-links a {
  color: var(--primary);
  text-decoration: underline;
}
.social-links a:hover {
  color: var(--blue1);
  border: none;
  background-color: var(--primary);
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0 1rem;
  text-decoration: none;
  transform: scale(1.05);
  transition: all 0.1s ease-in-out;
}

@media (min-width: 768px) {
  .about-section {
    background: url("/images/bg2.jpg") center/cover no-repeat;
  }
}
</style>
