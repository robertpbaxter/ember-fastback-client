import DS from "ember-data";

export default DS.Model.extend({
  firstName: DS.attr("string", { defaultValue: "" }),
  lastName: DS.attr("string", { defaultValue: "" }),
  permission: DS.attr("string", { defaultValue: "" }),
  sessionToken: DS.attr("string", { defaultValue: "" })
});
