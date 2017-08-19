<template>
  <div slot="content">
    <h4>Articles</h4>
    <div class="articles-list">
      <div v-for="article in articles" class="caption" :key="article.id">
        <div class="card bg-teal text-white">
          <img :src="article.image +'/'+ article.random" class="responsive">
          <div class="card-content">
            <h4>{{ article.title }}</h4>
            <h6>{{ article.id }}</h6>
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
  methods: {},
  computed: {},
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
@media (min-width: 1280px)
  .card
    max-width 400px
  .articles-list
    display flex
    flex-wrap wrap
    justify-content space-around
@media (min-width: 921px) and (max-width: 1279px)
  .card
    max-width 350px
  .articles-list
    display flex
    flex-wrap wrap
    justify-content space-around
@media (min-width: 601px) and (max-width: 920px)
  .card
    max-width 300px
  .articles-list
    display flex
    flex-wrap wrap
    justify-content space-around
  .caption
    padding 20px    
@media (max-width: 600px)
  .articles-list
    display flex
    align-items center
    flex-direction column
  .caption
    padding 0
</style>
