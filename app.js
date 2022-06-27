const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      gender: "male",
      picture:"data:image/png;base64,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",
    }
  },

  //fecting random user data 

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api")  
      const { results } = await res.json()

       ;(this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large)
    },
  },
})

app.mount("#app")
