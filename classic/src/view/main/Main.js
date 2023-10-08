/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyBlog.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyBlog.view.main.MainController',
        'MyBlog.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
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

    items: [{// TODO - this menu will exclude an another file
        title: 'Home',
        iconCls: 'fa-home',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'BLOG',
        iconCls: 'fa-pen',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'NOTES',
        iconCls: 'fa-window-restore',
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
        title: 'LIBRARY',
        iconCls: 'fa-book',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'PROJECTS',
        iconCls: 'fa-laptop-code',
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
