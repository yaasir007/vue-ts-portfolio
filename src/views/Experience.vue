<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const expItems = document.querySelectorAll(".exp-item");
  const expDesps = document.querySelectorAll(".exp-description");
  
  for (let i = 0; i < expItems.length; i++) {
    for (let j = 1; j < expDesps.length; j++) {
      expItems[i].addEventListener("click", (e) => {
        e.preventDefault();
        expDesps[i].classList.toggle("open");
      });
    }
  }
})
</script>

<template>
  <section class="experience">
    <div class="experience-container">
      <div class="experience-wrapper">
        <div class="experience-title">Experiences</div>
        <div class="exp_main">
          <!-- Xefi Mauritius -->
          <div class="exp-item">
            <div class="exp-title__con">
              <div class="exp-details">
                <span class="exp__companyName">Xefi Mauritius</span>
                <span class="exp__title">Ingénieur Développeur</span>
              </div>
              <div class="exp__duration">
                June 2023 - <span class="present">Present</span>
              </div>
            </div>
            <div class="exp-description">
              <ul>
                <li class="exp-description__title">Responsibilities:</li>
                <li>Handles both front and back of a web application</li>
                <li>Maintain actual features</li>
                <li>Creation of new features</li>
                <li>Rails, Ruby, VueJs, Nuxt and Docker</li>
              </ul>
            </div>
          </div>
          <!-- Le Wagon Mauritius -->
          <div class="exp-item">
            <div class="exp-title__con">
              <div class="exp-details">
                <span class="exp__companyName">Le Wagon Mauritius</span>
                <span class="exp__title">Lecturer/Freelancer</span>
              </div>
              <div class="exp__duration">
                April 2022 - <span class="present">Present</span>
              </div>
            </div>
            <div class="exp-description">
              <ul>
                <li class="exp-description__title">Responsibilities:</li>
                <li>
                  Teaching programming using Ruby and core programming concepts.
                </li>
                <li>
                  Mentoring and advising students on academic and career goals.
                </li>
                <li>
                  Committed to continuous improvement and innovation in teaching
                  and learning.
                </li>
              </ul>
            </div>
          </div>
          <!-- Dragon Electronics -->
          <div class="exp-item">
            <div class="exp-title__con">
              <div class="exp-details">
                <span class="exp__companyName">Dragon Electronics</span>
                <span class="exp__title">Junior Full-Stack Developer</span>
              </div>
              <div class="exp__duration">May 2022 - July 2022</div>
            </div>
            <div class="exp-description">
              <ul>
                <li class="exp-description__title">Responsibilities:</li>
                <li>
                  Developed and maintained ecommerce website features using
                  technologies such as PHP, jQuery and API.
                </li>
                <li>
                  Improved website performance, stability, and scalability.
                </li>
                <li>Optimized website speed and page load times.</li>
                <li>Troubleshoot and resolve website issues and bugs.</li>
                <li>
                  Designed on Figma, coded in PHP and implemented custom quizzes
                  and competitions before deadlines that has increased web
                  traffic by 40%.
                </li>
                <li>
                  Upgraded many parts of the database to remove duplicate data
                  from bulking the storage.
                </li>
                <li>
                  Improved the payment system to allow efficient flow of the
                  user experience.
                </li>
                <li>
                  Enhanced a generator for admin reports to speed up the overall
                  process by 15%.
                </li>
              </ul>
            </div>
          </div>
          <!-- BDO Solutions S -->
          <div class="exp-item">
            <div class="exp-title__con">
              <div class="exp-details">
                <span class="exp__companyName">BDO Solutions</span>
                <span class="exp__title">Senior IT Analyst</span>
              </div>
              <div class="exp__duration">Jan 2020 - May 2022</div>
            </div>
            <div class="exp-description">
              <ul>
                <li class="exp-description__title">Responsibilities:</li>
                <li>
                  Resolved user problems without dispatching technical support
                  staff when possible.
                </li>
                <li>
                  Guided, advised and informed Analysts as to appropriate
                  procedures.
                </li>
                <li>Mentored new personnel on use of the system.</li>
                <li>
                  Performed frequent quality check of tickets and provided
                  feedbacks.
                </li>
                <li>
                  Constantly updating the knowledge base with new solutions to
                  allow newbies to learn. • Volunteered to be part on new
                  projects to upskill and be a valuable part of the team.
                </li>
              </ul>
            </div>
          </div>
          <!-- BDO Solutions J -->
          <div class="exp-item">
            <div class="exp-title__con">
              <div class="exp-details">
                <span class="exp__companyName">BDO Solutions</span>
                <span class="exp__title">Junior IT Analyst</span>
              </div>
              <div class="exp__duration">July 2019 - Dec 2019</div>
            </div>
            <div class="exp-description">
              <ul>
                <li class="exp-description__title">Responsibilities:</li>
                <li>
                  Provided support and management of incidents and service
                  requests according to established IT Service Management (ITSM)
                  processes and procedures.
                </li>
                <li>
                  Ensured accurate recording of client and incidents details and
                  troubleshooting progress.
                </li>
                <li>Resolved incidents and service requests.</li>
                <li>
                  Escalated incidents and service requests to higher support
                  levels or specialist support teams in accordance with
                  established ITSM processes and SLAs.
                </li>
                <li>
                  Identified potential issues and act on these in accordance
                  with the established ITSM processes.
                </li>
                <li>
                  Maintained a high degree of customer service for all support
                  queries, take ownership of user problems and be proactive when
                  dealing with user issue.
                </li>
              </ul>
            </div>
          </div>
          <!-- Accenture Data-->
          <div class="exp-item">
            <div class="exp-title__con">
              <div class="exp-details">
                <span class="exp__companyName">Accenture</span>
                <span class="exp__title">Data Management Associate</span>
              </div>
              <div class="exp__duration">April 2017 - Jun 2018</div>
            </div>
            <div class="exp-description">
              <ul>
                <li class="exp-description__title">Responsibilities:</li>
                <li>Transferred data into database systems using keyboards.</li>
                <li>
                  Typed in data provided directly from customers input scanned
                  forms.
                </li>
                <li>Verified data by comparing it to source documents.</li>
                <li>
                  Updated existing data and making sure that accuracy is met.
                </li>
                <li>
                  Retrieved data from the database or electronic files as
                  requested.
                </li>
                <li>Performed regular backups to ensure data preservation.</li>
                <li>
                  Sorted and organised paperwork after entering data to ensure
                  it is not lost.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-block: 3rem;
}

