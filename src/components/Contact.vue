<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2>Get In Touch</h2>
        <p>Ready to transform education at your school? Send us a message today.</p>
      </div>

      <div class="contact-content">
        <form class="contact-form" action="https://formspree.io/f/mvgrdkav" method="POST">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" class="form-control" name="firstName" />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" class="form-control" name="lastName" />
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" name="email" />
          </div>

          <div class="form-group">
            <label for="schoolName">School Name</label>
            <input type="text" id="schoolName" class="form-control" name="schoolName" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" class="form-control" rows="5" name="message"></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

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

.contact-section {
  background-color: #e5efff; /* Light Blue Background for the whole section */
  padding: 5rem 0;
  color: #022d5e; /* Default text color for the section */
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
  color: #022d5e; /* Primary Dark Blue */
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #4a5568; /* Readable Dark Grey */
  max-width: 48rem;
  margin: 0 auto;
}

.contact-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-form {
  background-color: #022d5e; /* Primary Dark Blue background for the form card */
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 45rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #fbfafb; /* Off-white for labels on dark background */
  font-size: 0.95rem;
}

.form-control {
  padding: 0.85rem 1rem;
  border-radius: 0.5rem;
  background-color: #e5efff; /* Light Blue for input background */
  border: 1px solid #bbd4f5; /* Mid-light blue border */
  color: #022d5e; /* Dark Blue text in inputs */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  font-size: 1rem;
}

.form-control::placeholder {
  color: rgba(2, 45, 94, 0.6); /* Slightly transparent Primary Dark Blue for placeholder */
}

.form-control:focus {
  outline: none;
  border-color: #fd8804; /* Secondary Orange on focus */
  box-shadow: 0 0 0 3px rgba(253, 136, 4, 0.2);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700; /* Made slightly bolder */
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease,
    transform 0.2s ease;
  cursor: pointer;
  border: none;
  font-size: 1.1rem;
  line-height: 1;

  background-color: #fd8804; /* Secondary Orange background */
  color: #fbfafb; /* Off-white text */
  box-shadow: 0 4px 8px rgba(253, 136, 4, 0.2);
}

.btn-primary:hover {
  background-color: #fcbe03; /* Accent Yellow on hover */
  color: #022d5e; /* Primary Dark Blue text on yellow hover */
  box-shadow: 0 6px 12px rgba(252, 190, 3, 0.3);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
}

@media (min-width: 768px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}
</style>