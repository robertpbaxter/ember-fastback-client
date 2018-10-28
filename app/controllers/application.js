import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    logout() {
      localStorage.clear();
      this.transitionToRoute("login");
    }
  }
});