.experience-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: clamp(1rem, 10vw, 2.5rem);
  z-index: 999;
  opacity: 0;
  animation: fadeIn 0.5s 0.2s ease-in forwards;
  color: #EF5962;
}

.experience-title::after {
  content: "";
  border: 1px solid #EF5962;
  width: 40%;
  transition: all .3s linear;
}

.experience-title:hover::after {
  width: 90%;
}

.exp_main {
  width: 90%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  color: white;
}

.exp-item {
  padding: 1rem;
  width: 60%;
  border: 1px solid slateblue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 9999;
}

.exp-item:hover {
  background-color: slateblue;
  transform: scale(105%);
}

.exp-title__con {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.exp__companyName {
  font-size: 1.2rem;
}

.exp__duration {
  font-size: 1.2rem;
}

.present {
  color: #EF5962;
}

.exp-details {
  display: flex;
  flex-direction: column;
}

.exp-description {
  display: none;
}

.open {
  display: block;
}

.exp-description ul {
  display: flex;
  flex-direction: column;
  gap: .6rem;
}

.exp-description__title {
  font-weight: 700;
  font-size: 1.2rem;
  color: #EF5962;
}

.exp-description ul li:not(.exp-description__title) {
  padding-left: 1rem;
}

.exp-description ul li {
  list-style: none;
}

@media screen and (max-width: 550px) {
  .exp__duration {
    display: none;
  }
}

</style>
