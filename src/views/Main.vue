<template>
  <div>
    <div id="nav">
      <div class="titleName">
        OneSpo
      </div>
    </div>
    <div id="mainHead">
      <p class="word">
        세상의 모든
      </p>
      <p class="word">
        영화 스포일러
      </p>
      <p class="word">
        한줄로 센스있게
      </p>

      <input
        class="input"
        type="search"
        placeholder="영화를 검색해보세요"
      >
    </div>
    <div id="container">
      <div class="movie">
        1
      </div>
      <div class="movie">
        1
      </div>
      <div class="movie">
        1
      </div>
      <div class="movie">
        1
      </div>
      <div class="movie">
        1
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style>
#nav {
  width: 100%;
  border-bottom: 1px solid #ececec;
}
.titleName {
  width: calc(100% - 40px);
  margin-left:auto;
  margin-right:auto;
  height: 50px;
  line-height: 50px;
  font-family: 'Baloo Bhai', cursive;
  font-size: 25px;
  color: #4F2CFA;
}

#mainHead {
  width: calc(100% - 40px);
  margin-left:auto;
  margin-right:auto;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ececec;
}

#mainHead .word{
  font-size: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color: #484848; 
}

#mainHead .input{
  height: 50px;
  border: 1px solid #ececec;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}

#container {
  width: calc(100% - 30px);
  margin-left:auto;
  margin-right:auto;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: stretch;
  align-items: stretch;  
}
#container .movie{  
  display: flex;
  height: 200px;
  border: 1px solid #ececec;
  box-sizing:border-box;
  margin-bottom: 10px;
  margin: 10px;
}
</style>
