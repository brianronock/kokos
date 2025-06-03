<template>
  <section id="faq" class="faq-section">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our AI education programs</p>
      </div>

      <div class="faq-grid">
        <details class="faq-item" :open="openStates[0]" @toggle="toggleItem(0)">
          <summary>
            What age groups is your curriculum designed for?
            <span v-html="openStates[0] ? '&#x2212;' : '&#x2b;'"></span>
          </summary>
          <div class="faq-answer">
            Our AI and coding curriculum is specially designed for learners in Grades 1-8, with age-appropriate content and activities that grow in complexity as students advance.
          </div>
        </details>

        <details class="faq-item" :open="openStates[1]" @toggle="toggleItem(1)">
          <summary>
            Do teachers need prior coding experience?
            <span v-html="openStates[1] ? '&#x2b;' : '&#x2212;'"></span>
          </summary>
          <div class="faq-answer">
            No prior coding experience is required. Our comprehensive training program prepares teachers of all backgrounds to effectively deliver the curriculum with confidence.
          </div>
        </details>

        <details class="faq-item" :open="openStates[2]" @toggle="toggleItem(2)">
          <summary>
            What hardware requirements are needed?
            <span v-html="openStates[2] ? '&#x2212;' : '&#x2b;'"></span>
          </summary>
          <div class="faq-answer">
            Our platform works on standard computers, tablets, and even smartphones. We offer flexible hardware packages if your school needs additional equipment.
          </div>
        </details>

        <details class="faq-item" :open="openStates[3]" @toggle="toggleItem(3)">
          <summary>
            How is the program integrated into existing curricula?
            <span v-html="openStates[3] ? '&#x2b;' : '&#x2212;'"></span>
          </summary>
          <div class="faq-answer">
            Our curriculum is designed to complement Namibia's educational standards and can be implemented either as a standalone subject or integrated within existing subjects like mathematics and science.
          </div>
        </details>

        <details class="faq-item" :open="openStates[4]" @toggle="toggleItem(4)">
          <summary>
            What ongoing support do you provide?
            <span v-html="openStates[4] ? '&#x2212;' : '&#x2b;'"></span>
          </summary>
          <div class="faq-answer">
            We provide continuous technical support, regular curriculum updates, and professional development opportunities for teachers throughout the partnership.
          </div>
        </details>

        <details class="faq-item" :open="openStates[5]" @toggle="toggleItem(5)">
          <summary>
            How do you measure program success?
            <span v-html="openStates[5] ? '&#x2b;' : '&#x2212;'"></span>
          </summary>
          <div class="faq-answer">
            We provide comprehensive analytics and assessment tools to track student progress, engagement, and skill development, with regular reports for administrators and teachers.
          </div>
        </details>
      </div>

      <div class="faq-cta">
        <p>Still have questions? We're here to help!</p>
        <a href="#contact" class="btn btn-primary">
          <span class="material-symbols-outlined">contact_support</span>
          Contact Our Support Team
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      openStates: Array(6).fill(false) // Assuming 6 FAQ items
    };
  },
  methods: {
    toggleItem(index) {
      this.openStates = this.openStates.map((item, i) => (i === index ? !item : item));
    }
  }
};
</script>

<style scoped>
.faq-section {
  background-color: var(--gray-50);
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
  color: var(--black);
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: var(--gray-600);
  max-width: 48rem;
  margin: 0 auto;
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column */
  gap: 0.5rem; /* Reduced gap for the border to be more prominent */
  max-width: 60rem;
  margin: 0 auto 3rem;
}

.faq-item {
  background-color: var(--white);
  border-radius: 0.5rem; /* Slightly less rounded for the border */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: 4px solid var(--primary); /* Thick orange border */
}

.faq-item[open] {
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08);
}

.faq-item summary {
  padding: 1.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  color: var(--black);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-item summary:hover {
  background-color: rgba(249, 115, 22, 0.05);
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary span {
  color: var(--primary);
  font-size: 1.5rem; /* Adjust size for the icon */
  transition: transform 0.3s ease;
}

.faq-item[open] summary span {
  content: '-'; /* Will not work directly in CSS for pseudo-elements on span */
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: var(--gray-600);
}

.faq-cta {
  text-align: center;
}

.faq-cta p {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: var(--gray-600);
}

.faq-cta .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
}
</style>