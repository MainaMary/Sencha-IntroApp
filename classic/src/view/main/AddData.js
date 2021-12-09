Ext.define('IntroApp.view.main.AddData', {
    extend: "Ext.form.Panel",
    xtype: "formPanel",
    height: "100vh",
    modal: true,
    closable: true,
    title: "Add Products",
    items: [
        {
            xtype: 'textfield',
            fieldLabel: "Name",
            name: "name",
        },
        {
            xtype: 'textfield',
            fieldLabel: "category",
            name: "category",
        },
        {
            xtype: 'textfield',
            fieldLabel: "status",
            name: "status",
        },
    ],
    bbar : [{
        xtype: 'button',
        text: 'Submit'
    }]
})