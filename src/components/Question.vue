<template>
  <div class="question">
    <!-- {{question}} -->
    <h2>{{ question.question }}</h2>
    <div v-if="question.type=='text'">
      <input v-model="textanswer" 
        :placeholder="question.placeholder"/>
    </div>
    <template v-if="question.answers">
      <div class="answer"
        v-for="(answer, index) in question.answers"
        :key="index"
        :class="{selected:question.selected.includes(index)}"
        @click="toggle(index)"
      >{{answer}}</div>
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
    toggle(index) {
      if (this.question.type=="radio") {
        if (this.question.selected.length  && this.question.selected == index){
          this.question.selected = []
        } else {
          this.question.selected = [index]
        }
        return
      }
      var position = this.question.selected.indexOf(index);
      if (position >= 0) {
        this.question.selected.splice(position,1);
      } else {
        this.question.selected.push(index);
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
.answer.selected{background-color:rgb(196, 0, 0)}
.answer{
  background-color:rgba(207, 207, 207, 0.601);
  border: 3px solid #444;
  margin:auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding:10px 0px;
  border-radius: 10px;
  width: 60%;
  font-size: xx-large;
}
</style>
