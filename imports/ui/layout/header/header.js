import "./header.html";
import "./header.scss";
import { Notifications } from "../../../api/notifications/notifications";

Template.header.onCreated(function() {
  this.subscribe("notifications");
});

Template.header.events({
  "click .sidebar-toggler"(event) {
    event.stopPropagation();
    $("body").toggleClass("sidebar-show");
  },

  "click #signOut"(event) {
    event.preventDefault();

    if (Meteor.userId()) {
      Meteor.logout();
    }
  },

  // "click #searchButton, submit": (event, templateInstance) => {
  //   event.preventDefault();

  //   let q = $("#searchHeader").val();

  //   if (q) {
  //     history.replaceState(null, "", `/home/?q=${q}`);
  //   }
  //   FlowRouter.go("/search");

  //   let queryParam = { q: q };
  //   let path = FlowRouter.path("/search", {}, queryParam);
  //   Session.set("searchQuery", queryParam);

  //   FlowRouter.go(path);
  // },

  // "change #selectLanguage"(event) {
  //   TAPi18n.setLanguage(event.target.value);
  // },
  // "click .change-language"(event) {
  //   event.stopPropagation();
  // },
});

Template.header.helpers({
  // languages: () => {
  //   return Object.keys(TAPi18n.languages_names).map(key => {
  //     return {
  //       code: key,
  //       name: TAPi18n.languages_names[key][1],
  //       selected: key === TAPi18n.getLanguage(),
  //     };
  //   });
  // },

  notificationsCount: () => Notifications.find({ userId: Meteor.userId(), read: false }).count(),

  userId: () => Meteor.userId(),
});
