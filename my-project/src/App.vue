<template>
  <div id="app">
    <mainView></mainView>
    <sideBar></sideBar>
    <member></member>
  </div>
</template>

<script>
import mainView from './components/mainView';
import sideBar from './components/sideBar';
import member from './components/member';

export default {
  name: 'App',
  components: {
    mainView,
    sideBar,
    member
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
</style>
