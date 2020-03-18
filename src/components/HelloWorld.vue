<template>
  <div class="temp">
    <div class="bigonly"><img class="picc" alt="Photo by kelly-sikkema on Unsplash" src="../assets/tissues.jpg" /></div>
    <div class="container">
      <div class="title" @click="reload()">Should I Quarantine.com</div>
      <div class="subtitle">2-minute quiz to help protect you from COVID-19</div>
      <div v-if="selectedpage== 'questions'">
        <template v-for="(question, qid, index) in questions">
          <question v-if="qid == currentquestion" :question="question" :key="index" />                 
        </template>  
      </div>
      <div v-if="selectedpage== 'disclaimer'">
        <div class="question">Disclaimer</div>
        <div class="rec_detail">
          <ul>
            <li>You should always follow recommendations from your personal doctor instead of this website.</li>
            <li>Some locations are under local mandated quarantine. Please check your local government news to see if you are directly affected.</li>
            <li>This service was not made by medical professionals. However it is the product of substantial research and interviews with multiple doctors, specifically for the COVID-19 pandemic in the USA, but in its attempt to simplify it may miss
              important factors.</li>
            <li>Please do not interpret the information provided here as advice. Our intent is simply to pass on the recommendations of CDC, and provide a framework for thinking about these topics. You can find details about the resources used in
              the methodology link below.</li>
            <li>If you have ideas and credentials to improve this web service, please reach out to <a class="mailto" target="_blank" href="mailto:shouldiquarantine@gmail.com">shouldiquarantine@gmail.com</a>.</li>
            <li>We don't collect any personally identifiable information, though we do collect your responses. That data will never be sold, but shared with the medical community. We use cookies to keep track of your answers.</li>
            <li>Check out our <span class="underline" @click="selectedpage='more'">methodology</span></li>
          </ul>
        </div>
        <div class="nav">
          <div class="gray" @click="reload()">Start Again</div>
          <a class="hiddenlink" href="https://www.facebook.com/sharer/sharer.php?u=www.shouldiquarantine.com" target="_blank">Share</a>
        </div>
      </div>
      <div v-if="selectedpage== 'results'">
        <div v-if="recommendation== 'rec_emergency'">
          <div class="question">You should proceed to an emergency room immediately, or call 911.</div>
          <div class="rec_detail">
            <strong>The symptoms you described constitute a medical emergency.
            <br />
            <br />You should also call your hospital, and describe your symptoms over the phone.
            </strong>
          </div>
          <div class="rec_detail">
            <span class="underline" @click="selectedpage='more'"><strong>Learn why you got this recommendation</strong></span>
          </div>
        </div>
        <div v-if="recommendation== 'rec_quarantine'">
          <div class="question">Based on your responses, you should practice:</div>
          <div class="recommend red" @click="selectedpage='compare'">Self-Quarantine <img class="icon" src="../assets/info_r.png" /></div>
          <div class="rec_detail">
            <strong>What should I do?</strong>
            <br />
            <ul>
              <li>Contact your doctor by phone if you are showing symptoms</li>
              <li>Stay home</li>
              <li>Monitor your health for worsening symptoms (e.g. fever and difficulty breathing)</li>
              <li>If you need to get medical care, avoid all public transportation</li>
              <li>Prepare to be in quarantine for 2 to 4 weeks</li>
              <li>Ask someone to bring you food and supplies</li>
              <li>If you live with others, limit yourself to a "sick room" and use a separate bathroom if possible</li>
              <li>Cover your coughs and sneezes or wear a facemask</li>
              <li>Avoid contact with pets, as they can also spread the disease</li>
              <li>Contact someone who will check in on you and help you if you get sick</li>
              <li>Details:
                <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">Centers for Disease Control</a>
              </li>
            </ul>
          </div>
          <div class="rec_detail">
            <strong>Why is this important?</strong>
            <br />
            <br />Self-Quarantine helps you prevent the spread of disease to people who are at greater risk of serious illness than yourself, as well as reducing the strain on your local healthcare system.
            <br />Some people will be quarantined who do not have COVID-19, but this still helps to reduce the spread of the disease.
            <br />You start spreading COVID-19 a week before you show symptoms, so it is important to self-quarantine even if you don't appear ill.
          </div>
          <div class="rec_detail">
            <span class="underline" @click="selectedpage='more'"><strong>Learn why you got this recommendation</strong></span>
          </div>
        </div>
  
        <div v-if="recommendation== 'rec_isolate'">
          <div class="question">Based on your responses, you should practice:</div>
          <div class="recommend orange" @click="selectedpage='compare'">Self-Protective Isolation <img class="icon" src="../assets/info_o.png" /></div>
          <div class="rec_detail">
            <strong>What should I do?</strong>
            <br />
            <ul>
              <li>Stay home as much as possible</li>
              <li>Avoid crowds if you need to go out</li>
              <li>Prepare to be in isolation for 2 to 4 weeks</li>
              <li>Stock up on food, supplies, and medication</li>
              <li>Minimize close contact with other people and pets in your home</li>
              <li>Frequently clean and disinfect your hands and living area</li>
              <li>Regularly monitor yourself for any symptoms (e.g. fever and difficulty breathing)</li>
              <li>Contact someone who will check in on you and help you if you get sick</li>
              <li>Details:
                <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html">Centers for Disease Control</a>
              </li>
            </ul>
          </div>
          <div class="rec_detail">
            <strong>Why is this important?</strong>
            <br />
            <br />Self-Protective Isolation helps you avoid contracting COVID-19 from others because you have higher-than-average risk factors.
            <br />People start spreading COVID-19 a week before they show symptoms, so it is important to self-isolate even if no one in your community appears ill.
            <br />Even if you didn't trigger this recommendation, you may want to voluntarily begin self-protective isolation if you live with someone who is particularly vulnerable.
          </div>
          <div class="rec_detail">
            <span class="underline" @click="selectedpage='more'"><strong>Learn why you got this recommendation</strong></span>
          </div>
        </div>
  
        <div v-if="recommendation== 'rec_distance'">
          <div class="question">Based on your responses, you should practice:</div>
          <div class="recommend yellow" @click="selectedpage='compare'">Social Distancing  <img class="icon" src="../assets/info_y.png" /></div>
          <div class="rec_detail">
            <strong>What should I do?</strong>
            <br />
            <ul>
              <li>Avoid malls, theaters, stadiums, bars, parties, etc.</li>
              <li>Avoid all unnecessary travel</li>
              <li>Avoid all groups of 10 or more people</li>
              <li>Reduce the total number of people you see</li>
              <li>Avoid touching your face</li>
              <li>Cancel any gatherings you have the influence to do so</li>
              <li>Prepare to practice social distancing for 2 to 4 weeks</li>
              <li>Details:
                <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/community-mitigation-strategy.pdf">Centers for Disease Control</a>
              </li>
            </ul>
          </div>
          <div class="rec_detail">
            <strong>Why is this important?</strong>
            <br />
            <br />Social Distancing helps slow down the spread of COVID-19, which is critical because of the rate at which it is overwhelming our healthcare system.
            <br />People start spreading COVID-19 a week before they show symptoms, so it is important to practice social distancing even if no one in your community appears ill.
          </div>
          <div class="rec_detail">
            <span class="underline" @click="selectedpage='more'"><strong>Learn why you got this recommendation</strong></span>
          </div>
        </div>
        <br />
        <div class="nav margbot">
          <div class="gray" @click="reload()">Start Again</div>
          <a class="hiddenlink" href="https://www.facebook.com/sharer/sharer.php?u=www.shouldiquarantine.com" target="_blank">Share</a>
        </div>
      </div>
      <div v-if="selectedpage== 'compare'">
        <div class="spacer"></div>
        <div class="recommend red">Self-Quarantine</div>
        <div class="rec_detail compact">
          <strong>High Severity</strong>
          <br />Self-Quarantine is the physical separation of anyone reasonably believed to have been exposed to COVID-19 in order to prevent its spread.
        </div>
        <div class="spacer"></div>
        <div class="recommend orange">Self-Protective Isolation</div>
        <div class="rec_detail compact">
          <strong>Medium Severity</strong>
          <br />Self-Protective Isolation is physical separation of any person at high risk of severe illness or death, to prevent them from being infected by COVID-19.
        </div>
        <div class="spacer"></div>
        <div class="recommend yellow">Social Distancing</div>
        <div class="rec_detail compact">
          <strong>Low Severity</strong>
          <br />Social Distancing means avoiding crowded places where close contact with others can occur.
        </div>
        <div class="spacer"></div>
        <div class="nav margbot">
          <div class="gray" @click="selectedpage='results'">Back</div>
          <a class="hiddenlink" href="https://www.facebook.com/sharer/sharer.php?u=www.shouldiquarantine.com" target="_blank">Share</a>
        </div>
      </div>
      <div v-if="selectedpage== 'more'">
        <div class="rec_detail">
          <strong>Terms</strong>
          <br />
          <ul>
            <li>The CDC uses the word
              <strong>QUARANTINE</strong> only for individuals who are NOT yet symptomatic. In this application, we allow quarantine to cover those who are exhibiting symptoms already.
            </li>
            <li>The CDC uses the word
              <strong>ISOLATION</strong> to refer to individuals who are infected and infectious. In this application, we use the word to refer to individuals practicing an extreme form of social distancing.
            </li>
            <li>The CDC defines the term
              <strong>CLOSE CONTACT</strong> as being within approximately 6 feet of a COVID-19 case for a prolonged period of time, or having direct contact with infectious secretions of a COVID-19 case (e.g. being coughed on).
            </li>
          </ul>
        </div>
        <div class="rec_detail">
          <strong>Methodology</strong>
          <br />
          <ul>
            <li>There are 4 symptoms that result in a recommendation of an emergency room visit: difficulty breathing, chest pain, blue coloration, confusion.</li>
            <li>There are 2 symptoms that result in a recommendation of
              <i>Self-Quarantine</i>: fever, persistent cough.
            </li>
            <li>There are 4 zones of international travel that result in a recommendation of
              <i>Self-Quarantine</i>: China, Europe, Iran, South Korea.
            </li>
            <li>Being in close contact with someone diagnosed with COVID-19 results in a recommendation of
              <i>Self-Quarantine</i>.
            </li>
            <li>All other selections will result in either a recommendation of
              <i>Self-Protective Isolation</i> or
              <i>Social Distancing</i>.
            </li>
            <li>All other questions (age and comorbidity) use
              <a target="_blank" href="https://towardsdatascience.com/probability-concepts-explained-bayesian-inference-for-parameter-estimation-90e8930e5348">Bayesian statistics</a> to estimate the likelihood of mortality relative to the average
              confirmed case.
            </li>
            <li>If a respondent's submission exceeds the average mortality for a confirmed case (3.4%), this application recommends
              <i>Self-Protective Isolation</i>
            </li>
            <li>All other respondents are recommended to practice
              <i>Social Distancing</i>.
            </li>
            <li>These statistics are collected from
              <a target="_blank" href="http://weekly.chinacdc.cn/en/article/id/e53946e2-c6c4-41e9-9a9b-fea8db1a8f51">Chinese Center for Disease Control and Prevention</a>
            </li>
            <li>There are correlations inside the CCDC's data (e.g. age and cardiovascular disease) that are not being accounted for in this model. That means the recommendations lean toward more stringent practices like isolation.</li>
            <li>There are complex interactions between comorbidities that are not accounted for in this model. Instead, the recommendation only uses the highest likelihood factor, and does not multiply multiple pieces of information.</li>
            <li>The single value mortality rates used are as follows:
              <ul>
                <li><strong>Age</strong></li>
                <li>0-10 >> 0.00%</li>
                <li>10-20 >> 0.27%</li>
                <li>20-30 >> 0.29%</li>
                <li>30-40 >> 0.35%</li>
                <li>40-50 >> 0.66%</li>
                <li>50-60 >> 1.93%</li>
                <li>60-70 >> 5.35%</li>
                <li>70-80 >> 11.82%</li>
                <li>80+ >> 21.93%</li>
                <li><strong>Disease</strong></li>
                <li>Cardiovascular >> 15.65%</li>
                <li>Diabetes >> 10.78%</li>
                <li>Respiratory >> 9.30%</li>
                <li>Hypertension >> 8.91%</li>
                <li>Cancer >> 8.33%</li>
              </ul>
            </li>
            <li>Zipcode data is collected for sharing symptom location data with healthcare professionals, but is not currently used in the calculations.</li>
          </ul>
        </div>
        <div class="rec_detail">
          <strong>Resources</strong>
          <br />
          <ul>
            <li><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/get-your-household-ready-for-COVID-19.html">CDC: Preparedness Plan</a>
            </li>
            <li><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">CDC: When You're Sick</a>
            </li>
            <li><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html">CDC: When You're High Risk</a>
            </li>
            <li><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/php/risk-assessment.html">CDC: Terminology</a>
            </li>
            <li><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/after-travel-precautions.html">CDC: Travel Recommendations</a>
            </li>
            <li><a target="_blank" href="https://www.theatlantic.com/family/archive/2020/03/coronavirus-what-does-social-distancing-mean/607927/">The Atlantic: Conversational Exploration of Social Distancing</a>
            </li>
            <li><a target="_blank" href="https://www.worldometers.info/coronavirus/">Worldometers:Frequently Updating COVID-19 Statistics</a>
            </li>
            <li><a target="_blank" href="https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca">Tomas Pueyo: Why You Must Act Now</a>
            </li>
            <li><a target="_blank" href="www.facebook.com/groups/670932227050506">Community Makers: Open Source COVID19 Medical Supplies</a>
            </li>
          </ul>
        </div>
        <div class="nav margbot">
          <div class="gray" @click="reload()">Start Again</div>
          <a class="hiddenlink" href="https://www.facebook.com/sharer/sharer.php?u=www.shouldiquarantine.com" target="_blank">Share</a>
        </div>
      </div>
    </div>
    <div class="white footer">
      <span class="underline" @click="selectedpage='disclaimer'">{{$t('disclaimer')}}</span>
      <span>Last Update: 2020-03-18</span>
      <span><a
    class="white"
    href="https://github.com/magicseth/shouldiquarantine"
    target="_blank"
    >Made by Raphaels</a></span>
    </div>
  </div>
