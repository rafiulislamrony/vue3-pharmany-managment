<template>
  <h2>Overview</h2>
  <h3>
    {{ projectname }} <br />
    VisitCount: {{ visitCount }}
  </h3>
  <button @click="increase">Count +</button>
  <p>
    username {{ username }}
  </p>
</template>

<script>
import { infoStore } from "../../data/info";
import {mapState} from "pinia";
import {useAuthStore} from "../../store/authStore";

export default {
  data: () => ({
    projectname: infoStore.projectName,
    visitCount: infoStore.visitCount,
  }),
  computed:{
    ...mapState(useAuthStore,{
      username:"username", 
    })
  },
  methods: {
    increase() {
      infoStore.visitCount += 1;
      console.log(infoStore);
    },
  },
};
</script>
