import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import { click, currentURL, visit } from "@ember/test-helpers";

module("Acceptance | base navigation", function(hooks) {
  setupApplicationTest(hooks);

  test("should show a welcome image on the home page", async function(assert) {
    await visit("/");
    assert.equal(
      this.element.querySelectorAll("#tomster").length,
      1,
      "should include one image with id Tomster"
    );
  });

  test("should link to a home (index) page", async function(assert) {
    await visit("/");
    await click(".menu-index");
    assert.equal(currentURL(), "/", "should navigate to index");
  });

  test("should link to an about page", async function(assert) {
    await visit("/");
    await click(".menu-about");
    assert.equal(currentURL(), "/about", "should navigate to about");
  });

  test("should re-route an unauthorized user from assignments to a login page", async function(assert) {
    await visit("/");
    await click(".menu-assignments");
    assert.equal(currentURL(), "/login", "should re-route to login");
  });
});
