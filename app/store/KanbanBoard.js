Ext.define('MySpace.store.KanbanBoard', {
    extend: 'Ext.data.Store',

    alias: 'store.kanbanboard',

    model: 'MySpace.model.KanbanBoard',

    data: {
        items: [
            {name: 'Example Board 1', columns: ['todo', 'done']},
            {name: 'Example Board 2', columns: ['todo', 'in progress', 'done']},
            {name: 'Example Board 3', columns: ['todo', 'done']}
        ]
    }
});