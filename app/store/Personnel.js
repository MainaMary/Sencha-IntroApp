Ext.define('IntroApp.store.Personnel', {
    extend: 'Ext.data.Store',

    storeId: 'personnel',
    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    data: {
        items: [
            { names: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", age: 29 },
            { names: 'Worf', email: "worf.moghsson@enterprise.com", phone: "555-222-2222", age: 29 },
            { names: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333", age: 39 },
            { names: 'Data', email: "mr.data@enterprise.com", phone: "555-444-4444", age: 39 }
        ],
    },
    pageSize: 4,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items',

        }
    }
});
