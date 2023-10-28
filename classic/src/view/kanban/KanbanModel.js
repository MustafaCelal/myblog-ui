Ext.define('MySpace.view.kanban.KanbanModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.kanban',

    requires: [
        'MySpace.store.KanbanBoard',
    ],

    stores: {
        kanbanBoards: {
            type: 'kanbanboard',
            listeners: {
                beforeload: function (store, operation) {
                    debugger
                    console.log('Store yükleniyor...');
                },
                load: function (store, records, successful) {
                    debugger
                    if (successful) {
                        console.log('Store başarıyla yüklendi.');
                    } else {
                        console.log('Store yükleme hatası');
                    }
                }
            }
        }
    },
});