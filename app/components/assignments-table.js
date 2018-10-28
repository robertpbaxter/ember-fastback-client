import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  //loads the service in file /app/services/assignments
  list: service("assignments"),

  init() {
    this._super(...arguments);
    this.fetchAssignments();
  },

  fetchAssignments() {
    this.list.getAssignments();
  }
});
