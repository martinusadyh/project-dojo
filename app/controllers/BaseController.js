dojo.provide('app.controllers.BaseController');

dojo.require('app.controllers.master.EntriPegawaiController');

app.controllers.BaseController = {
    init: function() {
        this.startup();
    },
    
    startup: function() {
        // init datastore here
        this.initUIListener();
    },
    
    // initialize all widget event
    initUIListener: function() {
        dojo.connect(dojo.byId('mn_konfigurasi'), 'onclick', this, function(evt) {
            this.menuKonfigurasi();
        });
        
        dojo.connect(dojo.byId('mn_logout'), 'onclick', this, function(evt) {
            this.menuLogout();
        });
        
        dojo.connect(dojo.byId('mn_entri_pegawai'), 'onclick', this, function(evt) {
            this.menuEntriPegawai();
        });
        
        dojo.connect(dojo.byId('mn_entri_harilibur'), 'onclick', this, function(evt) {
            this.menuEntriHariLibur();
        });
    },
    
    menuKonfigurasi: function() {
        console.log('menu konfigurasi');
    },
    menuLogout: function() {
        console.log('menu logout');
    },
    menuEntriPegawai: function() {
        app.controllers.master.EntriPegawaiController.test();
    },
    menuEntriHariLibur: function() {
        var pegawaiPanel = dijit.byId('entriPegawaiPanel');
        
        if (pegawaiPanel != null) {
            pegawaiPanel.setPegawaiNameAttr('martin');
        }
    }
};
