<template>
  <section id="team" class="team-section">
    <div class="container">
      <div class="section-header">
        <h2>Meet Our Team</h2>
        <p>
          Local expertise and international collaboration driving educational
          innovation in Namibia.
        </p>
      </div>

      <div class="team-grid">
        <div class="team-member">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            alt="Prof. Rhoda Birech"
            class="member-photo"
          />
          <h3>Prof. Rhoda Birech</h3>
          <p class="member-role">Visionary Leader</p>
          <p class="member-bio">
            Driving AI education, with years of experience in academic
            innovation.
          </p>
        </div>

        <div class="team-member">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            alt="Brian"
            class="member-photo"
          />
          <h3>Brian</h3>
          <p class="member-role">Tech Specialist</p>
          <p class="member-bio">
            Ensuring our platform is robust, user-friendly, and secure.
          </p>
        </div>

        <div class="team-member">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            alt="Shalom"
            class="member-photo"
          />
          <h3>Shalom</h3>
          <p class="member-role">AI & Coding Enthusiast</p>
          <p class="member-bio">
            Bridging the gap between code and creativity with a passion for
            education.
          </p>
        </div>

        <div class="team-member">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            alt="Alvan"
            class="member-photo"
          />
          <h3>Alvan</h3>
          <p class="member-role">Cybersecurity Expert</p>
          <p class="member-bio">
            Safeguarding digital integrity with expertise in cybersecurity.
          </p>
        </div>

        <div class="team-member">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            alt="Nehemiah"
            class="member-photo"
          />
          <h3>Nehemiah</h3>
          <p class="member-role">Financial Coordinator</p>
          <p class="member-bio">
            Keeping our project financially sustainable and transparent.
          </p>
        </div>

        <div class="team-member">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            alt="Moses"
            class="member-photo"
          />
          <h3>Moses</h3>
          <p class="member-role">Data Analyst</p>
          <p class="member-bio">
            Turning data into insights that power our decision-making.
          </p>
        </div>

        <div class="team-member">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            alt="Asahel"
            class="member-photo"
          />
          <h3>Asahel</h3>
          <p class="member-role">Technology Integration Specialist</p>
          <p class="member-bio">
            Ensuring seamless integration of technology in classrooms.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Team",
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

.team-section {
  background-color:#022D5E; 
  padding: 5rem 0;
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
  color: #FBFAFB; 
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #4a5568; /* Readable Dark Grey */
  max-width: 48rem;
  margin: 0 auto;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.team-member {
  background-color: #ffffff; /* Pure white for cards, contrasts Off-white section background */
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08); /* Subtle shadow for definition */
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15); /* More prominent shadow on hover */
}

.member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.5rem;
  border: 4px solid #fd8804; /* Secondary Orange for the photo border */
}

.team-member h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #022d5e; /* Primary Dark Blue */
}

.member-role {
  color: #fd8804; /* Secondary Orange for the role text */
  font-weight: 600;
  margin-bottom: 1rem;
}

.member-bio {
  color: #4a5568; /* Readable Dark Grey */
  font-size: 0.875rem;
}

@media (min-width: 640px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Centers the 7th item in a 3-column grid by spanning the middle column */
  .team-member:nth-child(7) {
    grid-column: 2 / 3;
  }
}
</style>