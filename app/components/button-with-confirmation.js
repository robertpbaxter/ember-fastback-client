import Component from "@ember/component";

export default Component.extend({
  actions: {
    launchConfirmDialog() {
      this.set("confirmShown", true);
    },
    submitConfirm() {
      this.onConfirm();
    },
    cancelConfirm() {
      this.set("confirmShown", false);
    }
  }
});
