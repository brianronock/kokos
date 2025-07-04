<template>
  <section id="offer" class="offer-section">
    <div class="container">
      <div class="section-header">
        <h2>KOKOS Integrated Learning Platform</h2>
        <p>
          Everything schools need to implement world-class AI and coding
          education.
        </p>
      </div>

      <div class="offer-content">
        <div class="offer-features">
          <div class="feature-item">
            <div class="feature-icon">
              <span class="material-symbols-outlined">code</span>
            </div>
            <div class="feature-text">
              <h3>AI & Coding Curriculum</h3>
              <p>
                Scratch, Python, and WebXR programming tailored for young
                learners
              </p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <span class="material-symbols-outlined">cloud</span>
            </div>
            <div class="feature-text">
              <h3>Cloud-Based Learning</h3>
              <p>Interactive platform accessible from any device, anywhere</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <span class="material-symbols-outlined">menu_book</span>
            </div>
            <div class="feature-text">
              <h3>Integrated Textbooks</h3>
              <p>Digital resources aligned with curriculum standards</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <span class="material-symbols-outlined">groups</span>
            </div>
            <div class="feature-text">
              <h3>Teacher Training & Support</h3>
              <p>Comprehensive training programs and ongoing support</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <span class="material-symbols-outlined">computer</span>
            </div>
            <div class="feature-text">
              <h3>Hardware Packages</h3>
              <p>Optional lab setups with flexible financing options</p>
            </div>
          </div>
        </div>

        <div class="pricing-card">
          <div class="pricing-content">
            <h3>Simple Pricing</h3>
            <div class="price">US $4</div>
            <div class="price-period">per learner per month</div>
            <ul class="price-features">
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Full curriculum access
              </li>
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Teacher training included
              </li>
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                24/7 technical support
              </li>
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Progress tracking & analytics
              </li>
            </ul>
            <a @click.prevent="$emit('request-demo')" class="btn btn-white"
              >Get Started Today</a
            >
          </div>
        </div>
      </div>

      <div class="resources-section">
        <h3>Download Resources</h3>
        <div class="resources-grid">
          <div class="resource-card">
            <div class="resource-icon">
              <span class="material-symbols-outlined">description</span>
            </div>
            <h4>Program Brochure</h4>
            <p>Complete overview of our offerings</p>
            <a
              href="/files/kokos_namibia-brochure.pdf"
              class="btn btn-primary"
              target="_blank"
              rel="noopener"
              download="KOKOS_AI_Brochure.pdf"
            >
              Download PDF
            </a>
          </div>

          <div class="resource-card">
            <div class="resource-icon">
              <span class="material-symbols-outlined">school</span>
            </div>
            <h4>Teacher Guide</h4>
            <p>Implementation guide for educators</p>
            <button class="btn btn-primary">Coming soon...</button>
          </div>

          <div class="resource-card">
            <div class="resource-icon">
              <span class="material-symbols-outlined">assessment</span>
            </div>
            <h4>Curriculum Overview</h4>
            <p>Detailed curriculum breakdown</p>
            <a
              href="/files/kokos_india-brochure.pdf"
              class="btn btn-primary"
              target="_blank"
              rel="noopener"
              download="KOKOS_AI_Curriculum_Overview.pdf"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Offer",
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

.offer-section {
  background-color: #fbfafb; /* Off-white Neutral */
  padding: 5rem 0;
}

.offer-section {
  position: relative;
  color: #fbfafb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url("/images/bg1-mobile.jpg") center/cover no-repeat;
  background-attachment: fixed;
  padding: 4rem 0;
  overflow: hidden;
}

.offer-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(126, 188, 255, 0.8),
    rgba(255, 255, 255, 0.95)
  );
  z-index: 0;
}

.offer-section > * {
  position: relative;
  z-index: 1;
}

.offer-section > * {
  position: relative;
  z-index: 1;
}


.container {
  max-width: 1200px;
  margin: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: start;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #022d5e; /* Primary Dark Blue */
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #4a5568; /* Readable Dark Grey */
  max-width: 48rem;
  margin: 0 auto;
}

.offer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.offer-features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  /* Twitch: Changed background to transparent Primary Dark Blue */
  background-color: rgba(
    2,
    45,
    94,
    0.1
  ); /* Primary Dark Blue with 10% opacity */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon span {
  color: #fd8804; /* Secondary Orange (icon color remains strong) */
  font-size: 1.5rem;
}

.feature-text h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #022d5e; /* Primary Dark Blue */
}

.feature-text p {
  color: #4a5568; /* Readable Dark Grey */
}

.pricing-card {
  /* Twitch: Changed background to solid Primary Dark Blue */
  background-color: #022d5e; /* Primary Dark Blue */
  border-radius: 1.5rem;
  padding: 2.5rem;
  color: #fbfafb; /* Off-white Neutral (for general text in card) */
  text-align: center;
  outline: none;
  border: none;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Slightly stronger shadow for dark card */
}

.pricing-content h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.price {
  font-size: 5rem;
  font-weight: 700;
  color: #fcbe03; /* Accent Yellow for the price to make it pop */
  margin-bottom: 0.25rem;
}

.price-period {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.price-features {
  text-align: left;
  margin-bottom: 2.5rem;
}

.price-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.price-features li span {
  font-size: 1.25rem;
  color: #fcbe03; /* Accent Yellow for check icons */
}

.btn-white {
  background-color: #fbfafb; /* Off-white Neutral */
  color: #fd8804; /* Secondary Orange */
  width: 100%;
  padding: 0.75rem;
  font-weight: 600;
  border: none;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-white:hover {
  background-color: var(--orange2); /* Light Blue Background for hover */
  transform: translateY(-2px);
  color: var(--white);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  border: solid 0.5px var(--primary);
}

.resources-section {
  text-align: center;
  padding-top: 2rem;
}

.resources-section h3 {
  font-size: 2rem;
  color: #022d5e; /* Primary Dark Blue */
  margin-bottom: 2rem;
}

.resources-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.resource-card {
  background-color: #e5efff; /* Light Blue Background */
  padding: 1.5rem;
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.resource-icon {
  width: 4rem;
  height: 4rem;
  /* Twitch: Changed background to transparent Primary Dark Blue */
  background-color: rgba(
    2,
    45,
    94,
    0.1
  ); /* Primary Dark Blue with 10% opacity */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.resource-icon span {
  font-size: 2rem;
  color: #fd8804; /* Secondary Orange (icon color remains strong) */
}

.resource-card h4 {
  font-size: 1.25rem;
  color: #022d5e; /* Primary Dark Blue */
  margin-bottom: 0.5rem;
}

.resource-card p {
  color: #4a5568; /* Readable Dark Grey */
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.resource-card .btn {
  width: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
}

/* Ensure the btn-primary style (from hero) is applied */
.resource-card .btn.btn-primary {
  background-color: #fd8804; /* Secondary Orange */
  color: #022d5e; /* Primary Dark Blue text for contrast */
}

.resource-card .btn.btn-primary:hover {
  background-color: #fcbe03; /* Accent Yellow on hover */
  color: #022d5e; /* Primary Dark Blue text for contrast */
}

@media (min-width: 768px) {
  .resources-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .offer-section {
      background: url("/images/bg1.jpg") center/cover no-repeat;

  }
}

@media (min-width: 1024px) {
  .offer-content {
    grid-template-columns: 1fr 0.8fr;
    align-items: start;
  }

  .offer-features {
    padding-right: 2rem;
  }
}
</style>
