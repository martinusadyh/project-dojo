dojo.provide('app.views.master.EntriPegawaiPanel');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');
dojo.require('dijit._Container')
dojo.require('dijit.layout._LayoutWidget');
dojo.require('dijit.form._FormWidget');

dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.layout.BorderContainer');

dojo.require('app.views.custom.Toolbar');
dojo.require('app.views.master.form.EntriPegawaiForm');

//dojo.declare('app.views.master.EntriPegawaiPanel', [dijit._Widget, dijit._Templated, dijit._Container, dijit._LayoutWidget], {
dojo.declare('app.views.master.EntriPegawaiPanel', [dijit._LayoutWidget], {

    id: 'entriPegawaiPanel',
    title: 'Data Pegawai',
    closable: true,
    
    widgetsInTemplate: true,
    
    templateString: dojo.cache('app.views.templates', 'EntriPegawaiPanel.html')
});
