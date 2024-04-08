<template>
  <div id="all">
  <p id="username">username</p>
  <p id="welcome1">Good Morning</p>
    <button class="more" @click="toggleMore">{{isMoreVisible ? '' : ''}}
      <svg class="plus" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
      </svg>
    </button>
    <div v-show="isMoreVisible" class="more-content">
      <!-- diet 和 medication 内容 -->
      <p>Diet content</p>
      <p>Medication content</p>
    </div>
  <p id="welcome2">How's your day?</p>
  <div id="data">
    <div id="sleep">
      <p id="condition">Last day it seems your sleep is very well!</p>
      <img class="sleepchart" src="@/assets/img_4.png">
      <p id="explain">you sleep 12 hours yesterday. Try to sleep less and you will get more work time.</p>
    </div>
    <div id="breakfast">
      <p id="recommen">Recommendation for your breakfast:</p>
      <ul id="food">
        <li>Egg: 80Cal</li>
        <li>Toast: 100Cal</li>
        <li>Apple: 60Cal</li>
      </ul>
      <img id="apple" src="@/assets/apple.png" alt="apple">
    </div>


  </div>
  <div id="body">
    <p class="device">you device,your body</p>
    <img id="analyse" src="@/assets/img_2.png" alt="analyse">

    <div id="digest"></div>
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
#welcome2{
  position: relative;
  text-align: left;
  font-size: 25px;
  margin-bottom: 2px;
}
#data{
  position: relative; /* 添加相对定位 */
  width: 90%; /* 设置宽度 */

  height: 200px;
  max-width: 800px; /* 最大宽度 */
  margin: 0 auto; /* 水平居中 */
  padding: 20px; /* 可选：添加内边距 */
  background-color: #222222;
  border-radius: 20px;
  grid-template-columns: repeat(2,1fr);


}
#sleep{
  position: absolute;
  left: 10px;
  width: 170px;
  height: 200px;
  background-color: lightblue;
  border-radius: 5px;
  font-size: 10px;
}
.sleepchart{
  width: 20%;
  position: absolute;
  left: 10px;
  border-radius: 5px;
}
#apple{
  width:20%;
  height: 20%;
  position: absolute;
  right: 50px;
  top: 90px;
}
#breakfast{
  right: 10px;
  position: absolute;

  width: 170px;
  height: 200px;
  background-color: lightgreen;
  border-radius: 5px;
  font-size: 10px;
}

#condition{
  font-weight: bolder;
  font-size: 18px;

}
#recommen{
  font-weight: bolder;
  font-size: 18px;
}
#food{
  list-style:none;

  padding: 6px;
  margin: 5px;
}
li {
  list-style: none;
  text-align: left; /* 将列表项中的文本内容向左对齐 */
}
#explain{
  position: absolute;
  left: 50px;
  top: 100px;
  height: 40px;
  width: 110px;
}
#all{
  background-image: url("@/assets/img_1.png");
  background-size: 120%;
  background-position: center;
  background-repeat: no-repeat;
}
#analyse{
  position: relative;
  padding-top: 20px ;
  width: 100%;


  border-radius: 8%;
}
#body{
  text-align: left;
  position: relative;
  top: calc(20px);


}
.device{
  font-size: 25px;
  margin-bottom: 2px;

}
.plus{
  width: 24px;
  height: 24px;
  fill: currentColor;
}
.more{
  position: fixed;
  top: 150px;
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0056b3; /* 修改背景颜色 */
  color: white; /* 修改文字颜色 */
  border: none;
  border-radius: 5px; /* 添加圆角 */
  cursor: pointer;
  transition: background-color 0.3s; /* 添加过渡效果 */

}

.more:hover {
  background-color: #004080; /* 悬停时改变背景颜色 */
}
.more-content{
  position: fixed;
  background-color: white;
  z-index: 2;
  opacity: 80%;
  border-radius: 10px;
  right:8px;

}

</style>
<script >
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import Homeicon from '@/icon/Homeicon.vue'
import Staticicon from '@/icon/Staticicon.vue'
import Discovericon from "@/icon/Discovericon.vue";
 export default {
components:{
  Homeicon,
  Staticicon,
  Discovericon
},
   data(){
  return{
    isMoreVisible: false // 控制是否显示 "diet" 和 "medication" 内容
  };
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
<!--<script setup lang="ts">-->
<!--import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'-->
<!--import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'-->
<!--</script>-->
