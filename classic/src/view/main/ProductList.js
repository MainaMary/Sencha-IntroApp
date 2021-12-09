/**
 * This view is an example list of people.
 */
 Ext.define('IntroApp.view.main.ProductList', {
    extend: 'Ext.grid.Panel',
    xtype: 'otherlist',

    requires: [
        'IntroApp.store.Product'
    ],

    title: 'Products',

    store: {
        type: 'product'
    },

    listeners: {
        itemdblclick: 'onItemsDoubleClick'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name'
      
    
    },
        { text: 'Category', dataIndex: 'category', flex: 1
     
    },
        { text: 'Status', dataIndex: 'status', flex: 1
       
    }
    ],

    
});
