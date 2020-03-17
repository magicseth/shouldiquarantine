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
}

#app {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
