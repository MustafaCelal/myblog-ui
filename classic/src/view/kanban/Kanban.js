Ext.define('MySpace.view.kanban.Kanban', {
    extend: 'Ext.tab.Panel',
    xtype: 'kanban', //fixme: search what is the best practise?

    requires:[
        'MySpace.view.kanban.KanbanModel'
    ],
    // controller: 'kanban',
    viewModel: 'kanban',

    title: 'Kanban Board',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',

        items: [{
            xtype: 'combobox',
            hideLabel: true,
            displayField: 'name',
            queryMode: 'local',
            emptyText: 'Select a board...',
            selectOnFocus: true,
            width: 135,
            store: {
                type: 'kanbanboard'
            },
            indent: true
        }, '->', {
            iconCls: null,
            // glyph: 88,
            text: 'Create ',
            xtype: 'button'
        }, {
            iconCls: null,
            // glyph: 70,
            text: 'Edit',
            xtype: 'button'
        }, {
            iconCls: null,
            // glyph: 47,
            text: 'Delete',
            xtype: 'button'
        }]
    }],
    html: 'hello world',
});