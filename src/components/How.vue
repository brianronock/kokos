<template>
  <section id="how" class="how-section">
    <div class="container">
      <div class="section-header">
        <h2>How It Works</h2>
        <p>Simple steps to bring AI education to your school</p>
      </div>
      
      <div class="timeline">
        <div class="timeline-line"></div>
        
        <div class="timeline-item">
          <div class="timeline-content left">
            <div class="step-number">1</div>
            <h3>Request Demo</h3>
            <p>Schedule a personalized demonstration of the KOKOS platform to see how it fits your school's needs.</p>
          </div>
          <div class="timeline-dot"></div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-content right">
            <div class="step-number">2</div>
            <h3>Sign MoU</h3>
            <p>Formalize the partnership with a Memorandum of Understanding outlining terms and expectations.</p>
          </div>
          <div class="timeline-dot"></div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-content left">
            <div class="step-number">3</div>
            <h3>School Subdomain Setup</h3>
            <p>Get your personalized school portal at schoolname.kokos.ai with customized branding and content.</p>
          </div>
          <div class="timeline-dot"></div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-content right">
            <div class="step-number">4</div>
            <h3>Training & Onboarding</h3>
            <p>Comprehensive teacher training and student onboarding to ensure smooth implementation and success.</p>
          </div>
          <div class="timeline-dot"></div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'How'
}
</script>

<style scoped>
.how-section {
  background-color: var(--gray-50);
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

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: var(--primary);
  display: none;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-content {
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--black);
}

.timeline-content p {
  color: var(--gray-600);
}

.step-number {
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--primary);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 1rem;
}

.timeline-dot {
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--primary);
  border-radius: 50%;
  border: 4px solid var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

@media (min-width: 1024px) {
  .timeline-line {
    display: block;
  }

  .timeline-dot {
    display: block;
  }

  .timeline-item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
  }

  .timeline-content {
    max-width: 40%;
  }

  .timeline-content.left {
    margin-right: auto;
    text-align: right;
  }

  .timeline-content.right {
    margin-left: auto;
    text-align: left;
  }

  .timeline-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>