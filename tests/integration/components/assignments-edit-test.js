import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | assignments-edit", function(hooks) {
  setupRenderingTest(hooks);

  test("should display an edit button", async function(assert) {
    await render(hbs`{{assignments-edit}}`);
    assert.equal(
      this.element.querySelector(".toggleForm").textContent.trim(),
      "Edit"
    );
    await click(".toggleForm");
    assert.ok(
      this.element.querySelector(".assignmentEdit"),
      "renders the editing window"
    );
  });

  test("should not render an editing window at first", async function(assert) {
    await render(hbs`{{assignements-edit}}`);
    assert.notOk(
      this.element.querySelector(".assignmentEdit"),
      "initially closed"
    );
  });
});
