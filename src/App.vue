<template>
  <div id="app">
    <HelloWorld msg="Should I Quarantine?" />
    <language-choice />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LanguageChoice from "./components/LanguageChoice.vue";

export default {
  name: "App",
  components: {
    LanguageChoice,
    HelloWorld
  }
};
</script>

<style>
body {
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
