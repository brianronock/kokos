<template>
  <section id="demo" class="request-demo-section">
    <div class="container">
      <div class="section-header">
        <h2>Request a Demo</h2>
        <p>
          Let us show you how KOKOS can transform your classroom with AI and
          coding education.
        </p>
      </div>

      <form class="request-demo-form" action="https://formspree.io/f/mkgbkjrq" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Your name"
            name="name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Your email address"
            name="email"
          />
        </div>

        <div class="form-group">
          <label for="school-name">School Name</label>
          <input
            type="text"
            id="school-name"
            class="form-control"
            placeholder="Your school"
            name="school_name"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit Request</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Demo",
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

.request-demo-section {
  background-color: #fbfafb; /* Off-white Neutral for section background */
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #022d5e; /* Primary Dark Blue for heading */
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #4a5568; /* Readable Dark Grey for description */
  max-width: 48rem;
  margin: 0 auto;
}

.request-demo-form {
  max-width: 36rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #ffffff; /* Pure white for the form background, subtly contrasting section */
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* Soft shadow for the form card */
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #022d5e; /* Primary Dark Blue for labels */
}

.form-control {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #fbfafb; /* Off-white Neutral for input fields */
  border: 1px solid #bbd4f5; /* Mid-light Blue for input border */
  color: #022d5e; /* Primary Dark Blue for input text */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for focus */
}

.form-control::placeholder {
  color: #8c9bbd; /* A lighter shade for placeholders, derived from Mid-light Blue or Readable Dark Grey */
}

.form-control:focus {
  outline: none;
  border-color: #fd8804; /* Secondary Orange on focus */
  box-shadow: 0 0 0 3px rgba(253, 136, 4, 0.2); /* Soft orange glow on focus */
}

.btn-primary {
  background-color: #fd8804; /* Secondary Orange for the primary button */
  color: #022d5e; /* Primary Dark Blue for button text, for strong contrast */
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700; /* Make button text bolder */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Shadow for button */
}

.btn-primary:hover {
  background-color: #fcbe03; /* Accent Yellow on hover for primary button */
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>