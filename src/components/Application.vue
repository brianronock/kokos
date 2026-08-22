<template>
  <section id="apply" class="application-section">
    <div class="container">
      <div class="section-header">
        <h2>Apply Now</h2>
        <p>
          Join us in empowering Africa's learners with AI and coding education
        </p>
      </div>

      <transition name="fade">
        <div v-if="toast.show" :class="['toast', toast.type]">
          {{ toast.message }}
        </div>
      </transition>

      <div class="application-content" ref="formTop">
        <form
          class="application-form"
          @submit.prevent="handleSubmit"
          v-if="!success"
        >
          <!-- Name -->
          <div class="form-group">
            <label for="name">Name <span class="required">*</span></label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="form.name"
              required
            />
          </div>

          <!-- Parent/Guardian Name -->
          <div class="form-group">
            <label for="parentName"
              >Parent/Guardian Name <span class="required">*</span></label
            >
            <input
              type="text"
              id="parentName"
              class="form-control"
              v-model="form.parentName"
              required
            />
          </div>

          <!-- Phone Number -->
          <div class="form-group">
            <label for="phone"
              >Phone Number <span class="required">*</span></label
            >
            <input
              type="tel"
              id="phone"
              class="form-control"
              v-model="form.phone"
              required
            />
          </div>

          <!-- Email Address -->
          <div class="form-group">
            <label for="email"
              >Email Address <span class="required">*</span></label
            >
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="form.email"
              required
            />
          </div>

          <!-- Country -->
          <div class="form-group">
            <label for="country">Country</label>
            <select id="country" class="form-control" v-model="form.country">
              <option value="">Select a country</option>
              <option value="Namibia">Namibia</option>
              <option value="South Africa">South Africa</option>
              <option value="Zambia">Zambia</option>
              <option value="Botswana">Botswana</option>
              <option value="Zimbabwe">Zimbabwe</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <!-- Other Country (conditional) -->
          <div v-if="form.country === 'Other'" class="form-group">
            <label for="otherCountry">Please specify country</label>
            <input
              type="text"
              id="otherCountry"
              class="form-control"
              v-model="form.otherCountry"
            />
          </div>

          <!-- City/Town -->
          <div class="form-group">
            <label for="city">City/Town</label>
            <input
              type="text"
              id="city"
              class="form-control"
              v-model="form.city"
            />
          </div>

          <!-- Learner's Grade -->
          <div class="form-group">
            <label for="grade">Learner's Grade</label>
            <select id="grade" class="form-control" v-model="form.grade">
              <option value="">Select grade</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
            </select>
          </div>

          <!-- Programs Interested -->
          <div class="form-group">
            <label
              >Which program(s) are you interested in?
              <span class="required">*</span></label
            >
            <div class="checkbox-group">
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="prog1"
                  value="School Partnership Program"
                  v-model="form.programs"
                />
                <label for="prog1">School Partnership Program</label>
              </div>
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="prog2"
                  value="Robotics"
                  v-model="form.programs"
                />
                <label for="prog2">Robotics</label>
              </div>
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="prog3"
                  value="Coding for Beginners"
                  v-model="form.programs"
                />
                <label for="prog3">Coding for Beginners</label>
              </div>
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="prog4"
                  value="Scratch Programming"
                  v-model="form.programs"
                />
                <label for="prog4">Scratch Programming</label>
              </div>
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="prog5"
                  value="Python Programming"
                  v-model="form.programs"
                />
                <label for="prog5">Python Programming</label>
              </div>
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="prog6"
                  value="Artificial Intelligence (AI)"
                  v-model="form.programs"
                />
                <label for="prog6">Artificial Intelligence (AI)</label>
              </div>
            </div>
            <p v-if="!form.programs.length" class="error-text">
              Please select at least one program
            </p>
          </div>

          <!-- Readiness to Pay -->
          <div class="form-group">
            <label
              >Are you ready to start at $5 per learner per month?
              <span class="required">*</span></label
            >
            <div class="radio-group">
              <div class="radio-item">
                <input
                  type="radio"
                  id="ready1"
                  value="Yes, I want to register now"
                  v-model="form.readiness"
                  required
                />
                <label for="ready1">Yes, I want to register now</label>
              </div>
              <div class="radio-item">
                <input
                  type="radio"
                  id="ready2"
                  value="Yes, but I need more information"
                  v-model="form.readiness"
                  required
                />
                <label for="ready2">Yes, but I need more information</label>
              </div>
              <div class="radio-item">
                <input
                  type="radio"
                  id="ready3"
                  value="Maybe later"
                  v-model="form.readiness"
                  required
                />
                <label for="ready3">Maybe later</label>
              </div>
              <div class="radio-item">
                <input
                  type="radio"
                  id="ready4"
                  value="I want to speak with someone first"
                  v-model="form.readiness"
                  required
                />
                <label for="ready4">I want to speak with someone first</label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isSubmitting || !form.programs.length"
          >
            {{ isSubmitting ? "Submitting..." : "Submit Application" }}
          </button>
        </form>

        <!-- Success Message -->
        <div v-if="success" class="success-container">
          <div class="success-icon">✓</div>
          <h3>Application Submitted Successfully!</h3>
          <p>
            Thank you for your interest in our programs. We'll be in touch soon
            with more information.
          </p>
          <button @click="resetForm" class="btn btn-primary">
            Submit Another Application
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Application",
  data() {
    return {
      form: {
        name: "",
        parentName: "",
        phone: "",
        email: "",
        country: "",
        otherCountry: "",
        city: "",
        grade: "",
        programs: [],
        readiness: "",
      },
      isSubmitting: false,
      success: false,
      toast: {
        show: false,
        message: "",
        type: "", // "success" or "error"
      },
    };
  },
  methods: {
    async handleSubmit() {
      // Validate programs
      if (!this.form.programs.length) {
        this.showToast("Please select at least one program", "error");
        return;
      }

      this.isSubmitting = true;
      this.toast.show = false;

      try {
        // Prepare form data with programs as a string
        const formData = {
          ...this.form,
          programs: this.form.programs.join(", "),
        };

        const response = await fetch("https://formspree.io/f/xrenbvap", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          this.success = true;
          this.showToast(
            "Your application was submitted successfully!",
            "success",
          );
          this.scrollToTop();
        } else {
          this.showToast("Something went wrong. Please try again.", "error");
        }
      } catch (e) {
        this.showToast("Network error. Please try again later.", "error");
      } finally {
        this.isSubmitting = false;
      }
    },
    showToast(message, type) {
      this.toast = { show: true, message, type };
      setTimeout(() => {
        this.toast.show = false;
      }, 4000);
    },
    scrollToTop() {
      this.$nextTick(() => {
        const el = this.$refs.formTop;
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
    resetForm() {
      this.form = {
        name: "",
        parentName: "",
        phone: "",
        email: "",
        country: "",
        otherCountry: "",
        city: "",
        grade: "",
        programs: [],
        readiness: "",
      };
      this.success = false;
      this.scrollToTop();
    },
  },
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

.application-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #e5efff 0%, #fbfafb 100%);
  min-height: 100vh;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #022d5e;
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #4a5568;
}

.application-content {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(2, 45, 94, 0.1);
}

.application-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #022d5e;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.required {
  color: #fd8804;
}

.form-control {
  padding: 0.75rem;
  border: 2px solid #bbd4f5;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #fd8804;
  box-shadow: 0 0 0 3px rgba(253, 136, 4, 0.1);
}

.checkbox-group,
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.checkbox-item,
.radio-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.checkbox-item input[type="checkbox"],
.radio-item input[type="radio"] {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  accent-color: #fd8804;
}

.checkbox-item label,
.radio-item label {
  margin: 0;
  cursor: pointer;
  font-weight: 500;
  color: #4a5568;
}

.error-text {
  color: #dc2626;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.toast {
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-weight: 600;
  animation: slideIn 0.3s ease-out;
}

.toast.success {
  background-color: #d1fae5;
  color: #065f46;
}

.toast.error {
  background-color: #fee2e2;
  color: #7f1d1d;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.success-container {
  text-align: center;
  padding: 2rem;
}

.success-icon {
  font-size: 3rem;
  color: #059669;
  margin-bottom: 1rem;
}

.success-container h3 {
  color: #022d5e;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.success-container p {
  color: #4a5568;
  margin-bottom: 1.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .application-section {
    padding: 2rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .application-content {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  .checkbox-group,
  .radio-group {
    gap: 0.5rem;
  }
}
</style>
