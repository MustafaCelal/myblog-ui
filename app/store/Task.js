Ext.define('MySpace.store.Task', {
    extend: 'Ext.data.Store',

    alias: 'store.task',

    model: 'MySpace.model.Task',

    data: [
        {task: 'Örnek Görev 1', dueDate: '2023-10-30', status: 'Tamamlanmadı'},
        {task: 'Örnek Görev 2', dueDate: '2023-11-15', status: 'Devam Ediyor'},
        {task: 'Örnek Görev 3', dueDate: '2023-12-05', status: 'Tamamlandı'}
    ]
});