dojo.provide('app.controllers.master.EntriPegawaiController');

dojo.require('app.views.master.EntriPegawai');

dojo.require('dijit.form.Button');
dojo.require('dijit.form.TextBox');
dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.TitlePane');
dojo.require('dijit.layout.BorderContainer');

app.controllers.master.EntriPegawaiController = {
    test: function() {
        console.log('Initialize entriPegawaiPanel');
        var entriPegawai = new app.views.master.EntriPegawai();
        
        var mainPanel = dijit.byId('mainPanel');
        mainPanel.addChild(entriPegawai);
    }
};
