<template>
  <div boxCont bg-2 left h-500>
    <h1>Contact Us</h1>
    <p>Email: kokosnamibia@gmail.com</p>
    <p>Phone: +264 81 716 4769</p>
    <form p-5 ml-10 @submit.prevent="handleSubmit">
      <label mb-5 for="name">Name</label>
      <input mb-5 w-50 id="name" v-model="name" required />
      <label mb-5 for="email">Email</label>
      <input mb-5 w-50 id="email" v-model="email" type="email" required />
      <label mb-5 for="message">Message</label>
      <textarea h-150 w-80 id="message" v-model="message" required></textarea>
      <button type="submit">Send Message</button>
      <p v-if="status">{{ status }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      status: ""
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch("https://formspree.io/f/xldnejyv", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
          })
        });
        if (response.ok) {
          this.status = "Message sent successfully!";
          this.name = "";
          this.email = "";
          this.message = "";
        } else {
          this.status = "Something went wrong. Please try again.";
        }
      } catch (error) {
        this.status = "Error: " + error.message;
      }
    }
  }
};
</script>