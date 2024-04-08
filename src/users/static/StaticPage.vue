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
    toggleMore(){
      this.isMoreVisible = !this.isMoreVisible; // 切换显示状态
    },
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
  <div class="all">
  <p id="username">username</p>
  <p id="welcome1">Statics</p>

  <div id="search-bar">
    <input type="text" class="search" placeholder="Search">
  </div>
  <p id="welcome2">Here is your whole finess data</p>
  <img src="@/assets/img_3.png">
  
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
#welcome1{
  margin-top: 2px;
  position: relative;
  text-align: left;
  font-weight: bolder;
  font-size: 30px;
}
#search-bar {
  padding: 10px;
}

#search-bar input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
.search{
  position: relative;
}
#welcome2{
  position: relative;
  text-align: left;
  font-size: 25px;
  margin-bottom: 2px;
}
img{
  width: 100%;
  border-radius: 5px;
}
.all{
  background-color: lightgray;
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
</style>