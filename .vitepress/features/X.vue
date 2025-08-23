<template>
  <div ref="tweetContainer"></div>
</template>

<script>
export default {
  props: {
    tweetId: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadTwitterScript()
  },
  methods: {
    loadTwitterScript() {
      if (window.twttr) {
        this.embedTweet()
        return
      }

      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.onload = this.embedTweet
      document.head.appendChild(script)
    },
    embedTweet() {
      window.twttr.widgets.createTweet(this.tweetId, this.$refs.tweetContainer)
    },
  },
}
</script>