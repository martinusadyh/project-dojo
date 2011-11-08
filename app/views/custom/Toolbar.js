dojo.provide('app.views.custom.Toolbar');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');

dojo.require('dijit.Toolbar');

dojo.require('dijit.form.Button');

dojo.declare('app.views.custom.Toolbar', [dijit.Toolbar], {
    addBtn: 'Add',
    editBtn: 'Edit',
    delBtn: 'Delete',
    saveBtn: 'Save',
    cancelBtn: 'Cancel',
    region: 'top',
    
    templateString: dojo.cache('app.views.templates', 'Toolbar.html'),
    
    widgetsInTemplate: true,

    postCreate: function() {
        this.inherited(arguments);
    },
    
    addAction: function() {
        console.log('[app.views.custom.Toolbar] Add Action');
    },

    editAction: function() {
        console.log('[app.views.custom.Toolbar] Edit Action');
    },

    delAction: function() {
        console.log('[app.views.custom.Toolbar] Delete Action');
    },

    saveAction: function() {
        console.log('[app.views.custom.Toolbar] Save Action');
    },

    cancelAction: function() {
        console.log('[app.views.custom.Toolbar] Cancel Action');
    }
});
