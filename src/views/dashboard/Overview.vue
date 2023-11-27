<template>
  <h2>Overview</h2>
  <h3>
    {{ projectname }} <br />
    VisitCount: {{ visitCount }}
  </h3>
  <button @click="increase">Count +</button>
</template>

<script>
import { infoStore } from "../../data/info";
export default {
  data: () => ({
    projectname: infoStore.projectName,
    visitCount: infoStore.visitCount,
  }),
  methods: {
    increase() {
      infoStore.visitCount += 1;
      console.log(infoStore);
    },
  },
};
</script>
