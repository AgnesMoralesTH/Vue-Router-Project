<template>
  <div class="home">
    <div v-for="destination in destinations" :key="desination.name">
      <router-link to="destination.slug">
        <h2>{{destination.name}}</h2>
      </router-link>

      <figure>
        <router-link :to="destination.name"></router-link>
      </figure>
    </div>    
  </div>
</template>

<script>
// @ is an alias to /src
import store from "../store"
export default {
  name: "Home",
  components: {},
  data(){
    return{
      destinations: store.destination
    }
  }
};
</script>
