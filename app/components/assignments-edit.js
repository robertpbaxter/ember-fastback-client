import Component from "@ember/component";

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
