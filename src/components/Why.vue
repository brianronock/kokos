<template>
  <section id="why" class="why-section">
    <div class="container">
      <div class="section-header">
        <h2>Why AI Education Matters</h2>
        <p>
          Preparing young minds for a future where AI literacy is as essential
          as traditional reading and writing.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-symbols-outlined">psychology</span>
          </div>
          <h3>Critical Thinking</h3>
          <p>
            AI education develops logical reasoning, problem-solving skills, and
            computational thinking from an early age.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-symbols-outlined">trending_up</span>
          </div>
          <h3>Future Readiness</h3>
          <p>
            85% of jobs that will exist in 2030 haven't been invented yet. AI
            literacy ensures students are prepared for tomorrow's careers.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-symbols-outlined">school</span>
          </div>
          <h3>Modern Learning</h3>
          <p>
            Interactive, engaging methods that make learning fun while building
            essential 21st-century skills.
          </p>
        </div>
      </div>

      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-number">50M+</div>
          <div class="stat-label">AI-related jobs by 2025</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">90%</div>
          <div class="stat-label">Of companies use AI technology</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">75%</div>
          <div class="stat-label">Higher earning potential with AI skills</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Why",
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

.why-section {
  background-color: #fbfafb; /* Off-white Neutral for the section background */
  padding: 5rem 0;
}

.why-section {
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

.why-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(126, 188, 255, 0.8),
    rgba(255, 255, 255, 0.9)
  );
  z-index: 0;
}

.why-section > * {
  position: relative;
  z-index: 1;
}


.container {
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: start;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #022d5e; /* Primary Dark Blue for the heading */
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #131e30; /* Readable Dark Grey for description text */
  max-width: 48rem;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background-color: #e8eff8e2; /* Pure white for cards, contrasting Off-white section background */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #fd8804; /* Secondary Orange for the accent border */
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15); /* Slightly stronger shadow on hover */
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  background-color: rgba(
    253,
    136,
    4,
    0.1
  ); /* Secondary Orange with transparency */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon span {
  font-size: 2rem;
  color: #fd8804; /* Secondary Orange for the icons */
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #022d5e; /* Primary Dark Blue for card headings */
}

.feature-card p {
  color: #4a5568; /* Readable Dark Grey for card text */
}

.stats-container {
  background-color: #022d5e; /* Primary Dark Blue for the stats background */
  border-radius: 1.5rem;
  padding: 2.5rem 2rem; /* Adjusted padding for better spacing */
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  color: #fbfafb; /* Off-white Neutral for general stat text */
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #fd8804; /* Secondary Orange for the large numbers */
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  line-height: 1.4; /* Improve readability for multi-line labels */
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-container {
    grid-template-columns: repeat(3, 1fr);
  }
  .why-section {
      background: url("/images/bg1.jpg") center/cover no-repeat;
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
