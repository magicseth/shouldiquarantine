<template>
  <div class="question">
    <!-- {{question}} -->
    <div class="question">{{ question.question }}</div>
    <div v-if="question.type=='text'">
      <input v-model="textanswer" 
        :placeholder="question.placeholder"/>
    </div>
    <template v-if="question.answers">
      <div class="answer"
        v-for="(next_q, answer, index) in question.answers"
        :key="index"
        :class="{selected:question.selected.includes(answer)}"
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
    <template v-else></template>
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
      if (this.question.type=="multiple"){
        var position = this.question.selected.indexOf(answer);
        if (position >= 0) {
          this.question.selected.splice(position,1);
        } else {
          this.question.selected.push(answer);
        }
        // if (this.question.selected.includes(answer)){
        //   this.question.selected = this.question.selected.filter(v => v !== answer); 
        // } else {
        //   this.question.selected = this.question.selected.push(answer)
        // }
      } else if (this.question.type=="radio"){
        alert(next_q)
        this.question.selected = [answer];
        this.$parent.currentquestion = next_q;
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
      if (answers.length == 0) {
        // If they didn't select anything, don't leave the page
      } else {
        this.$parent.currentquestion = this.question.answers[answers[0]]; // XXX This needs to select the lowest index answer, currently does the first clicked!
      }

      if (this.$parent.currentquestion.startsWith("rec_")) {
        // The next step is a RECOMMENDATION instead of a question
        this.$parent.recommendation = this.$parent.currentquestion;
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

        if (this.$parent.recommendation == "rec_emergency") {
          this.$parent.selectedpage = "emergency";
        } else {
          this.$parent.selectedpage = "results";
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
<style scoped>
h2 {
  margin: 20px;
}

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
::-webkit-input-placeholder {
   font-style: italic;
}
:-moz-placeholder {
   font-style: italic;  
}
::-moz-placeholder {
   font-style: italic;  
}
:-ms-input-placeholder {  
   font-style: italic; 
}
input {
  padding: 10px 0px;
  font-size: xx-large;
  text-align: center;
}


.question{
  margin-top: 30px;
  font-size: 34px;
  color: #404040;
  margin-bottom: 25px;
}
.answer.selected{
  background-color: #E4E4E4;}
.answer{
  border: 2px solid #396EF5;
  border-radius: 10px;
  
  padding: 20px;
  font-size: 20px;
  color: #396EF5;

  margin-bottom: 15px;
}
.nav{
  display: flex;
  justify-content: space-between;
}
.nav div{
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
div.hidden{
  display: none;
}
div.gray{
  background-color: #C9C9C9;
}
</style>
