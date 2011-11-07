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
    
    widgetsInTemplate: true
});
