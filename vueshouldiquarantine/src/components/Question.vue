<template>
  <div class="question">
    <!-- {{question}} -->
    <h1>{{ question.question }}</h1>
    <div v-if="question.type=='text'">
      <input v-model="textanswer" />
    </div>
    <template v-if="question.answers">
      <div
        v-for="(answer, index) in question.answers"
        :key="index"
        :class="{selected:selected.includes(index)}"
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
      if (this.question.type=="one") {
        this.selected = [index]
        return
      }
      var position = this.selected.indexOf(index);
      if (position >= 0) {
        this.selected.splice(position);
      } else {

        this.selected.push(index);
      }
    }
  },
  data() {
    return {
      textanswer: "",
      selected: []
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
.selected{background-color:red}
</style>
