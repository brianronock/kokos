<template>
  <section id="faq" class="faq-section">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our AI education programs</p>
      </div>

      <div class="faq-grid">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="faq-item"
        >
          <div class="faq-question" @click="toggleItem(index)">
            {{ item.question }}
            <span class="faq-icon">
              {{ openIndex === index ? '−' : '+' }}
            </span>
          </div>
          <transition name="faq">
            <div v-if="openIndex === index" class="faq-answer">
              {{ item.answer }}
            </div>
          </transition>
        </div>
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
  name: "FAQ",
  data() {
    return {
      openIndex: null,
      faqs: [
        {
          question: "What age groups is your curriculum designed for?",
          answer:
            "Our AI and coding curriculum is specially designed for learners in Grades 1-8, with age-appropriate content and activities that grow in complexity as students advance.",
        },
        {
          question: "Do teachers need prior coding experience?",
          answer:
            "No prior coding experience is required. Our comprehensive training program prepares teachers of all backgrounds to effectively deliver the curriculum with confidence.",
        },
        {
          question: "What hardware requirements are needed?",
          answer:
            "Our platform works on standard computers, tablets, and even smartphones. We offer flexible hardware packages if your school needs additional equipment.",
        },
        {
          question: "How is the program integrated into existing curricula?",
          answer:
            "Our curriculum is designed to complement Namibia's educational standards and can be implemented either as a standalone subject or integrated within existing subjects like mathematics and science.",
        },
        {
          question: "What ongoing support do you provide?",
          answer:
            "We provide continuous technical support, regular curriculum updates, and professional development opportunities for teachers throughout the partnership.",
        },
        {
          question: "How do you measure program success?",
          answer:
            "We provide comprehensive analytics and assessment tools to track student progress, engagement, and skill development, with regular reports for administrators and teachers.",
        },
      ],
    };
  },
  methods: {
    toggleItem(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.faq-section {
  background-color: #e5efff;
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
  color: #022d5e;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #4a5568;
  max-width: 48rem;
  margin: 0 auto;
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 60rem;
  margin: 0 auto 3rem;
}

.faq-item {
  overflow: hidden;
}

.faq-question {
  padding: 1.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  color: #022d5e;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fbfafb;
  border-left: 5px solid #fd8804;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #bbd4f5;
}

.faq-icon {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fcbe03;
}

.faq-answer {
  padding: 1rem 1.5rem 1.5rem;
  color: #4a5568;
  line-height: 1.6;
  background: #fbfafb;
  border-radius: 0 0 0.5rem 0.5rem;
}

.faq-cta {
  text-align: center;
  margin-top: 4rem;
}

.faq-cta p {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #4a5568;
}

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
  background-color: #022d5e;
  color: #fbfafb;
  border: 1px solid #022d5e;
  box-shadow: 0 4px 8px rgba(2, 45, 94, 0.2);
}

.faq-cta .btn-primary:hover {
  background-color: #fd8804;
  border-color: #fd8804;
  color: #fbfafb;
  box-shadow: 0 6px 12px rgba(253, 136, 4, 0.3);
}

.faq-cta .btn-primary .material-symbols-outlined {
  font-size: 1.4rem;
}

/* Transition */
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
  padding: 0 1.5rem;
}
</style>