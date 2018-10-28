import Component from "@ember/component";

export default Component.extend({
  actions: {
    launchConfirmDialog() {
      this.set("confirmShown", true);
    },
    submitConfirm() {
      //trigger parent component action
      this.onConfirm();
    },
    cancelConfirm() {
      this.set("confirmShown", false);
    }
  }
});
