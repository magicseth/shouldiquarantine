<template>
  <div class="question">
    <!-- {{question}} -->
    <div class="question">{{ question.question }}</div>
    <div v-if="question.type=='text'">
      <input v-model="textanswer" :placeholder="question.placeholder" />
    </div>
    <template v-if="question.answers">
      <div class="answer"
      v-for="(next_q, answer, index) in question.answers"
      :key="index"
      :class="{selected:question.selected.includes(answer), oneclick:(question.type=='radio')}"
      @click="toggle(next_q, answer)"
      >{{$t(answer)}}</div>
      <div class="nav">
      <div class="gray" 
      @click="back(question.back)"
      :class="{hidden:(this.$parent.currentquestion =='symptoms')}"
      >&lt; Back</div>
      <div 
      :class="{hidden:(question.type == 'radio')}"
      @click="submit()"
      >Next &gt;</div>
      </div>
</template>

<template v-else>
  
</template>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: Object
  },
  methods: {
    toggle(next_q, answer) {
      if (this.question.type == "multiple") {
        var position = this.question.selected.indexOf(answer);
        if (position >= 0) {
          this.question.selected.splice(position, 1);
        } else {
          this.question.selected.push(answer);
        }
        // if (this.question.selected.includes(answer)){
        //   this.question.selected = this.question.selected.filter(v => v !== answer); 
        // } else {
        //   this.question.selected = this.question.selected.push(answer)
        // }
      } else if (this.question.type == "radio") {
        this.question.selected = [answer];
        this.submit()
      }
    },
    back(question) {
      this.$parent.currentquestion = question;
    },
    submit() {
      var answers = this.question.selected;
      if (window.firebase.auth().currentUser) {
        window.firebase
          .firestore()
          .collection("userdata")
          .doc(window.firebase.auth().currentUser.uid)
          .collection("allanswers")
          .add({
            answers: answers,
            question: this.$parent.currentquestion,
            created: window.firebase.firestore.Timestamp.fromDate(new Date())
          });
      }

      var urgencies = [ // LEAST URGENT
        "NO RECCOMENDATION YET",
        "rec_distance",
        "rec_isolate",
        "rec_quarantine",
        "rec_emergency",
      ]; // MOST URGENT
      var current_urgency = 0;

      if (answers.length == 0) {
        // If they didn't select anything, don't leave the page
      } else {
        answers.forEach(selection => {
          // Cycle through all the options they selected
          if (this.question.answers[selection].startsWith("rec_")){
            // If they've selected a choice that leads to a recommendation
            // Find the most urgent by storing the maximum
            current_urgency = Math.max(current_urgency, urgencies.indexOf(this.question.answers[selection]));
          } else {
            // Otherwise, head to next question
            this.$parent.currentquestion = this.question.answers[answers[0]];
          }
        })
      }
      if (current_urgency){
        // Some selection has led to a recommendation
        var most_urgent_selection = urgencies[current_urgency]
        this.$parent.recommendation = most_urgent_selection;
        this.$parent.selectedpage = "results";

        if (window.firebase.auth().currentUser) {
          window.firebase
            .firestore()
            .collection("userdata")
            .doc(window.firebase.auth().currentUser.uid)
            .collection("allanswers")
            .add({
              answers: [this.$parent.recommendation],
              question: "recommendation",
              created: window.firebase.firestore.Timestamp.fromDate(new Date())
            });
        }
      }
    }
  },
  data() {
    return {
      textanswer: "",
      place: "12345",
      selected: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.question {
  margin-top: 30px;
  font-size: 34px;
  color: #404040;
  margin-bottom: 25px;
}

@media only screen and (min-width: 800px) {
  .answer:hover {
    background-color: rgb(149, 179, 255);
  }
}
.answer.selected {
  background-color: #ddd;
}

.answer {
  border: 2px solid #396EF5;
  border-radius: 10px;
  padding: 20px;
  font-size: 20px;
  color: #396EF5;
  margin-bottom: 15px;
}

.nav {
  display: flex;
  justify-content: space-between;
}

.nav>* {
  padding-top: 20px;
  font-size: 20px;
  padding-bottom: 20px;
  text-align: center;
  display: inline-block;
  width: 47%;
  color: white;
  background-color: #396EF5;
  border-radius: 10px;
}

div.hidden {
  display: none;
}

div.gray {
  background-color: #C9C9C9;
}

.oneclick {
  text-align: center;
  color: white;
  background-color: #396EF5;
}
</style>
