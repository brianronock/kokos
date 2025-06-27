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
            <p>
              Schedule a personalized demonstration of the KOKOS platform to see
              how it fits your school's needs.
            </p>
          </div>
          <div class="timeline-dot"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content right">
            <div class="step-number">2</div>
            <h3>Sign MoU</h3>
            <p>
              Formalize the partnership with a Memorandum of Understanding
              outlining terms and expectations.
            </p>
          </div>
          <div class="timeline-dot"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content left">
            <div class="step-number">3</div>
            <h3>School Subdomain Setup</h3>
            <p>
              Get your personalized school portal at schoolname.kokos.ai with
              customized branding and content.
            </p>
          </div>
          <div class="timeline-dot"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content right">
            <div class="step-number">4</div>
            <h3>Training & Onboarding</h3>
            <p>
              Comprehensive teacher training and student onboarding to ensure
              smooth implementation and success.
            </p>
          </div>
          <div class="timeline-dot"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "How",
};
</script>

---

```css
<style scoped>
/* --- COLOR PALETTE (for reference) --- */
/* Primary Dark Blue: #022D5E */
/* Secondary Orange: #FD8804 */
/* Accent Yellow: #FCBE03 */
/* Light Blue Background: #E5EFFF */
/* Off-white Neutral: #FBFAFB */
/* Mid-light Blue: #BBD4F5 */
/* Readable Dark Grey: #4A5568 */

.how-section {
  background-color: #e5efff; /* Light Blue Background for the section */
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #022d5e; /* Primary Dark Blue for the heading */
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #4a5568; /* Readable Dark Grey for description text */
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
  background-color: #fd8804; /* Secondary Orange for the timeline line */
  display: none; /* Hidden on mobile */
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
  background-color: #fbfafb; /* Off-white Neutral for content cards */
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08); /* Slightly softer shadow */
  width: 100%;
  max-width: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transition for hover */
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12); /* Lift and stronger shadow on hover */
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #022d5e; /* Primary Dark Blue for card headings */
}

.timeline-content p {
  color: #4a5568; /* Readable Dark Grey for card text */
}

.step-number {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #fd8804; /* Secondary Orange for step numbers */
  color: #fbfafb; /* Off-white Neutral for step number text */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Small shadow for pop */
}

.timeline-dot {
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fd8804; /* Secondary Orange for timeline dots */
  border-radius: 50%;
  border: 4px solid #e5efff; /* Light Blue Background for the border (matches section background) */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none; /* Hidden on mobile */
  z-index: 1; /* Ensure dot is above the line */
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1); /* Subtle halo for the dot */
}

/* Desktop-specific styles for timeline */
@media (min-width: 1024px) {
  .timeline-line {
    display: block; /* Show line on desktop */
  }

  .timeline-dot {
    display: block; /* Show dots on desktop */
  }

  .timeline-item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
  }

  .timeline-content {
    max-width: 40%; /* Adjust width for desktop layout */
  }

  .timeline-content.left {
    margin-right: auto;
    text-align: right;
    padding-right: 2.5rem; /* Space before the line/dot */
  }

  .timeline-content.right {
    margin-left: auto;
    text-align: left;
    padding-left: 2.5rem; /* Space after the line/dot */
  }

  /* Adjust positioning of step-number for left/right alignment */
  .timeline-content.left .step-number {
    margin-left: auto;
  }
  .timeline-content.right .step-number {
    margin-right: auto;
  }
}
</style>