dojo.provide('app.controllers.master.EntriPegawaiController');

dojo.require('app.views.master.EntriPegawaiPanel');
dojo.require('app.views.custom.Toolbar');

dojo.require('dijit.form.Button');
dojo.require('dijit.form.TextBox');
dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.TitlePane');
dojo.require('dijit.layout.BorderContainer');

dojo.declare('app.controllers.master.EntriPegawaiController', null, {
    test: function() {
        var entriPegawai = new app.views.master.EntriPegawaiPanel('Pegawai');
        var p = entriPegawai.getMainPanel();
        
        var mainPanel = dijit.byId('mainPanel');
        mainPanel.addChild(p);
    }
});
