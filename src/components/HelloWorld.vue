<template>
  <div>
    <div id="title" @click="reload()" :class="{big:(currentquestion == 'zip')}">ShouldIQuarantine.com</div>
    <div v-if="selectedpage== 'questions'">
      <template v-for="(question, qid, index) in questions">
        <question v-if="qid == currentquestion" :question="question" :key="index" />
      </template>

      <button @click="nextQuestion()">{{nextlabel}}</button>
      <div class="footer">
        <p><span class="underline" @click="selectedpage='disclaimer'">Disclaimer</span> - Made by Jona and Seth Raphael - <span @click="selectedpage='results'">March 15, 2020</span></p> 
      </div>
    </div>
    <div v-if="selectedpage== 'disclaimer'">
      <h3>Disclaimer</h3><br>
      Any personal recommendation from a doctor regarding COVID-19 supersedes this site.
      <br><br>This service was not made by a medical professional.
      It constitutes substantial research and interviews with doctors, 
      but in its attempt to simplify will miss important distinctions.
      <br><br>Any advice provided here that you choose to follow is solely 
      at your own risk.
      If you have ideas and credentials to improve this web service, 
      please reach out to shouldiquarantine@gmail.com
      <hr>
      <button @click="selectedpage='questions'">BACK</button>
    </div>
    <div v-if="selectedpage== 'emergency'">
      <h1>You should proceed to an emergency room immediately.</h1>
      <h2 class="left">The symptoms you described constitute a medical emergency.
      <br><br>Have someone call the hospital, and describe your symptoms over the phone. </h2>
      <br>
      <button @click="reload()">BACK</button>
    </div>
    <div v-if="selectedpage== 'results'">
      <h2>Based on your responses, <br>you should practice:</h2>
      <br><br><div class="result" @click="selectedpage='quarantine'">Self-Quarantine</div>
      <br><div class="result" @click="selectedpage='isolate'">Self-Protective Isolation</div>
      <br><div class="result" @click="selectedpage='distance'">Social Distancing</div>
      <br>Click a box for more details.
      <br><span class="underline" @click="selectedpage='more'">Learn More</span>
    </div>
    <div v-if="selectedpage== 'quarantine'">
      <h2>What is Self-Quarantine?</h2>
      <ul class="left">
        <li>Self-Quarantine is the physical separation of anyone reasonably believed 
          to have been exposed to a communicable disease, to prevent its spread.</li>
      </ul>
      <h2>What should I do?</h2>
      <ul class="left">
        <li>- Contact your doctor by phone</li>
        <li>- Stay home except to get medical care</li>
        <li>- Ask others to bring you food and supplies</li>
        <li>- Reduce contact with other people and pets in your home</li>
        <li>- Cover your coughs and sneezes</li>
        <li>- Monitor your symptoms for worsening (e.g. difficulty breathing)</li>
        <li>- Prepare to be in quarantine for 2 to 4 weeks</li>
        <li>- Find someone who will check in on you and help you if you get sick</li>
        <li>- Details: <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">Center for Disease Control</a></li>
      </ul>
      <h2>Why is this important?</h2>
      <ul class="left">
        <li>Self-Quarantine helps you prevent the spread of disease 
          to people who are at greater risk of serious illness than yourself, 
          as well as reducing the strain on your local healthcare system.</li>
          Some people will be quarantined who do not have COVID-19, 
          but this still reduces the spread of disease.
        <li>You start spreading COVID-19 a week before you show symptoms, 
          so it is important to self-quarantine even if you don't appear ill.</li>
      </ul>
      <br>
      <br><br><span class="underline" @click="selectedpage='more'">Learn More</span>
      <br>
      <button @click="selectedpage='results'">BACK</button>
    </div>
    <div v-if="selectedpage== 'isolate'">
      <h2>What is Self-Protective Isolation?</h2>
      <ul class="left">
        <li>Self-Protective Isolation is physical separation of any person 
          at high risk of severe illness or death if infected by COVID-19.</li>
      </ul>
      <h2>What should I do?</h2>
      <ul class="left">
        <li>- Stay home as much as possible</li>
        <li>- Avoid crowds if you need to go out</li>
        <li>- Stock up on food, supplies, and medication</li>
        <li>- Reduce contact with other people and pets in your home</li>
        <li>- Frequently clean and disinfect your hands and living area</li>
        <li>- Monitor yourself for any symptoms (e.g. difficulty breathing)</li>
        <li>- Prepare to be in isolation for 2 to 4 weeks</li>
        <li>- Find someone who will check in on you and help you if you get sick</li>
        <li>- Details: <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html">Center for Disease Control</a></li>
      </ul>
      <h2>Why is this important?</h2>
      <ul class="left">
        <li>Self-Protective Isolation helps you avoid contracting COVID-19 from others, 
          because you have higher-than-average risk factors.</li>
        <li>People start spreading COVID-19 a week before they show symptoms, 
          so it is important to self-isolate even if your community doesn't appear ill.</li>
      </ul>
      <br>
      <br><span class="underline" @click="selectedpage='more'">Learn More</span>
      <br>
      <button @click="selectedpage='results'">BACK</button>
    </div>
    <div v-if="selectedpage== 'distance'">
      <h2>What is Social Distancing?</h2>
      <ul class="left">
        <li>Social Distancing means avoiding crowded places where close contact 
          with others can occur.</li>
      </ul>
      <h2>What should I do?</h2>
      <ul class="left">
        <li>- Avoid malls, theaters, stadiums, bars, parties, etc.</li>
        <li>- Avoid traveling</li>
        <li>- Reduce the number of people you see at any one time</li> 
        <!-- combine with the cancel gatherings comment? -->
        <li>- Reduce the total number of people you see</li>
        <li>- Avoid touching your face</li>
        <li>- Cancel any gatherings of people you are in charge of</li>
        <li>- Prepare to social distance for 2 to 4 weeks</li>
        <li>- Details: <a href="https://www.theatlantic.com/family/archive/2020/03/coronavirus-what-does-social-distancing-mean/607927/">Center for Public Health Initiatives</a></li>
      </ul>
      <h2>Why is this important?</h2>
      <ul class="left">
        <li>Social Distancing helps slow down the spread of COVID-19, which is 
          critical because of the rate at which it is overwhelming our healthcare system.</li>
        <li>People start spreading COVID-19 a week before they show symptoms, so it 
          is important to practice social distancing even if your community doesn't appear ill.</li>
      </ul>
      <br>
      <br><span class="underline" @click="selectedpage='more'">Learn More</span>
      <br>
      <button @click="selectedpage='results'">BACK</button>
    </div>
    <div v-if="selectedpage== 'more'">
      <h2>Terms</h2>
      <ul class="left">
        <li>- The CDC uses the word Quarantine only for individuals 
          who are NOT yet symptomatic. In this application, we allow Quarantine 
          to cover those who are expressing symptoms already.</li>
        <li>- The CDC uses the word Isolation to refer to individuals who are 
          infected and infectious. In this application, we use the word to refer 
          to individuals practicing an extreme form of Social Distancing.</li>
        <li>- The CDC defines the term Close Contact as being within approximately 
          6 feet of a COVID-19 case for a prolonged period of time, or having direct 
          contact with infectious secretions of a COVID-19 case (e.g. being coughed on).</li>
      </ul>
      <h2>Methodology</h2>
      <ul class="left">
        <li>- There are 4 symptoms that result in a recommendation of Emergency Room visit: difficutly breathing, chest pain, blue coloration, confusion.</li>
        <li>- There are 2 symptoms that result in a recommendation of Self-Quarantine: fever, persistent cough.</li>
        <li>- There are 4 zones of international travel that result in a recommendation of Self-Quarantine: China, Europe, Iran, South Korea.</li>
        <li>- Being in close contact with someone diagnosed with COVID-19 results in a recommendation of Self-Quarantine.</li>
        <li>- All other selections will result in either a recommendation of Self-Protective Isolation of Social Distancing.</li>
        <li>- All other questions (age and comorbidity) use Bayesian statistics to estimate the likelihood of mortality relative to the average confirmed case.</li>
        <li>- Zipcode data is collected for sharing symptom location data with healthcare professionals, but is not currently used in the calculations.</li>
        <li>- </li>
        <li>- </li>
        <li>- </li>
      </ul>
      <h2>Resources</h2>
      <ul class="left">
        <li>- </li>
      </ul>
      <br>
      <button @click="selectedpage='results'">BACK</button>
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
      location.reload()
    },
    nextQuestion() {
      var sels = this.questions[this.currentquestion].selected;
      var logic = this.questions[this.currentquestion].logic;
      if (window.firebase.auth().currentUser) {
        window.firebase
          .firestore()
          .collection("userdata")
          .doc(window.firebase.auth().currentUser.uid)
          .collection("answers")
          .doc(this.currentquestion)
          .set({answers:sels});
      }

      if (sels.length == 0) {
        // If they didn't select anything
        this.currentquestion = logic["-1"]; // Perform some default action
      } else {
        this.currentquestion = logic[sels[0]]; // TODO This could be more intelligent than choosing the lowest number...
      }
      if (!this.questions[this.currentquestion]) {
        alert("You should be directed to info about " + this.currentquestion); // TODO Direct all XXX below to informational pages
      }
    }
  },
  data() {
    return {
      selectedpage: "questions",
      nextlabel: "Next",
      currentquestion: "zip",
      questions: {
        zip: {
          question: "Enter you zipcode to start",
          type: "text",
          placeholder: "Ex. 12345",
          selected: [],
          logic: {
            "-1": "symptoms"
          }
        },
        symptoms: {
          question: "Are you expressing any symptoms?",
          type: "radio",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "symptoms",
            "0": "symptoms-detail",
            "1": "travel"
          }
        },
        "symptoms-detail": {
          question: "Have you newly developed any of these symptoms?",
          type: "multiple",
          answers: [
            "Difficulty Breathing (when not active)",
            "Persistent Chest Pain",
            "Blueish Lips or Face",
            "Confusion or Inability to Awaken",
            "Fever",
            "Persistent Coughing",
            "Sore Throat",
            "None of These",
          ],
          selected: [],
          logic: {
            "-1": "travel",
            "0": "EMERGENCY", // XXX EMERGENCY
            "1": "EMERGENCY", // XXX EMERGENCY
            "2": "EMERGENCY", // XXX EMERGENCY
            "3": "EMERGENCY", // XXX EMERGENCY
            "4": "QUARANTINE", // XXX QUARANTINE
            "5": "QUARANTINE", // XXX QUARANTINE
            "6": "travel",
            "7": "travel",
          }
        },
        travel: {
          question:
            "Have you traveled internationally within the last 2 weeks?",
          type: "radio",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "travel",
            "0": "travel-detail",
            "1": "contact"
          }
        },
        "travel-detail": {
          question: "To which countries?",
          type: "multiple",
          answers: ["China", "Europe", "Iran", "South Korea", "None"],
          selected: [],
          logic: {
            "-1": "contact",
            "0": "QUARANTINE", // XXX QUARANTINE
            "1": "QUARANTINE", // XXX QUARANTINE
            "2": "QUARANTINE", // XXX QUARANTINE
            "3": "QUARANTINE", // XXX QUARANTINE
            "4": "contact",
          }
        },
        contact: {
          question:
            "Have you been in close contact with someone medically diagnosed with COVID-19?",
          type: "radio",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "contact",
            "0": "QUARANTINE", // XXX QUARANTINE
            "1": "age"
          }
        },
        age: {
          question: "Are you more than 40 years old?",
          type: "radio",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "existing",
            "0": "age-detail",
            "1": "existing"
          }
          // XXX Bayes
        },
        "age-detail": {
          question: "What is your age range?",
          type: "radio",
          answers: ["40-49", "50-59", "60-69", "70-79", "80+"],
          selected: [],
          logic: {
            "-1": "age",
            "0": "existing",
            "1": "existing",
            "2": "existing",
            "3": "existing",
            "4": "existing"
          }
          // XXX Bayes
        },
        existing: {
          question: "Do you have any existing medical conditions?",
          type: "radio",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "germophobe",
            "0": "existing-detail",
            "1": "germophobe",
          }
        },
        "existing-detail": {
          question: "Which of these medical conditions do you currently have?",
          type: "multiple",
          answers: [
            "Cancer",
            "High blood pressure",
            "Lung disease (like COPD)",
            "Diabetes",
            "Heart disease",
            "None of These",
          ],
          selected: [],
          logic: {
            "-1": "CALCULATE",
            "0": "CALCULATE",
            "1": "CALCULATE",
            "2": "CALCULATE",
            "3": "CALCULATE",
            "4": "CALCULATE",
            "5": "CALCULATE",
          }
          // XXX Bayes
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
  padding: 0;
}
li {
  display: block;
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
#title{
  font-size: medium;
  font-weight: bold;
  color: rgb(68, 140, 255);
  margin: -40px 0 0;
}
#title.big {
  font-size: xx-large;
  margin: 40px 0 0;
}
.footer {
  display: block;
  position:static;
  bottom:0;
  width: 100%;
}
.underline {
  text-decoration: underline;
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
</style>
