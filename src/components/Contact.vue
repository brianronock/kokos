<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2>Contact Us</h2>
        <p>Ready to transform education at your school? Get in touch with our team today.</p>
      </div>
      
      <div class="contact-content">
        <form class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control">
            </div>
          </div>
          
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control">
          </div>
          
          <div class="form-group">
            <label>School Name</label>
            <input type="text" class="form-control">
          </div>
          
          <div class="form-group">
            <label>Message</label>
            <textarea class="form-control" rows="5"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
        
        <div class="contact-info">
          <h3>Get In Touch</h3>
          
          <div class="info-item">
            <span class="material-symbols-outlined">location_on</span>
            <div>
              <h4>Our Location</h4>
              <p>Independence Avenue, Windhoek, Namibia</p>
            </div>
          </div>
          
          <div class="info-item">
            <span class="material-symbols-outlined">phone</span>
            <div>
              <h4>Phone Number</h4>
              <p>+264 61 123 4567</p>
            </div>
          </div>
          
          <div class="info-item">
            <span class="material-symbols-outlined">email</span>
            <div>
              <h4>Email Address</h4>
              <p>info@kokos.ai</p>
            </div>
          </div>
          
          <div class="social-links">
            <h4>Follow Us</h4>
            <div class="social-icons">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact-section {
  background-color: var(--black);
  padding: 5rem 0;
  color: var(--white);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: var(--gray-300);
  max-width: 48rem;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  font-weight: 500;
}

.form-control {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--gray-800);
  border: 1px solid var(--gray-700);
  color: var(--white);
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary);
}

.contact-info {
  background-color: var(--gray-900);
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-info h3 {
  font-size: 1.75rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-item span {
  color: var(--primary);
  font-size: 1.5rem;
}

.info-item h4 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.info-item p {
  color: var(--gray-400);
}

.social-links h4 {
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: var(--primary);
  color: var(--white);
}

@media (min-width: 768px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr 1fr;
  }
}
</style>