Ext.define('IntroApp.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'formPanel',
    floating: true,
    
    modal: true,
    closable: true,
    bodyPadding: 10,
    padding: 5,
    title: 'Product Form',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: "Name",
            name: 'name',
            required: true
            
        },
        {
            xtype: 'textfield',
            fieldLabel: "category",
            name: 'category',
            required: true
        },
        {
            xtype: 'textfield',
            fieldLabel: "status",
            name: 'status',
            required: true
        
        },

    ],
    bbar: [{
        xtype: 'button',
        text: 'Submit',
        handler: "onSaveData"
    }]


})