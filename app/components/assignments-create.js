import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  assignmentService: service("assignments"),
  newTitle: "",
  newInstructions: "",

  // init(){
  //   this._super(...arguments)
  // }
  actions: {
    addAssignment() {
      this.assignmentService.addAssignment(this.newTitle, this.newInstructions);
      this.set("newTitle", "");
      this.set("newInstructions", "");
    }
  }
});
