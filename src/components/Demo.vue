<template>
  <section id="demo" class="request-demo-section">
    <div class="container">
      <div class="section-header" ref="formTop">
        <h2>Request a Demo</h2>
        <p>
          Let us show you how KOKOS can transform your classroom with AI and
          coding education.
        </p>
      </div>

      <form
        v-if="!success"
        class="request-demo-form"
        @submit.prevent="handleSubmit"
      >
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="form.name"
            placeholder="Your name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="form.email"
            placeholder="Your email address"
            required
          />
        </div>

        <div class="form-group">
          <label for="school-name">School Name</label>
          <input
            type="text"
            id="school-name"
            class="form-control"
            v-model="form.school_name"
            placeholder="Your school"
            required
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          :disabled="isSubmitting || success"
        >
          {{ isSubmitting ? "Sending..." : "Submit Request" }}
        </button>
      </form>

      <div v-if="success" class="snackbar success">
        ✅ Thank you! We'll be in touch soon.
      </div>

      <div v-if="error" class="snackbar error">
        ❌ Something went wrong. Please try again.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      form: {
        name: "",
        email: "",
        school_name: "",
      },
      success: false,
      error: false,
      isSubmitting: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      this.success = false;
      this.error = false;

      try {
        const response = await fetch("https://formspree.io/f/xgvyrgbo", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });

        if (response.ok) {
          this.success = true;
          this.form = { name: "", email: "", school_name: "" };
          localStorage.setItem("demoAccess", "granted");
          this.$emit("navigate", "demo-video");
        } else {
          this.error = true;
        }
      } catch (e) {
        this.error = true;
      } finally {
        this.isSubmitting = false;
      }
    },
    scrollToTop() {
      this.$nextTick(() => {
        const el = this.$refs.formTop;
        if (el) {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    },
  },
};
</script>

<style scoped>
.request-demo-section {
  background-color: #bbd4f5;
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 1.3rem auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
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

.request-demo-form {
  max-width: 36rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #022d5e;
}

.form-control {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #fbfafb;
  border: 1px solid #bbd4f5;
  color: #022d5e;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control::placeholder {
  color: #8c9bbd;
}

.form-control:focus {
  outline: none;
  border-color: #fd8804;
  box-shadow: 0 0 0 3px rgba(253, 136, 4, 0.2);
}

.btn-primary {
  background-color: #fd8804;
  color: #022d5e;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.btn-primary:hover {
  background-color: #fcbe03;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.snackbar {
  margin-top: 2rem;
  text-align: center;
  font-weight: bold;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
}

.snackbar.success {
  background-color: #c6f6d5;
  color: #22543d;
  border: 1px solid #38a169;
}

.snackbar.error {
  background-color: #fed7d7;
  color: #822727;
  border: 1px solid #e53e3e;
}
</style>
