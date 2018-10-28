import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),

  actions: {
    logout() {
      localStorage.clear();
      this.get("router").transitionTo("login");
    }
  }
});
