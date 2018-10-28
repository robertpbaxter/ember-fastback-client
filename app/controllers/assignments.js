import Controller from "@ember/controller";

export default Controller.extend({
  init() {
    this._super(arguments);
    this.fetchAssignments();
  },

  fetchAssignments() {
    console.log(localStorage.getItem("token"));
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
        .then(assignmentData => console.log(assignmentData));
    }
  }

  // deleteAssignment(e, assignmentId) {
  //   fetch(`https://fastback-mobile-server.herokuapp.com/api/assignment/${assignmentId}`, {
  //     method: "DELETE",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: this.props.auth.sessionToken
  //     })
  //   }).then(res => this.fetchAssignments());
  // },

  // editAssignment(e, assignment) {
  //   fetch(`https://fastback-mobile-server.herokuapp.com/api/assignment/${assignment.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ assignment: assignment }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: this.props.auth.sessionToken
  //     })
  //   }).then(res => {
  //     this.setState({ showEditMenu: false });
  //     this.fetchAssignments();
  //   });
  // }
});
