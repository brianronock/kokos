<template>
  <section class="demo-video">
    <div class="container">
      <h2>KOKOS Demo Video</h2>
      <p>
        This demo video explores our AI GetCoding and AI Essentials activities.
      </p>

      <!-- VIDEO BLOCK -->
      <div class="video-outer">
        <div class="video-preview">
          <!-- Thumbnail -->
          <img
            v-if="!loadVideo || videoEnded"
            class="video-thumbnail"
            src="/images/logo11.svg"
            alt="KokoS.ai Demo Video Thumbnail"
            @click="playVideo"
          />
          <div
            v-if="!loadVideo || videoEnded"
            class="play-button-wrapper"
            @click="playVideo"
          >
            <div class="play-button">
              <svg viewBox="0 0 100 100" width="100" height="100" fill="white">
                <polygon points="35,25 75,50 35,75" />
              </svg>
            </div>
          </div>

          <!-- Iframe -->
          <div v-if="loadVideo && !videoEnded" class="video-responsive">
            <iframe
              ref="iframe"
              :src="videoSrc"
              title="KokoS.ai Demo Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              @load="trackVideoEnd"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <p style="margin-top: 2rem">
        Want a face-to-face meeting? Leave your number and we'll contact you to
        discuss how to implement KOKOS in your school.
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
      loadVideo: false,
      videoEnded: false,
      videoSrc: "",
      email: "",
      phone: "",
      submitting: false,
      success: false,
      error: false,
    };
  },
  methods: {
    // playVideo() {
    //   this.loadVideo = true;
    //   this.videoEnded = false;
    //   this.videoSrc =
    //     "https://www.youtube.com/embed/_H1iKeC3M9E?rel=0&modestbranding=1&autoplay=1&enablejsapi=1";
    // },
    playVideo() {
      this.loadVideo = true;
      this.videoEnded = false;
      this.videoSrc =
        "https://www.youtube.com/embed/_H1iKeC3M9E?rel=0&modestbranding=1&autoplay=1";
    },
    trackVideoEnd() {
      const iframe = this.$refs.iframe;
      if (!iframe) return;

      const player = new window.YT.Player(iframe, {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              this.videoEnded = true;
              this.loadVideo = false;
              this.videoSrc = "";
            }
          },
        },
      });
    },
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
  mounted() {
    if (!window.YT || !window.YT.Player) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  },
};
</script>

<style scoped>
h2 {
  color: var(--blue2);
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: start;
  margin-top: 2rem;
}

.demo-video {
  background-color: #f6f8fa;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  color: #fbfafb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url("/images/bg2-mobile3.jpg") center / cover no-repeat;
  background-attachment: fixed;
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

/* .video-outer {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
} */

/* .video-outer {
  width: 100%;
  margin: 0 auto;
} */

.video-outer {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.video-preview {
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-preview:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.video-thumbnail {
  width: 100%;
  object-fit: cover;
  filter: blur(2px) brightness(0.7);
  transition: filter 0.4s ease;
  border-radius: 0;
}

.video-preview:hover .video-thumbnail {
  filter: blur(0.5px) brightness(0.9);
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10003;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.video-preview:hover .play-button {
  transform: translate(-50%, -50%) scale(1.15);
  opacity: 0.85;
  color: var(--orange2);
  background: #ffffff00;
  box-shadow: 0 10px 30px rgba(253, 176, 22, 0.707);
}

.play-button-wrapper {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10004;
  cursor: pointer;
}

.video-responsive {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  width: 100%;
  overflow: hidden;
  z-index: 10003;
}

.video-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
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
