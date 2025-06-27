<template>
  <section id="demo" class="request-demo-section">
    <div class="container">
      <div class="section-header">
        <h2>Request a Demo</h2>
        <p>Let us show you how KOKOS can transform your classroom with AI and coding education.</p>
      </div>

      <form class="request-demo-form">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" placeholder="Your name" />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" placeholder="Your email address" />
        </div>

        <div class="form-group">
          <label>School Name</label>
          <input type="text" class="form-control" placeholder="Your school" />
        </div>

        <button type="submit" class="btn btn-primary">Submit Request</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Demo'
}
</script>

<style scoped>
.request-demo-section {
  background-color: var(--blue2);
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--black);
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: var(--gray-600);
  max-width: 48rem;
  margin: 0 auto;
}

.request-demo-form {
  max-width: 36rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-control {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--white);
  border: 1px solid var(--gray-300);
  color: var(--black);
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary);
}

.btn-primary {
  background-color: var(--primary);
  color: var(--white);
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #ea580c;
}
</style>