<template>
  <section id="team" class="team-section">
    <div class="container">
      <div class="section-header">
        <h2>Meet Our Team</h2>
        <p>
          Local expertise and international collaboration driving educational
          innovation in Africa.
        </p>
      </div>

      <div class="team-grid">
        <div class="team-member">
          <img src="/images/alvan2.png" alt="Alvan" class="member-photo" />
          <h3>Alvan</h3>
          <p class="member-role">Local Team Lead <br> Cybersecurity Expert</p>
          <p class="member-bio">
            As our Namibia-based team leader, Alvan coordinates on-the-ground
            operations and partnerships. With a strong background in
            cybersecurity, he ensures our systems are secure and that local
            schools can confidently integrate digital learning. His leadership
            bridges vision with local execution.
          </p>
        </div>

        <div class="team-member">
          <img src="/images/brian.png" alt="Brian" class="member-photo" />
          <h3>Brian</h3>
          <p class="member-role">Co-Team Lead <br> Technical Strategist</p>
          <p class="member-bio">
            Brian co-leads our project from abroad, guiding the technical
            architecture and software development of our platform. As a
            full-stack engineer and AI education advocate, he works closely with
            the local team to build scalable, accessible tools that empower
            learners across Africa with future-ready skills.
          </p>
        </div>

        <div class="team-member">
          <img src="/images/theresa2.png" alt="Theresa" class="member-photo" />
          <h3>Theresa</h3>
          <p class="member-role">Coordination & Marketing Lead</p>
          <p class="member-bio">
            Theresa brings structure and heart to our mission. She leads
            outreach and communication efforts while keeping operations running
            smoothly behind the scenes.
          </p>
        </div>

        <div class="team-member">
          <img src="/images/shalom2.png" alt="Shalom" class="member-photo" />
          <h3>Shalom</h3>
          <p class="member-role">AI & Coding Enthusiast</p>
          <p class="member-bio">
            Shalom brings a unique blend of technical curiosity and creative
            energy to the team. With a growing passion for AI, coding, and
            digital education, she supports our mission to make advanced
            technology accessible and exciting for young learners across the
            continent.
          </p>
        </div>

        <div class="team-member">
          <img src="/images/nehemiah.png" alt="Nehemiah" class="member-photo" />
          <h3>Nehemiah</h3>
          <p class="member-role">Financial Coordinator</p>
          <p class="member-bio">
            Nehemiah ensures our initiative remains financially sustainable and
            accountable. With a keen eye for detail and a strategic mindset, he
            manages budgets, streamlines funding processes, and supports
            long-term growth planning.
          </p>
        </div>

        <div class="team-member">
          <img src="/images/moses.png" alt="Moses" class="member-photo" />
          <h3>Moses</h3>
          <p class="member-role">Data Analyst</p>
          <p class="member-bio">
            Moses transforms raw data into meaningful insights that guide our
            strategy and impact. His analytical skills help us measure progress
            and make informed decisions.
          </p>
        </div>

        <div class="team-member">
          <img src="/images/asahel.png" alt="Asahel" class="member-photo" />
          <h3>Asahel</h3>
          <p class="member-role">Technology Integration Specialist</p>
          <p class="member-bio">
            Asahel bridges the gap between tech and teaching. He ensures that
            our tools work seamlessly in real classrooms, empowering educators
            and learners alike.
          </p>
        </div>

        <div class="team-member">
          <img
            src="/images/prof-rhoda3.png"
            alt="Prof. Rhoda"
            class="member-photo"
          />
          <h3>Prof. Rhoda</h3>
          <p class="member-role">Advisor <br> Educational Innovator</p>
          <p class="member-bio">
            A professor, researcher, and trailblazer in education, Prof. Rhoda
            now supports our team as a strategic advisor. Her expertise in
            curriculum design and lifelong work empowering African learners
            continue to shape our mission of bringing AI and coding to the
            classroom with purpose and impact.
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
  background-color: #022d5e;
  padding: 5rem 0;
}

.team-section {
  position: relative;
  color: #fbfafb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url("/images/bg2-mobile2.jpg") center/cover no-repeat;
  background-attachment: fixed;
  padding: 4rem 0;
  overflow: hidden;
}

.team-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(1, 30, 64, 0.7),
    rgba(2, 47, 95, 0.9)
  );
  z-index: 0;
}

.team-section > * {
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #fbfafb;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #7f8da5;
  max-width: 48rem;
  margin: 0 auto;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.team-member {
  background-color: #e8eff8e2; /* Pure white for cards, contrasts Off-white section background */
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

@media (max-width: 768px) {
  .team-section {
    background-image: url("/images/bg2.jpg") center/contain no-repeat;
  }
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
}
</style>
