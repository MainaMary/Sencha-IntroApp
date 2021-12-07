Ext.define('IntroApp.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'formPanel',
    floating: true,
    draggable: true,
    modal: true,
    closable: true,
    resizable: true,
    bodyPadding: 5,
    padding: 5,
    title: 'My Form',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: "Name",
            name: 'names',
            itemId: 'nameField'
        },
        {
            xtype: 'textfield',
            fieldLabel: "Email",
            name: 'email'
        },
        {
            xtype: 'textfield',
            fieldLabel: "Email",
            name: 'email',
            itemId: 'email2'
        },

    ],
    bbar: [{
        xtype: 'button',
        text: 'Submit'
    }]


})