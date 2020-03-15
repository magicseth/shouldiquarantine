<template>
  <div class="hello">
    <h1>NOT LIVE YET --- Should you self-quarantine? --- NOT YET WORKING!!</h1>
    <template v-for="(question,index) in questions">
      <question v-if="index == currentquestion" :question="question" :key="index" />
    </template>

    {{questions[1].selected}}

    <button @click="currentquestion++">Next</button>
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
          question: "Are you expressing any of these symptons?",
          type: "multiple",
          answers: [
            "Difficulty Breathing (when active)",
            "Difficulty Breathing (when inactive)",
            "Difficulty Breathing (when active)",
            "Sneezing",
            "Fever",
            "Persistent Chest Pain",
            "Coughing",
            "Blueish Lips or Face",
            "Confusion, Low Arousal"
          ],
          selected: []
        },
        {
          question: "Have you traveled internationally recently",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
        },
        {
          question: "To which Countries",
          type: "multiple",
          answers: ["China", "Europe", "Iran", "South Korea"],
          selected: []
        },
        {
          question: "Have you been tested for COVID-19",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
        },
        {
          question: "What were the results?",
          type: "one",
          answers: ["Positive", "Negative"],
          selected: []
        },
        {
          question:
            "Have you been in contact with someone positively diagnosed with COVID-19",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
        },

        {
          question: "What age",
          type: "one",
          answers: ["40-49", "50-59", "60-69", "70-79", "80-89", "90+"],
          selected: []
        },

        {
          question: "Has a doctor recommended that you self-quarantine?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
        },
        {
          question: "Do you have any of these conditions",
          type: "multiple",
          answers: [
            "Smoker",
            "Cancer",
            "Hypertension",
            "Chrnoic Respiratory Disease",
            "Diabetes",
            "Cardiovacular Disease"
          ],
          selected: []
        },

        {
          question: "Were you assigned male at birth?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
        },
        {
          question: "Are you confident in your health insurance",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
        },

        {
          question: "Have you traveled through a major airport hub recently?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
        },
        {
          question: "Has someone been coughing or sneezing near you?",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
        },

        {
          question: "Are you confident in your health insurance",
          type: "one",
          answers: ["YES", "NO"],
          selected: []
        }
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
