Ext.define('MySpace.view.task.TaskList', {
    extend: 'Ext.panel.Panel',
    xtype: 'tasklist',

    layout: 'column', // auto düzeni kullanın
    align: 'center',
    scrollable: true,
    //     direction: 'vertical' // Yatay ve dikey kaydırma etkinleştirilir
    // },
        xtype: 'panel',
        width: 300,
        autoScroll:true,
        defaults: {
        height: 200,
        margin: 10,
        border: true,
        paddingBottom:10
    },

    items: [{
        title: 'Card1'
    }, {
        title: 'Card2'
    }, {
        title: 'Card3'
    }, {
        title: 'Card4'
    }, {
        title: 'Card3'
    }, {
        title: 'Card4'
    }, {
        title: 'Card5'
    }, {
        title: 'Card3'
    }, {
        title: 'Card4'
    },{
        title: 'Card5'
    }, {
        title: 'Card3'
    }, {
        title: 'Card4'
    },{
        title: 'Card5'
    }, {
        title: 'Card3'
    }, {
        title: 'Card4'
    }, {
        title: 'Card5'
    }, {
        title: 'Card with Arrows',
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'left',

        items: [{
            iconCls: null,
            glyph: 61,
            xtype: 'button'
        }, '-', {
            iconCls: null,
            glyph: 88,
            xtype: 'button'
        }, {
            iconCls: null,
            glyph: 70,
            xtype: 'button'
        }, '-', {
            iconCls: null,
            glyph: 47,
            xtype: 'button'
        }]
    }]

});