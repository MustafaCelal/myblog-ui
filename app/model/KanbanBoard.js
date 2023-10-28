Ext.define('MySpace.model.KanbanBoard', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'name',  type: 'string'},
        {
            name: 'columns',
            type:'string'
            // reference: 'column'
        },

    ]
});