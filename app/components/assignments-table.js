import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  assignmentService: service("assignments"),

  init() {
    this._super(...arguments);
    this.fetchAssignments();
  },

  fetchAssignments() {
    this.assignmentService.getAssignments();
  },

  actions: {
    editAssignment(id,title,instructions){
      this.assignmentService.editAssignment(id,title,instructions)
    },
    deleteAssignment(id) {
      this.assignmentService.deleteAssignment(id);
    }
  }
});
