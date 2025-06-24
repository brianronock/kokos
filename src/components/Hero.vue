<template>
  <section id="home" class="hero-section">
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Empowering Namibia's Learners with
          <span class="text-orange">AI & Coding</span>
        </h1>
        <p class="hero-text">
          Transforming education through innovative AI and coding programs for
          Grades 1-8, preparing students for the digital future.
        </p>
        <div class="hero-buttons">
          <a @click.prevent="$emit('request-demo')" class="btn btn-primary"
            >Request a Demo</a
          >
          <a href="#contact" class="btn btn-outline">Contact Us Today</a>
        </div>
                <div class="video-wrapper">
          <video controls width="100%">
            <source src="/videos/kokos_india-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero-section {
  position: relative;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(17, 24, 39, 0.7)
    ),
    url("https://source.unsplash.com/random/1600x900/?education,technology,coding,classroom")
      center/cover no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  text-align: center;
  padding: 2rem 0;
  z-index: 1;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.text-orange {
  color: #f97316;
}

.hero-text {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #f97316;
  color: #fff;
}

.btn-primary:hover {
  background-color: #ea580c;
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid #f97316;
  color: #f97316;
  background-color: transparent;
}

.btn-outline:hover {
  background-color: #f97316;
  color: #fff;
}

.video-wrapper {
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .hero-buttons {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }
}
</style>
