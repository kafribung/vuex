<template>
  <div class="member">
    <h3>{{msg}}</h3>
    <h3>{{member.nama}} - {{member.point}}</h3>
    <img v-bind:src="'/static/' + member.img" width="200px" />
    <!-- Memberikan icon remove pada sidebar melalui member -->
    <div v-if="iconremove" v-on:click.prevent="removeMember(member.id)">X</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      msg: "List Member"
    };
  },
  props: ["member", "iconremove"],
  methods: {
    ...mapActions(["removeMember"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sideBar img {
  width: 100px;
}
h1,
h2 {
  font-weight: normal;
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
