<template>
  <section id="offer" class="offer-section">
    <div class="container">
      <div class="section-header">
        <h2>KOKOS Integrated Learning Platform</h2>
        <p>Everything schools need to implement world-class AI and coding education.</p>
      </div>

      <div class="offer-content">
        <div class="offer-features">
          <div class="feature-item">
            <div class="feature-icon">
              <span class="material-symbols-outlined">code</span>
            </div>
            <div class="feature-text">
              <h3>AI & Coding Curriculum</h3>
              <p>Scratch, Python, and WebXR programming tailored for young learners</p>
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
            <div class="price">$4</div>
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
            <button class="btn btn-white">Get Started Today</button>
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
            <button class="btn btn-primary">Download PDF</button>
          </div>

          <div class="resource-card">
            <div class="resource-icon">
              <span class="material-symbols-outlined">school</span>
            </div>
            <h4>Teacher Guide</h4>
            <p>Implementation guide for educators</p>
            <button class="btn btn-primary">Download PDF</button>
          </div>

          <div class="resource-card">
            <div class="resource-icon">
              <span class="material-symbols-outlined">assessment</span>
            </div>
            <h4>Curriculum Overview</h4>
            <p>Detailed curriculum breakdown</p>
            <button class="btn btn-primary">Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Offer'
}
</script>

<style scoped>
.offer-section {
  background-color: var(--white);
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--black);
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: var(--gray-600);
  max-width: 48rem;
  margin: 0 auto;
}

.offer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 5rem;
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
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon span {
  color: var(--white);
  font-size: 1.5rem;
}

.feature-text h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--black);
}

.feature-text p {
  color: var(--gray-600);
}

.pricing-card {
  background: linear-gradient(to bottom right, #e66a00, #e68a49); /* Darker orange gradient */
  border-radius: 1.5rem;
  padding: 2.5rem;
  color: var(--white);
  text-align: center;
  outline: none; /* Ensure no default focus outline */
  border: none; /* Ensure no explicit border */
}

.pricing-content h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.price {
  font-size: 5rem;
  font-weight: 700;
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
}

.btn-white {
  background-color: var(--white);
  color: var(--primary);
  width: 100%;
  padding: 0.75rem;
  font-weight: 600;
  border: none; /* Ensure no border on the button */
  outline: none; /* Ensure no default focus outline */
}

.btn-white:hover {
  background-color: var(--gray-100);
}

.resources-section {
  text-align: center;
}

.resources-section h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.resources-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.resource-card {
  background-color: var(--gray-50);
  padding: 1.5rem;
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.resource-icon {
  width: 4rem;
  height: 4rem;
  background-color: rgba(249, 115, 22, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.resource-icon span {
  font-size: 2rem;
  color: var(--primary);
}

.resource-card h4 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.resource-card p {
  color: var(--gray-600);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.resource-card .btn {
  width: 100%;
  padding: 0.5rem;
  border: none; /* Ensure no border on the button */
  outline: none; /* Ensure no default focus outline */
}

@media (min-width: 768px) {
  .resources-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .offer-content {
    grid-template-columns: 1fr 1fr;
  }
}
</style>