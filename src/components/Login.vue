<template>
  <div class="login-page">
    <div class="login-card">
      <div class="text-center">
        <img class="login-card__icon" src="/public/img/lock.png" alt="" />
        <h2>User Login</h2>
      </div>
      <form action="#" @submit.prevent="handleSubmit">
        <label class="mt-3 block" for="username">Username</label>
        <input
          class="w-100"
          type="text"
          placeholder="Enter your username"
          v-model="formData.username"
          required
          ref="username"
        />

        <label class="mt-3 block" for="password">Password</label>
        <input
          class="w-100"
          type="password"
          placeholder="Enter your password"
          v-model="formData.password"
          required
          ref="password"
        />
        <!-- <p class="text-center mt-3" v-if="loggingIn">Logging in...</p> -->
        <!-- <button class="block loginbtn mt-3" v-else type="submit">Login</button> -->
        <TheButton :block="true" :loading="loggingIn" class="mt-3">Login</TheButton>

        <div class="d-flex jc-between mt-3">
          <div>
            <label for="">
              <input type="checkbox" />
              Remember Me
            </label>
          </div>
          <div>
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TheButton from "./TheButton.vue";

export default {
  data: () => ({
    formData: {
      username: "",
      password: "",
    },
  }),
  components:{
    TheButton
  },
  methods: {
    handleSubmit() {
      if (!this.formData.username) {
        this.$eventBus.emit("toast", {
          type: "Error",
          message: "username can not be empty.",
        });
        this.$refs.username.focus();
        return;
      }
      if (this.formData.password.length < 6) {
        this.$eventBus.emit("toast", {
          type: "Error",
          message: "Password must be at lest 6 characters long!",
        });
        this.$refs.password.focus();
        return;
      }
      // TODO : Call Api
      this.loggingIn = true;
      axios
        .post(
          "https://api.rimoned.com/api/pharmacy-management/v1/login",
          this.formData
        )
        .then((res) => {
          console.log(res.data);
          this.$eventBus.emit("toast", {
            type: "Success",
            message: res.data.message,
          });
        })
        .catch((err) => {
          let errorMessage = "Something went wrong";
          if ((err, response)) {
            errorMessage = err.response.data.message;
          }
          this.$eventBus.emit("toast", {
            type: "Error",
            message: errorMessage,
          });
        })
        .finally(() => {
          this.loggingIn = false;
        });
    },
  },
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}

.loginbtn {
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  border-radius: 5px;
  background: #550202;
  font-size: 16px;
}

.login-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 235, 235);
}

.login-card {
  width: 400px;
  /* border: 1px solid gray; */
  min-height: 193px;
  box-shadow: 0px 2px 9px 4px #dfdfdf;
  background-color: #fff;
  border-radius: 5px;
  padding: 44px 33px;
}

.login-card input[type="text"],
.login-card input[type="password"] {
  width: 100%;
}

.login-card__icon {
  max-width: 77px;
}
</style>
