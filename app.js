/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MySpace.Application',

    name: 'MySpace',

    requires: [
        // This will automatically load all classes in the MySpace namespace
        // so that application classes do not need to require each other.
        'MySpace.*'
    ],

    // The name of the initial view to create.
    mainView: 'MySpace.view.main.Main'
});
