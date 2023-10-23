Ext.define('MySpace.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MySpace.view.main.MainController',
        'MySpace.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBar: {
        layout: {
            pack: 'center'
        }
    },

    defaults:{
        layout: 'center',
        // width: '70%'
    },
    items: [{// TODO - this menu will exclude an another file
        title: 'Home',
        iconCls: 'fa-home'
    }, {
        title: 'BLOG',
        iconCls: 'fa-pen',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'NOTES',
        iconCls: 'fa-window-restore sidebar-tab-icon',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'TASKS',
        iconCls: 'fa-clipboard-list',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'PROJECTS',
        iconCls: 'fa-laptop-code',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'LIBRARY',
        iconCls: 'fa-book',
        bind: {
            html: '{loremIpsum}'
        }
        // }, {
        //     title: 'WATCH LİST',
        //     iconCls: 'fa-tv',
        //     bind: {
        //         html: '{loremIpsum}'
        //     }
    }]
});
