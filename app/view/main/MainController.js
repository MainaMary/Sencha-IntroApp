
Ext.define('IntroApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (rowCpt, record) {
        console.log(record);
        var form = Ext.create('IntroApp.view.main.Form');
        form.loadRecord(record);
        form.down('#email2').setValue(record.get('email'));
        // form.down('textfield[name=emails]').setValue(record.get('email'));
        form.show();
    }, 


    onItemsDoubleClick : function (elem, record){
        const newForm = Ext.create('IntroApp.view.main.ProductForm');
        newForm.loadRecord(record)
      //  newForm.down.setValue(record.get('category'))
        newForm.show()
        

    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    buttonClicked: function (btn, ev) {
        var form = btn.up('form');
        alert('clicked');
    },

    onTabChange: function (panel, newC, old) {
        alert('tab-changed');
        if(newC.getTitle() == 'Home'){
            alert('Now in home!')
        }
    }
});
