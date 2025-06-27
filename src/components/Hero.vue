<template>
  <section id="home" class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text-col">
          <h1 class="hero-title">
            Empowering Namibia's Learners with
            <span class="text-accent">AI & Coding</span>
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
        </div>
        <div class="hero-video-col">
          <div class="video-wrapper">
            <video controls width="100%">
              <source src="/videos/kokos_india-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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

.hero-section {
  position: relative;
  color: #fbfafb; /* Off-white for general text on dark background */
  min-height: 100vh;
  display: flex;
  align-items: center;
  /* Updated background image query for a more abstract/futuristic tech vibe */
  background: linear-gradient(
      to right,
      rgba(2, 45, 94, 0.75), /* Slightly more opaque Primary Dark Blue for better text contrast */
      rgba(2, 45, 94, 0.75)
    ),
    url("[https://source.unsplash.com/random/1600x900/?futuristic,data,ai,education,abstract](https://source.unsplash.com/random/1600x900/?futuristic,data,ai,education,abstract)")
      center/cover no-repeat;
  background-attachment: fixed; /* Parallax scroll effect */
  padding: 4rem 0; /* Add vertical padding for content */
}

/* hero-overlay is removed as its function is now integrated into hero-section background */

.container {
  max-width: 1200px; /* Ensure content is within a readable width */
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-content {
  position: relative;
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack columns on mobile */
  align-items: center; /* Center content vertically in the column */
  gap: 3rem; /* Space between text and video columns */
  text-align: center; /* Center text on mobile */
  width: 100%;
  z-index: 1; /* Ensure content is above the background */
}

.hero-text-col {
  flex: 1; /* Allows text column to grow */
  max-width: 600px; /* Limit text width for readability */
}

.hero-video-col {
  flex: 1; /* Allows video column to grow */
  max-width: 800px; /* Limit video width */
  width: 100%; /* Ensure it takes full width on smaller screens */
}

.hero-title {
  font-size: 2.75rem; /* Slightly larger base font size */
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #fbfafb; /* Off-white for the main title text */
}

.text-accent {
  color: #fcbe03; /* Accent Yellow for "AI & Coding" */
}

.hero-text {
  font-size: 1.15rem; /* Slightly smaller for better readability on lighter backgrounds */
  margin-bottom: 2.5rem; /* More space before buttons */
  max-width: 550px; /* Adjust max width for text within new column layout */
  margin-left: auto;
  margin-right: auto;
  color: #bbd4f5; /* Mid-light Blue for hero description text */
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* More space between buttons */
  justify-content: center;
  margin-bottom: 2rem; /* Space below buttons before video (on mobile) */
}

.btn {
  display: inline-block;
  padding: 0.85rem 2rem; /* Slightly larger buttons */
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none; /* Remove underline from links */
  font-size: 1rem; /* Consistent button font size */
}

.btn-primary {
  background-color: #fd8804; /* Secondary Orange */
  color: #022d5e; /* Primary Dark Blue text for contrast */
  box-shadow: 0 4px 10px rgba(253, 136, 4, 0.3); /* Orange-tinted shadow */
}

.btn-primary:hover {
  background-color: #fcbe03; /* Accent Yellow on hover */
  transform: translateY(-3px); /* More pronounced lift */
  box-shadow: 0 8px 20px rgba(252, 190, 3, 0.4); /* Stronger yellow-tinted shadow on hover */
}

.btn-outline {
  border: 2px solid #fcbe03; /* Accent Yellow border */
  color: #fcbe03; /* Accent Yellow text */
  background-color: transparent;
}

.btn-outline:hover {
  background-color: #fcbe03; /* Accent Yellow fill on hover */
  color: #022d5e; /* Primary Dark Blue text on hover */
  transform: translateY(-3px); /* More pronounced lift */
  box-shadow: 0 6px 15px rgba(252, 190, 3, 0.35); /* Yellow-tinted shadow */
}

.video-wrapper {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7); /* Even stronger shadow for video */
  max-width: 100%; /* Ensure it's responsive */
}

.video-wrapper video {
  display: block;
}

/* Media Queries for Responsive Layout */
@media (min-width: 768px) {
  .hero-title {
    font-size: 3.5rem; /* Larger title on tablets */
  }

  .hero-buttons {
    flex-direction: row; /* Buttons side-by-side on tablets */
  }
}

@media (min-width: 1024px) {
  .hero-content {
    flex-direction: row; /* Two columns on large screens */
    text-align: left; /* Left-align text in the column */
    align-items: center; /* Vertically center content */
    justify-content: space-between; /* Space out columns */
    padding: 0 1rem; /* Add horizontal padding for the container */
  }

  .hero-text-col {
    padding-right: 2rem; /* Add space between text and video */
  }

  .hero-title {
    font-size: 4rem; /* Even larger title on desktop */
  }

  .hero-text {
    font-size: 1.25rem; /* Larger text on desktop */
    margin-left: 0; /* Remove auto margins for left alignment */
    margin-right: 0;
  }
}
</style>