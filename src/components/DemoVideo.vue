<template>
  <section class="demo-video">
    <div class="container">
      <h2>🎥 KOKOS Demo Video</h2>
      <p>This demo video explores our AI GetCoding and AI Essentials activities.</p>

      <div class="video-wrapper">
        <div style="padding: 56.25% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/1100922063?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="KokoS.ai Demo Video"
          ></iframe>
        </div>
      </div>

      <p style="margin-top: 2rem">
        Want a face-to-face meeting? Leave your number and we'll contact you to discuss how to implement KOKOS in your school.
      </p>
      <form @submit.prevent="handlePhoneSubmit" class="phone-form">
        <div class="form-group">
          <label for="email">📧 Email (same as demo request)</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="e.g. sarah@school.edu"
            required
          />
        </div>

        <div class="form-group">
          <label for="phone">📞 Phone Number</label>
          <input
            type="tel"
            id="phone"
            v-model="phone"
            class="form-control"
            placeholder="e.g. +254712345678"
            required
          />
        </div>

        <button type="submit" class="btn-submit" :disabled="submitting">
          {{ submitting ? "Sending..." : "Contact Me" }}
        </button>

        <p v-if="success" class="success-message">
          ✅ Thanks! We'll get in touch shortly.
        </p>
        <p v-if="error" class="error-message">
          ❌ Something went wrong. Please try again.
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      phone: "",
      submitting: false,
      success: false,
      error: false,
    };
  },
  methods: {
    async handlePhoneSubmit() {
      this.submitting = true;
      this.success = false;
      this.error = false;

      try {
        const response = await fetch("https://formspree.io/f/xgvyrgbo", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            phone: this.phone,
            source: "Demo Video Follow-up",
          }),
        });

        if (response.ok) {
          this.success = true;
          this.email = "";
          this.phone = "";
        } else {
          this.error = true;
        }
      } catch (err) {
        this.error = true;
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>

<style scoped>
.demo-video {
  background-color: #f6f8fa;
  padding: 4rem 2rem;
  text-align: center;
}

.demo-video {
  position: relative;
  color: #fbfafb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url("/images/bg2-mobile3.jpg") center / cover no-repeat;
  background-attachment: fixed;
  padding: 4rem 2rem;
  overflow: hidden;
}

.demo-video::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 7, 67, 0.95),
    rgba(29, 72, 121, 0.9)
  );
  z-index: 0;
}

.demo-video > * {
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .demo-video {
    background: url("/images/bg3.jpg") center/cover no-repeat;
  }
}

.video-wrapper {
  margin-top: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.phone-form {
  margin-top: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  text-align: left;
}

.form-control {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
}

.btn-submit {
  padding: 0.75rem;
  background-color: #fd8804;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #fcbe03;
}

.success-message,
.error-message {
  font-weight: 600;
  text-align: center;
}

.success-message {
  color: #38a169;
}

.error-message {
  color: #e53e3e;
}
</style>
