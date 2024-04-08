<script>

import Homeicon from '@/icon/Homeicon.vue'
import Staticicon from '@/icon/Staticicon.vue'
import Discovericon from "@/icon/Discovericon.vue";

export default {
  components: {
    Homeicon,
    Staticicon,
    Discovericon
  },
  methods: {

    gotostaticPage() {
      this.$router.push('/static');
    },
    gotomainPage(){
      this.$router.push('/home')
    },
    gotodiscoverPage(){
      this.$router.push('/discover')
    }
  }
}
</script>

<template>
  <div id="all">
  <p id="username">username</p>
  <p id="welcome1">Discover</p>
    <router-link to="/account">
    <img  class="account1" src="data:image/png;base64,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">
    </router-link>
      <p id="welcome2">Broadcast</p>
    <img src="@/assets/img_6.png">
    <p class="Forum">Forum</p>
    <div id="discuss">
      <div id="discuss1" class="discussion">
      <p>Why this app is so freaking good?</p>
       <div class="user">
         <img class="message" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAi0lEQVR4nO2UOwqAMBAFRwsrS69gZREvYaVFBJs9ueY0imAVP6CuGMGBV+ZN2IWFnxPEQAlYQC7GAmbpWmFuFIuXuWvFnZ+Ll3ZLIMoJR+CAcSdOQzAcCPpPjEje2IHTFAwnZx/eiCREgX1aYJ4S2KNzvfWgA3IgQYHGK6+AFEUyoF5ueQFEmuXfZQKOQ4K+ppmvTAAAAABJRU5ErkJggg==">
        <img class="avatar" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/user-male-circle.png" alt="user-male-circle"/>
      user · 16min ago
       </div>
      </div>
      <div id="discuss2" class="discussion">
      <p>Exp +3,bye</p>
        <div class="user">
          <img class="message" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAi0lEQVR4nO2UOwqAMBAFRwsrS69gZREvYaVFBJs9ueY0imAVP6CuGMGBV+ZN2IWFnxPEQAlYQC7GAmbpWmFuFIuXuWvFnZ+Ll3ZLIMoJR+CAcSdOQzAcCPpPjEje2IHTFAwnZx/eiCREgX1aYJ4S2KNzvfWgA3IgQYHGK6+AFEUyoF5ueQFEmuXfZQKOQ4K+ppmvTAAAAABJRU5ErkJggg==">
          <img class="avatar" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/user-male-circle.png" alt="user-male-circle"/>
        user · 17min ago
        </div>
      </div>
    </div>
    
  <div id="navigate">
    <button @click="gotomainPage">
      <Homeicon></Homeicon>
      Home
    </button>
    <button @click="gotostaticPage">
      <Staticicon></Staticicon>
      static</button>
    <button @click="gotodiscoverPage">
      <Discovericon></Discovericon>
      Discover</button>
  </div>
  </div>
</template>

<style>
#username{
  font-size: 20px;
  padding-top: 20px;
  position: relative;
  text-align: left;
  margin: 0;

}
.account1{
  width:auto;
  top:100px;

  position: absolute;
  right: 20px;
}
#welcome1{
  margin-top: 2px;
  position: relative;
  text-align: left;
  font-weight: bolder;
  font-size: 30px;
}
#welcome2{
  position: relative;
  text-align: left;
  font-size: 25px;
  margin-bottom: 2px;
}
.Forum{
  font-size: 25px;
  margin-bottom: 2px;
  text-align: left;
}
#discuss{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.discussion{

  background-color: white;
  height: 120px;
  width: 350px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 15px;
}
.message{
  width: 9%;
  left: 10px;
  position: absolute;
}
.avatar{
  width: 9%;
  left: 50px;
  position: absolute;
  margin-right: 19px;
}

.user{
  position: relative;
  text-align: right;
  margin-right: 10px;

}

#navigate{
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 将容器分成三列，每列的宽度平均 */
  gap: 0px; /* 可选：设置列之间的间距 */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 10px; /* 可选：为了增加按钮的内边距 */
  width: 100%; /* 让容器充满整个屏幕宽度 */
  box-sizing: border-box; /* 让 padding 不会影响容器的宽度 */
  border-top: 1px solid #ccc; /* 添加一条上边框，颜色可以根据你的设计进行调整 */
}
#navigate button{
  padding: 10px 20px;

  font-size: 16px;

  background-color: white;
  border: none;

  cursor: pointer;
}
#navigate button:hover {
  background-color: #0056b3;
}


#all{
  background-image: url("@/assets/img_5.png");
  background-size: 120%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>