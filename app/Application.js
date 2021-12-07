
Ext.define('IntroApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'IntroApp',

    stores: [
        // TODO: add global / shared stores here
        "IntroApp.store.Personnel"
    ],
    
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
