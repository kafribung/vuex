<template>
  <div class="sideBar">
    <h1>sideBar</h1>
    <member
      v-for="(member, index) in members"
      :key="index"
      :member="member"
      v-on:click.native.prevent="showMember(member)"
      v-bind:iconremove="true"
    ></member>
    <a href="#" v-on:click.prevent="showMembers">
      <button>Semua member</button>
    </a>
    <a href="#" v-on:click.prevent="addMembers">
      <button>Tambah Member</button>
    </a>
  </div>
</template>

<script>
// Import data dari main js
import member from "./member";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "sideBar",
  computed: {
    ...mapGetters(["members"])
  },

  components: {
    member
  },

  methods: {
    ...mapActions(["showMember", "showMembers", "addMembers"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Untuk memberikan style pada member. Kita harus ke componentnya -->


<style scoped>
.sideBar {
  flex: 1;
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
