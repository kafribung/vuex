<template>
  <div class="mainView">
    <h1>Main View</h1>
    <div v-if="singelView">
      <h3 class="miring">singelView</h3>
      <member :member="activeMember"></member>
      <input type="text" placeholder="nama" v-model="activeMember.nama" />
      <input type="text" placeholder="point" v-model="activeMember.point" />
      <input type="text" placeholder="url-gambar" v-model="activeMember.img" />
    </div>
    <div v-else>
      <member v-for="(member, index) in members" :key="index" :member="member"></member>
    </div>
  </div>
</template>

<script>
// Import data dari main js
import member from "./member";
import { mapGetters } from "vuex";

export default {
  name: "mainView",
  computed: {
    ...mapGetters(["members", "singelView", "activeMember"])
  },

  components: {
    member
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainView {
  flex: 3;
}

.miring {
  font-style: italic;
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
