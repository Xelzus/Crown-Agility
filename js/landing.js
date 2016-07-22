(function () {
    var app = angular.module('dashboardApp', []);
    app.controller('dashController', function () {
        this.contents = reminderArray;
    });

    app.controller('reminderController', function () {
        this.reminder = {};

        this.addReminder = function (content) {
            reminderArray.push(this.reminder);
            this.reminder = {};
        }
    });

    var reminderArray = [
    ];

})();