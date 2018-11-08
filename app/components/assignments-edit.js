import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  updatedTitle: "",
  updatedInstructions: "",

  actions: {
    openEditForm() {
      this.set("editShown", true);
    },
    closeEditForm() {
      this.set("editShown", false);
    },
    editAssignment() {
      this.edit(this.updatedTitle, this.updatedInstructions);
      this.set("editShown", false);
    }
  }
});
