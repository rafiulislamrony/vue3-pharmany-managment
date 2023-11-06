<template>
  <div class="login-page">
    <div class="login-card">
      <div class="text-center">
        <img class="login-card__icon" src="/public/img/lock.png" alt="" />
        <h2>User Login</h2>
      </div>
      <form action="#">
        <label class="mt-3 block" for="">Email</label>
        <input class="w-100" type="email" placeholder="Enter your email" />

        <label class="mt-3 block" for="">Password</label>
        <input
          class="w-100"
          type="password"
          placeholder="Enter your password"
        />

        <button class="block loginbtn mt-3" type="submit">Login</button>

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
export default {};
</script>

<style scoped>
.w-100 {
  width: 100%;
}

.loginbtn{
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

.box {
  width: 55px;
  height: 55px;
  background-color: greenyellow;
  margin-bottom: 22px;
  transition: all 0.5s;
}

.box--right {
  margin-left: 222px;
}

.box1 {
  width: 55px;
  height: 55px;
  background-color: greenyellow;
  margin-bottom: 22px;
  /* animation: showhide 1s ease-in; */
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

@keyframes showhide {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.showhide-enter-active {
  animation: showhide 1s ease-in;
  /* transition: all 0.5s; */
}
.showhide-enter-from {
  /* opacity: 0;
  transform: scale(0.5); */
}

.showhide-enter-to {
  /* opacity: 1;
  transform: scale(1); */
}

.showhide-leave-active {
  animation: showhide 1s ease-in reverse;
  /* transition: all 0.5s; */
}
.showhide-leave-from {
  /* opacity: 1;
  transform: scale(1); */
}

.showhide-leave-to {
  /* opacity: 0;
  transform: scale(0.5); */
}
</style>
