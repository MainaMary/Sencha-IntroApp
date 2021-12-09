Ext.define('IntroApp.view.main.ProductForm', {
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
            
        },
        {
            xtype: 'textfield',
            fieldLabel: "category",
            name: 'category'
        },
        {
            xtype: 'textfield',
            fieldLabel: "status",
            name: 'status',
        
        },

    ],
 bbar: [
       {
           xtype: 'button',
           text: 'Edit',
           handler: 'handleEdit'
       },
       {
        xtype: 'button',
        text: 'Delete',
    
    },
    {
        xtype: 'button',
        text: 'Cancel',
        
    }
   ]
   
   
    


})