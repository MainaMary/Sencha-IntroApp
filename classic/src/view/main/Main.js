Ext.define('IntroApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    // alias: 'widget.app-main',
    
    listeners: {
        tabchange: 'onTabChange'
    },

    // requires: [
    //     'Ext.plugin.Viewport',
    //     'Ext.window.MessageBox',
    //     'IntroApp.view.main.MainController',
    //     'IntroApp.view.main.MainModel',
    //     'IntroApp.view.main.List'
    // ],

    controller: 'main',
    // controller: 'product',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        // title: {
        //     text: 'Foo',
        //     flex: 0
        // },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'button',
            text: "Welcome",
            handler: 'buttonClicked'
        }],
        // bind: {
        //     html: '{Route}'
        // }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        xtype :'Route'
    },
    {
        title: 'Products',
        iconCls : 'fa-users',
        items : [{
            xtype: 'otherlist'
        }],
        bbar: [{
            xtype: 'button',
            text: 'Add new',
            handler : 'handleFormData'
            
        }]

    }
    ,
    
    {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
