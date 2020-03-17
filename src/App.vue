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
  background-color: white;
  margin: 0px;
}

#app {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
}
</style>
