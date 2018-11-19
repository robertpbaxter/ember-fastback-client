import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | assignments-create", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`{{assignments-create}}`);

    assert.equal(
      this.element.querySelector(".newTitle").textContent.trim(),
      "Title:"
    );
    assert.equal(
      this.element.querySelector(".newInstructions").textContent.trim(),
      "Instructions:"
    );
    assert.equal(
      this.element.querySelector("#submit").textContent.trim(),
      "Create"
    );
  });
});
