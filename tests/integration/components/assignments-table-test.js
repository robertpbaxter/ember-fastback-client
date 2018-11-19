import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import Service from "@ember/service";

const assignmentStub = Service.extend({
  assignments: [
    {
      title: "test-title",
      instructions: "test-instructions"
    }
  ],
  getAssignments() {
    return this.assignments;
  }
});

module("Integration | Component | assignments-table", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register("service:assignments", assignmentStub);
  });

  test("should display assignment details", async function(assert) {
    await render(hbs`{{assignments-table}}`);
    assert.equal(
      this.element.querySelector(".title").textContent.trim(),
      "Title: test-title",
      "Title should show 'Title: test-title'"
    );
    assert.equal(
      this.element.querySelector(".instructions").textContent.trim(),
      "Instructions: test-instructions",
      "Instructions should show 'Instructions: test-instructions'"
    );
  });
});
