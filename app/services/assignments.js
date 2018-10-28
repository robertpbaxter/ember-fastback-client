import Service from "@ember/service";

export default Service.extend({
  assignments: [],
  newAssignment: {},
  updateAssignment: {},

  init() {
    this._super(...arguments);
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
          console.log(assignmentData);
          console.log(this.assignments);
        });
    }
  },

  addAssignment() {
    fetch(`https://fastback-mobile-server.herokuapp.com/api/assignment/new`, {
      method: "POST",
      body: JSON.stringify({ assignment: this.newAssignment }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(assignmentData => {
        console.log(assignmentData);
        // assignmentData.error
        //   ? (alert.innerText = "An error has occurred")
        //   : this.props.updateAssignmentsArray();
        // this.setState({ title: "", instructions: "" }); // No need to clear the problem set value
      });
  },

  editAssignment() {},

  deleteAssignment() {},

  empty() {
    this.assignments.clear();
  }
});
