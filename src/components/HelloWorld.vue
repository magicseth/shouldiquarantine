<template>
  <div class="hello">
    <h1>Should you self-quarantine?</h1>
    <template v-for="(question,index) in questions">
      <question v-if="index == currentquestion" :question="question" :key="index" />
    </template>


    <button @click="currentquestion++">Next</button>
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
  data() {
    return {
      currentquestion: 0,
      questions: [
        {
          question: "what is your zipcode",
          type: "text"
        },
        {
          id:"symptoms",
          question: "Are you expressing any symptoms?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
          // Yes > symptoms-detail
        },
        {
          id:"symptoms-detail",
          question: "Did you newly develop any of these symptoms?",
          type: "multiple",
          answers: [
            "Fever",
            "Persistent Coughing",
            "Difficulty Breathing (when not active)",
            "Persistent Chest Pain",
            "Blueish Lips or Face",
            "Confusion or Inability to Awaken"
          ],
          selected: []
          // Breathing | Pain | Blue | Confusion > Emergency
          // Fever | Cough > Quarantine
        },
        {
          id:"travel",
          question: "Have you traveled internationally within the last 2 weeks?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
          // Yes > travel-detail
        },
        {
          id:"travel-detail",
          question: "To which countries?",
          type: "multiple",
          answers: ["China", "Europe", "Iran", "South Korea"],
          selected: []
          // Any > Quarantine
        },
        {
          id:"contact",
          question: "Have you been in close contact with someone medically diagnosed with COVID-19?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
          // Yes > Quarantine
        },
        {
          id:"doctor",
          question: "Have you received personal recommendations from a doctor regarding COVID-19?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
          // Yes > Doctor's Orders
        },
        {
          id:"age",
          question: "Are you more than 40 years old?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
          // Yes > age-detail
        },
        {
          id:"age-detail",
          question: "What is your age range?",
          type: "one",
          answers: ["40-49", "50-59", "60-69", "70-79", "80+"],
          selected: []
          // Bayes
        },
        {
          id:"existing",
          question: "Do you have any existing conditions?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
          // Yes > existing-detail
        },
        {
          id:"existing-detail",
          question: "Which of these conditions do you have?",
          type: "multiple",
          answers: [
            "Cancer",
            "Hypertension",
            "Chronic respiratory disease",
            "Diabetes",
            "Cardiovacular disease"
          ],
          selected: []
          // Bayes
        },
        {
          id:"smoke",
          question: "Do you smoke?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
          // Bayes
        },
        {
          id:"germophobe",
          question: "Has someone been coughing or sneezing near you?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
          // Any > no change
        },
      ]
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
