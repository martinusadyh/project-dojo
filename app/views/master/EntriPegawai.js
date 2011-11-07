dojo.provide('app.views.master.EntriPegawai');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');

dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.TitlePane');
dojo.require('dijit.layout.BorderContainer');

dojo.require('dijit.form.Button');
dojo.require('dijit.form.TextBox');

dojo.declare('app.views.master.EntriPegawai', [dijit._Widget, dijit._Templated], {
    title: 'Test loh',
    closable: true,
    id: 'entriPegawaiPanel',
    
    pegawaiName: 'nnn',
    
    alamat: null,
    
    btnLabel: 'OK',
    
    templateString: dojo.cache('app.views.master.template', 'FormPegawai.html'),
    
    widgetsInTemplate: true,
    
    postCreate: function() {
        // Get a DOM  node reference for the root of our widget
        var domNode = this.domNode;
        console.log(domNode);
        this.inherited(arguments);
    },
    
    setPegawaiNameAttr: function(/*String*/value) {
        console.log('ganti nama pegawai jadi ' + value);
        //this._set('pegawaiName', value);
        console.dir(this.pegawaiNameNode);
        
        this.pegawaiNameNode.value = 'cc';
        //this.pegawaiNameNode.displayedValue = 'cc';
    },
    
    go: function() {
        console.log('value from pegawaiNode ' + this.pegawaiNameNode.value);
        console.dir('content of dom ' + this.pegawaiNameNode);
        //this.pegawaiName.value = 'martin';
        this._set('pegawaiName', 'martin');
        console.log('name ' + this.pegawaiName);
        this.pegawaiNameNode.value = this.pegawaiName;
        this.pegawaiNameNode.displayedValue = this.pegawaiName;
        this.attr('pegawaiName', 'test');
    }
});
