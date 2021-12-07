Ext.define("IntroApp.store.Product", {
    extend: 'Ext.data.Store',
    alias: 'store.product',
    fields: [
        'name','category', 'status'
    ],
    data: {
        items:[
            { name: 'Motor Vehicles', category: "Vehicles", status: "Available" },
            { name: 'Pens and Pencils',     category: "Stationary",  status: "Pending" },
            { name: 'Tablet Computers',   category: "Accessories",    status: "Not available" },
            { name: ' Digital ArtWork',     category: "Beauty",        status: "Available" }
        ]
    },

    


    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
})


