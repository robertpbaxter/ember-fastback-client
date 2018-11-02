import Controller from "@ember/controller";

export default Controller.extend({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  permission: "instructor",

  actions: {
    signup() {
      switch (true) {
        case this.password.length < 5:
          alert("Your password must contain 5 or more characters.");
          break;
        case this.password !== this.confirmPassword:
          alert("Passwords do not match.");
          break;
        default:
          fetch(
            `https://fastback-mobile-server.herokuapp.com/api/user/signup`,
            {
              method: "POST",
              body: JSON.stringify({
                user: {
                  firstName: this.firstName.trim(),
                  lastName: this.lastName.trim(),
                  email: this.email.trim().toLowerCase(),
                  password: this.password.trim(),
                  permission: "instructor"
                }
              }),
              headers: new Headers({
                "Content-Type": "application/json"
              })
            }
          )
            .then(res => res.json())
            .then(data => {
              if (!data.sessionToken) {
                alert("An error has occurred. Please try a different e-mail.");
              } else {
                localStorage.setItem("token", data.sessionToken);
                alert(
                  `New instructor successfully created. Welcome, ${
                    this.firstName
                  }`
                );
                this.transitionToRoute("assignments");
                this.set("firstName", "");
                this.set("lastName", "");
                this.set("email", "");
                this.set("password", "");
                this.set("confirmPassword", "");
              }
            });
      }
    }
  }
});
