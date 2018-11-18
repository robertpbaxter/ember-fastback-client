import Controller from "@ember/controller";

export default Controller.extend({
  email: "",
  password: "",

  actions: {
    login() {
      fetch(`https://fastback-mobile-server.herokuapp.com/api/user/login`, {
        method: "POST",
        body: JSON.stringify({
          user: {
            email: this.email.trim().toLowerCase(),
            password: this.password.trim()
          }
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            alert("Username or password invalid");
          } else {
            localStorage.setItem("token", data.sessionToken);
            this.transitionToRoute("assignments");
            this.set("email", "");
            this.set("password", "");
          }
        });
    }
  }
});
