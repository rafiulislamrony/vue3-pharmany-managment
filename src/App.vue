<template>
 
  <login></login>

  <div class="toasts">
    <TheTost v-for="(toast, i) in toasts" 
    :key="i" 
    :toastType="toast.type" 
    :message="toast.message">
  </TheTost> 
  </div>
 
</template>

 
<script>
import Login from "./components/Login.vue";
import TheTost from './components/TheTost.vue';
export default {
  data:()=>({
    toasts:[
      // {
      //   type: "Success",
      //   message: "Done Successfully!"
      // },
      // {
      //   type: "Error",
      //   message: "Something wnet wrong!"
      // }
    ]
  }),

  components: {
    Login, TheTost
  },
  mounted(){
    this.$eventBus.on("toast", (data) =>{
      this.toasts.push(data);
      this.removeOneToast();
    })
  },
  methods:{
    removeOneToast(){
      setTimeout(() => {
        this.toasts.shift();
      }, 2222);
    }
  }


};
</script>




<style> 

</style>