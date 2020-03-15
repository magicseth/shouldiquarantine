<template>
  <div class="hello">
    <h1>Should You Self-Quarantine?</h1>
    <template v-for="(question, qid, index) in questions">
      <question v-if="qid == currentquestion" :question="question" :key="index" />
    </template>


    <button @click="nextQuestion()">Next</button>
     --- NOT YET WORKING!!
  </div>
</template>

<script>
import Question from "./Question.vue";
export default {
  name: "HelloWorld",
  components: {
    Question
  },
  props: {
    msg: String
  },
  methods: {
    nextQuestion() {
      var sels = this.questions[this.currentquestion].selected
      var logic = this.questions[this.currentquestion].logic
      
      if (sels.length == 0){ // If they didn't select anything
        this.currentquestion = logic["-1"] // Perform some default action
      } else {
        if (this.questions[logic[sels[0]]]){ // If the option they chose directs to an existing page
          this.currentquestion = logic[sels[0]] // TODO This could be more intelligent than choosing the lowest number...
        } else {
          alert("You should be directed to info about "+logic[sels[0]]) // TODO Direct all XXX below to informational pages
        }
      } 
    }
  },
  data() {
    return {
      currentquestion: "zip",
      questions: {
        "zip": {
          question: "Enter you zipcode to start",
          type: "text",
          selected: [],
          logic: {
            "-1": "doctor"}
        },
        "doctor": {
          question: "Have you received personal recommendations from a doctor regarding COVID-19?",
          type: "one",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "doctor",
            "0": "DOCTOR", // XXX Doctor's Orders
            "1": "symptoms"
          }
        },
        "symptoms": {
          question: "Are you expressing any symptoms?",
          type: "one",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "symptoms",
            "0": "symptoms-detail",
            "1": "travel"
          }
        },
        "symptoms-detail": {
          question: "Did you newly develop any of these symptoms?",
          type: "multiple",
          answers: [
            "Difficulty Breathing (when not active)",
            "Persistent Chest Pain",
            "Blueish Lips or Face",
            "Confusion or Inability to Awaken",
            "Fever",
            "Persistent Coughing"
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
          }
        },
        "travel": {
          question: "Have you traveled internationally within the last 2 weeks?",
          type: "one",
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
          answers: ["China", "Europe", "Iran", "South Korea"],
          selected: [],
          logic: {
            "-1": "contact",
            "0": "QUARANTINE", // XXX QUARANTINE
            "1": "QUARANTINE", // XXX QUARANTINE
            "2": "QUARANTINE", // XXX QUARANTINE
            "3": "QUARANTINE", // XXX QUARANTINE
          }
        },
        "contact": {
          question: "Have you been in close contact with someone medically diagnosed with COVID-19?",
          type: "one",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "contact",
            "0": "QUARANTINE", // XXX QUARANTINE
            "1": "age",
          }
        },
        "age": {
          question: "Are you more than 40 years old?",
          type: "one",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "existing",
            "0": "age-detail",
            "1": "existing",
          }
          // XXX Bayes
        },
        "age-detail": {
          question: "What is your age range?",
          type: "one",
          answers: ["40-49", "50-59", "60-69", "70-79", "80+"],
          selected: [],
          logic: {
            "-1": "age",
            "0": "existing",
            "1": "existing",
            "2": "existing",
            "3": "existing",
            "4": "existing",
          }
          // XXX Bayes
        },
        "existing": {
          question: "Do you have any existing conditions?",
          type: "one",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "smoke",
            "0": "existing-detail",
            "1": "smoke",
          }
        },
        "existing-detail": {
          question: "Which of these conditions do you have?",
          type: "multiple",
          answers: [
            "Cancer",
            "Hypertension",
            "Chronic respiratory disease",
            "Diabetes",
            "Cardiovacular disease"
          ],
          selected: [],
          logic: {
            "-1": "smoke",
            "0": "smoke",
            "1": "smoke",
            "2": "smoke",
            "3": "smoke",
            "4": "smoke",
          }
          // XXX Bayes
        },
        "smoke": {
          question: "Do you smoke?",
          type: "one",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "germophobe",
            "0": "germophobe",
            "1": "germophobe",
          }
          // XXX Bayes
        },
        "germophobe": {
          question: "Has someone been coughing or sneezing near you?",
          type: "one",
          answers: ["YES", "NO"],
          selected: [],
          logic: {
            "-1": "CALCULATE", // XXX CALCULATE
            "0": "CALCULATE", // XXX CALCULATE
            "1": "CALCULATE", // XXX CALCULATE
          }
        },
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
