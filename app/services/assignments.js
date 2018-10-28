import Service from "@ember/service";

export default Service.extend({
  assignments: null,

  init() {
    this._super(...arguments);
    this.set("assignments", []);
  },

  getAssignments() {
    if (localStorage.getItem("token") === null) {
      this.transitionToRoute("login");
    } else {
      fetch(`https://fastback-mobile-server.herokuapp.com/api/assignment`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        })
      })
        .then(res => res.json())
        .then(assignmentData => {
          this.set("assignments", assignmentData);
        });
    }
  },

  addAssignment(title, instructions) {
    fetch(`https://fastback-mobile-server.herokuapp.com/api/assignment/new`, {
      method: "POST",
      body: JSON.stringify({
        assignment: {
          title: title,
          instructions: instructions
        }
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(this.getAssignments());
  },

  editAssignment(title, instructions) {
    console.log(title, instructions);
  },

  deleteAssignment(id) {
    fetch(`https://fastback-mobile-server.herokuapp.com/api/assignment/${id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(this.getAssignments());
  },

  empty() {
    this.assignments.clear();
  }
});
