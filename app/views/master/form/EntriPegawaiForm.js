dojo.provide('app.views.master.form.EntriPegawaiForm');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');
dojo.require('dijit.form._FormWidget');

dojo.require('dijit.form.TextBox');

//dojo.declare('app.views.master.form.EntriPegawaiForm', [dijit.form._FormWidget], {
dojo.declare('app.views.master.form.EntriPegawaiForm', [dijit._Widget, dijit._Templated], {
    id: 'entriPegawaiForm',
    region: 'center',
    pegawaiName: '',
    
    alamat: null,

    widgetsInTemplate: true,
    
    templateString: dojo.cache('app.views.templates', 'master/form/FormPegawai.html')
});
