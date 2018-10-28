import Controller from "@ember/controller";

export default Controller.extend({
  email: "",
  password: "",

  init() {
    this._super(...arguments);
  },

  actions: {
    login() {
      fetch(`https://fastback-mobile-server.herokuapp.com/api/user/login`, {
        method: "POST",
        body: JSON.stringify({
          user: {
            email: this.email,
            password: this.password
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
            this.store.createRecord("login", {
              id: data.id,
              firstName: data.firstName,
              lastName: data.lastName,
              permission: data.permission,
              sessionToken: data.token
            });
            this.transitionToRoute("assignments");
            this.email = "";
            this.password = "";
          }
        });
    }
  }
});
