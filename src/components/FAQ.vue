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
            <span class="faq-icon">{{ openStates[0] ? '&#x2212;' : '&#x2b;' }}</span>
          </summary>
          <div class="faq-answer">
            Our AI and coding curriculum is specially designed for learners in Grades 1-8, with age-appropriate content and activities that grow in complexity as students advance.
          </div>
        </details>

        <details class="faq-item" :open="openStates[1]" @toggle="toggleItem(1)">
          <summary>
            Do teachers need prior coding experience?
            <span class="faq-icon">{{ openStates[1] ? '&#x2212;' : '&#x2b;' }}</span>
          </summary>
          <div class="faq-answer">
            No prior coding experience is required. Our comprehensive training program prepares teachers of all backgrounds to effectively deliver the curriculum with confidence.
          </div>
        </details>

        <details class="faq-item" :open="openStates[2]" @toggle="toggleItem(2)">
          <summary>
            What hardware requirements are needed?
            <span class="faq-icon">{{ openStates[2] ? '&#x2212;' : '&#x2b;' }}</span>
          </summary>
          <div class="faq-answer">
            Our platform works on standard computers, tablets, and even smartphones. We offer flexible hardware packages if your school needs additional equipment.
          </div>
        </details>

        <details class="faq-item" :open="openStates[3]" @toggle="toggleItem(3)">
          <summary>
            How is the program integrated into existing curricula?
            <span class="faq-icon">{{ openStates[3] ? '&#x2212;' : '&#x2b;' }}</span>
          </summary>
          <div class="faq-answer">
            Our curriculum is designed to complement Namibia's educational standards and can be implemented either as a standalone subject or integrated within existing subjects like mathematics and science.
          </div>
        </details>

        <details class="faq-item" :open="openStates[4]" @toggle="toggleItem(4)">
          <summary>
            What ongoing support do you provide?
            <span class="faq-icon">{{ openStates[4] ? '&#x2212;' : '&#x2b;' }}</span>
          </summary>
          <div class="faq-answer">
            We provide continuous technical support, regular curriculum updates, and professional development opportunities for teachers throughout the partnership.
          </div>
        </details>

        <details class="faq-item" :open="openStates[5]" @toggle="toggleItem(5)">
          <summary>
            How do you measure program success?
            <span class="faq-icon">{{ openStates[5] ? '&#x2212;' : '&#x2b;' }}</span>
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
      // Close all other items when one is opened
      this.openStates = this.openStates.map((item, i) => (i === index ? !item : false));
    }
  }
};
</script>

<style scoped>
/* --- COLOR PALETTE DEFINITIONS --- */
/* Your primary dark blue */
.color-primary-dark-blue { color: #022D5E; }
.bg-primary-dark-blue { background-color: #022D5E; }
.border-primary-dark-blue { border-color: #022D5E; }

/* Your secondary orange */
.color-secondary-orange { color: #FD8804; }
.bg-secondary-orange { background-color: #FD8804; }
.border-secondary-orange { border-color: #FD8804; }

/* Your accent yellow */
.color-accent-yellow { color: #FCBE03; }

/* Your light blue background */
.bg-light-blue-bg { background-color: #E5EFFF; }

/* Your off-white neutral */
.bg-off-white-neutral { background-color: #FBFAFB; }

/* Your mid-light blue (for subtle highlights) */
.bg-mid-light-blue { background-color: #BBD4F5; }

/* --- GENERAL STYLES --- */
.faq-section {
  background-color: #E5EFFF; /* Light Blue Background */
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #022D5E; /* Dark Blue */
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #4A5568; /* A readable dark grey for text */
  max-width: 48rem;
  margin: 0 auto;
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem; /* Space between FAQ items */
  max-width: 60rem;
  margin: 0 auto 3rem;
}

.faq-item {
  background-color: #FBFAFB; /* Off-white for item background */
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  border-left: 5px solid #FD8804; /* Secondary Orange accent border */
}

.faq-item[open] {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.12);
  /* Optional: change border color when open */
  /* border-left-color: #022D5E; */ /* Dark blue on open */
}

.faq-item summary {
  padding: 1.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  color: #022D5E; /* Dark Blue for question text */
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-item summary:hover {
  background-color: #BBD4F5; /* Mid-light blue on hover */
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

/* Icon for plus/minus */
.faq-item .faq-icon {
  color: #FCBE03; /* Accent Yellow for the icon */
  font-size: 1.8rem;
  font-weight: bold; /* Make the + and - symbols bolder */
  line-height: 1; /* Helps with vertical alignment */
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #4A5568; /* Readable dark grey for answer text */
  line-height: 1.6;
}

.faq-cta {
  text-align: center;
  margin-top: 4rem;
}

.faq-cta p {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #4A5568; /* Readable dark grey */
}

/* Button Styling */
.faq-cta .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.8rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.faq-cta .btn-primary {
  background-color: #022D5E; /* Dark Blue background */
  color: #FBFAFB; /* Off-white text */
  border: 1px solid #022D5E;
  box-shadow: 0 4px 8px rgba(2, 45, 94, 0.2); /* Subtle shadow */
}

.faq-cta .btn-primary:hover {
  background-color: #FD8804; /* Secondary Orange on hover */
  border-color: #FD8804;
  color: #FBFAFB; /* Off-white text */
  box-shadow: 0 6px 12px rgba(253, 136, 4, 0.3); /* Orange-tinted shadow on hover */
}

.faq-cta .btn-primary .material-symbols-outlined {
  font-size: 1.4rem;
}
</style>