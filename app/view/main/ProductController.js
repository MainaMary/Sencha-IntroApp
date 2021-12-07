 
  Ext.define('IntroApp.view.main.ProductController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.product',

    onItemSelected: function (sender, record) {
        
        console.log('bar')
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
