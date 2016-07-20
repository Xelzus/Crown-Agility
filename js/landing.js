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
        {
            title: 'meeting with school counselor'
            , description: 'sat scores'
            , date: '12/31/2016'
        },

        {
            title: 'meeting with school teacher'
            , description: 'act scores'
            , date: '12/31/2014'
        }
    ];

})();