</template>

<script>
import Question from "./Question.vue";
export default {
  name: "HelloWorld",
  components: {
    Question
  },
  methods: {
    reload() {
      location.reload();
    },
  },
  data() {
    return {
      selectedpage: "questions",
      nextlabel: "Next",
      currentquestion: "symptoms",
      recommendation: "",
      questions: {
        // zip: {
        //   question: "Your location impacts your risk",
        //   placeholder: "Enter zipcode",
        //   selected: [],
        //   logic: {
        //   "-1": "symptoms"
        //   }
        // },
        symptoms: {
          question: "Are you exhibiting any symptoms?",
          type: "radio",
          answers: {
            "Yes": "symptoms-detail",
            "No": "travel"
          },
          selected: [],
          back: "",
        },
        "symptoms-detail": {
          question: "Have you recently developed any of these symptoms?",
          type: "multiple",
          answers: {
            "symptoms.breathing": "rec_emergency",
            "Persistent Chest Pain": "rec_emergency",
            "Blueish Lips or Face": "rec_emergency",
            "Confusion or Inability to Awaken": "rec_emergency",
            "Fever (100ºF / 38ºC)": "rec_quarantine",
            "Persistent Dry Cough": "rec_quarantine",
            "Sore Throat": "travel",
            "None of These": "travel"
          },
          selected: [],
          back: "symptoms",
        },
        travel: {
          question: "Have you traveled internationally within the last 2 weeks?",
          type: "radio",
          answers: {
            "Yes": "travel-detail",
            "No": "contact"
          },
          selected: [],
          back: "symptoms",
        },
        "travel-detail": {
          question: "To which countries?",
          type: "multiple",
          answers: {
            "China": "rec_quarantine",
            "Europe": "rec_quarantine",
            "Iran": "rec_quarantine",
            "South Korea": "rec_quarantine",
            "None of These": "contact"
          },
          selected: [],
          back: "travel",
        },
        contact: {
          question: "Have you been in close contact with someone medically diagnosed with COVID-19?",
          type: "radio",
          answers: {
            "Yes": "rec_quarantine",
            "Not Sure": "age"
          },
          selected: [],
          back: "travel",
        },
        age: {
          question: "Are you more than 40 years old?",
          type: "radio",
          answers: {
            "Yes": "age-detail",
            "No": "existing"
          },
          selected: [],
          back: "contact",
        },
        "age-detail": {
          question: "What is your age range?",
          type: "radio",
          answers: {
            "40-49": "existing",
            "50-59": "existing",
            "60-69": "rec_isolate",
            "70-79": "rec_isolate",
            "80+": "rec_isolate"
          },
          selected: [],
          back: "age",
        },
        existing: {
          question: "Do you have any existing medical conditions?",
          type: "radio",
          answers: {
            "Yes": "existing-detail",
            "No": "caregiver"
          },
          selected: [],
          back: "age",
        },
        "existing-detail": {
          question: "Which of these medical conditions do you currently have?",
          type: "multiple",
          answers: {
            "Cancer": "rec_isolate",
            "High Blood Pressure": "rec_isolate",
            "Lung Disease (e.g. COPD)": "rec_isolate",
            "Diabetes": "rec_isolate",
            "Heart Disease": "rec_isolate",
            "Kidney Disease": "rec_isolate",
            "None of These": "caregiver"
          },
          selected: [],
          back: "existing",
        },
        caregiver: {
          question: "Are you a primary caregiver for someone who would answer yes to any of the previous questions?",
          type: "radio",
          answers: {
            "Yes": "rec_isolate",
            "No": "rec_distance"
          },
          selected: [],
          back: "existing",
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

h1 {
  font-size: xx-large;
  margin: 40px 0 0;
}

ul {
  padding-left: 30px;
}

li {
  padding-bottom: 5px;
}

a {
  color: #42b983;
}

button {
  background-color: rgb(68, 140, 255);
  border: 3px solid #444;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 0px;
  border-radius: 10px;
  width: 60%;
  font-size: xx-large;
}

.temp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 1;
  background-color: #444;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  height: 60px;
  font-size: 14px;
  font-weight: normal;
}

.footer span {
  margin: auto;
  padding: 10px;
}

.underline {
  text-decoration: underline;
}

.result.selected {
  background-color: rgb(30, 173, 95);
}

.result {
  background-color: #333;
  border: 3px solid #444;
  margin: auto;
  padding: 30px 0px;
  border-radius: 10px;
  width: 60%;
  color: #000;
  font-size: x-large;
  font-weight: bold;
}

.left {
  text-align: left;
  margin-left: 10%;
  margin-right: 10%;
}

.white {
  color: white;
}

.hidden {
  display: none;
}

.corner {
  position: absolute;
  top: 7px;
  right: 5%;
}

.title {
  font-style: italic;
  font-size: 25px;
  color: #396EF5;
  margin-bottom: 10px;
}

.subtitle {
  font-weight: normal;
  font-size: 14px;
  color: #2D2D2D;
  opacity: 0.5;
}

.bigonly {
  display: none;
  position: fixed;
  width: 100%;
  top: 0px;
  bottom: 60px;
}

.picc {
  object-fit: cover;
  object-position: 80% 90%;
  width: 50%;
  height: 100%;
}

.container {
  margin-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 360px;
  margin-bottom: 80px;
  box-sizing: border-box;
}

@media only screen and (min-width: 800px) {
  .bigonly {
    display: block;
  }
  .container {
    position: relative;
    right: -50%;
    width: 50%;
  }
}

.recommend {
  margin-top: -15px;
  height: 30px;
  margin-bottom: 10px;
  font-size: 24px;
  color: #396EF5;
}

.red {
  color: #E80000;
}

.orange {
  color: #F57A35;
}

.yellow {
  color: #EAC133;
}

.rec_detail {
  margin-top: 30px;
  font-size: 14px;
  font-weight: normal;
  color: #2D2D2D;
}

.hiddenlink {
  text-decoration: none;
  color: white;
}

.margbot {
  margin-bottom: 40px;
}

.icon {
  height: 20px;
  margin-bottom: -2px;
}

.spacer {
  padding: 25px;
}

.compact {
  margin-top: -5px;
}
</style>