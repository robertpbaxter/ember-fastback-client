# Fastback: Ember Edition

This repository represents an exercise in self-learning with the Ember.js framework limited only to a weekend's time. This app emulates a simple instructor interface I developed as a project prepared for a full stack react app for Eleven Fifty Academy.

Back-end repository: https://github.com/robertpbaxter/fastback-server

# Features:

- Login / signup authentication using JSON web tokens and redirection via controllers

- Route protection that requires a session token in local storage and redirects users without a token to the login route

- A create/read/update/delete interface with two buttons that reveal hidden divs (using conditionals) for either editing an existing entry or a delete confirmation dialog.

- Deployed to Surge
