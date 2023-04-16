<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
})

</script>

<template>
  <div class="menu__bar">
    <div class="logo">

    </div>
    <div class="list">
      <div class="item">
        <router-link to="/">Обращение</router-link>
      </div>
      <div class="item">
        <router-link to="/CreditApplication">Кредитные заявки</router-link>
      </div>
    </div>
    <div class="empty">

    </div>
  </div>
</template>

<style scoped>
.menu__bar {
  display: flex;
  justify-content: space-around;
}

.logo, .list, .empty {
  /* background-color: brown; */
  height: 100px;
  /* width: 150px; */
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
}

.list .item {
  border: #56aeb8;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #56aeb8;
}

.router-link-active {
  background-color: chartreuse;
}
</style>