<template>
  <div>
    <h1>Articles</h1>
    <div class="layout-padding">
      <p class="caption">Scroll down to see it in action.</p>
  
      <br>
      <q-infinite-scroll :handler="refresher">
        <p v-for="(item, index) in items" class="caption" :key="index">
          <span class="label bg-secondary text-white shadow-1">
            {{ index + 1 }}
          </span>
          <!-- {{ item.title }} -->
        </p>
  
        <div class="row justify-center" style="margin-bottom: 50px;">
          <spinner name="dots" slot="message" :size="40"></spinner>
        </div>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      articles: []
    }
  },
  methods: {
    refresher(index, done) {
      this.results()
      console.log(this.articles.lengh)
    },
    results() {
      return this.articles
    }
  },
  computed: {
  },
  mounted() {
    // GET /someUrl
    this.$http.get('https://jsonplaceholder.typicode.com/photos').then(response => {
      // get body data
      this.articles = response.body.slice(0, 20)
      console.log(this.articles)
    }, response => {
      // error callback
    })
  }
}
</script>

<style>

</style>
