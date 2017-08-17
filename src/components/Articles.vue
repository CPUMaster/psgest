<template>
  <div>
    <h1>Articles - 0</h1>
    <div class="layout-padding">
      <p class="caption">Scroll down to see it in action.</p>
  
      <br>
      <div v-for="article in articles" class="caption" :key="article.id">
        <div class="card bg-teal text-white">
          <img :src="article.image" class="responsive">
          <div class="card-content">
            <h4>{{ article.title }}</h4>
            <h7>{{ article.id }}</h7>
            <p>{{ this._.truncate(article.description, { 'length': 80, 'separator': '' })}}</p>
          </div>
        </div>
  
      </div>
  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
    // GET /someUrl
    this.$http.get('http://localhost:3000/articles/').then(response => {
      // get body data
      this.articles = response.body.slice(0, 20)
      console.log(this.articles)
    }, response => {
      // error callback
    })
  }
}
</script>
<style lang="stylus">
.card
  max-width 300px
</style>
