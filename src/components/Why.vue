<template>
  <section id="why" class="why-section">
    <div class="container">
      <div class="section-header">
        <h2>Why AI Education Matters</h2>
        <p>Preparing young minds for a future where AI literacy is as essential as traditional reading and writing.</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-symbols-outlined">psychology</span>
          </div>
          <h3>Critical Thinking</h3>
          <p>AI education develops logical reasoning, problem-solving skills, and computational thinking from an early age.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-symbols-outlined">trending_up</span>
          </div>
          <h3>Future Readiness</h3>
          <p>85% of jobs that will exist in 2030 haven't been invented yet. AI literacy ensures students are prepared for tomorrow's careers.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <span class="material-symbols-outlined">school</span>
          </div>
          <h3>Modern Learning</h3>
          <p>Interactive, engaging methods that make learning fun while building essential 21st-century skills.</p>
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
  name: 'Why'
}
</script>

<style scoped>
.why-section {
  background-color: var(--blue2);
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

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background-color: var(--white1);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid var(--orange1);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  background-color: rgba(249, 115, 22, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon span {
  font-size: 2rem;
  color: var(--primary);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--black);
}

.feature-card p {
  color: var(--gray-600);
}

.stats-container {
  background-color: var(--blue1);
  border-radius: 1.5rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  color: var(--white1);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--orange1);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stats-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>