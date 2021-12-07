/**
 * This view is an example list of people.
 */
Ext.define('IntroApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    // requires: [
    //     'IntroApp.store.Personnel'
    // ],

    title: 'Personnel',

    // store: "personnel",

    store: {
        type: 'personnel'
    },
    bbar: [{
        xtype: 'pagingtoolbar',
        width: '100%',
        displayInfo: true,
        displayMsg: 'Showing {0} - {1} of {2} total records',
        emptyMsg: 'No Records',
        store: {
            type: 'personnel'
        },
    }],

    columns: [
        { text: 'Name', dataIndex: 'names' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
