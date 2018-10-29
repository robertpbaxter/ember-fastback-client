import Route from "@ember/routing/route";

export default Route.extend({
  afterModel() {
    if (!localStorage.getItem("token")) {
      this.transitionTo("login");
    }
  }
});
