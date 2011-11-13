dojo.provide('app.views.master.EntriPegawaiPanel');

dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.layout.BorderContainer');
dojo.require('dojox.grid.DataGrid');

dojo.require('app.views.custom.Toolbar');
dojo.require('app.views.master.form.EntriPegawaiForm');
dojo.require('app.views.master.grid.TablePegawai');

//dojo.require('app.stores.PegawaiStore');

dojo.declare('app.views.master.EntriPegawaiPanel', null, {
    toolbar: null,
    pegawaiTable: null,
    form: null,
    mainPanel: null,
    
    constructor: function(id, titlePanel) {
        this.initComponents(id, titlePanel);
    },

    initComponents: function(id, titlePanel) {
        this.toolbar = new app.views.custom.Toolbar({
			idAddBtn: 'idAddBtnPegawai',
			idEditBtn: 'idEditBtnPegawai',
			idDelBtn: 'idDelBtnPegawai',
			idSaveBtn: 'idSaveBtnPegawai',
			idCancelBtn: 'idCancelBtnPegawai'
		});
		
		this.pegawaiTable = new app.views.master.grid.TablePegawai().getTablePegawai();
		
		this.form = new app.views.master.form.EntriPegawaiForm();
        var contentPane = new dijit.layout.ContentPane({
            region: 'center',
            content: this.form
        });
        
        this.mainPanel = new dijit.layout.BorderContainer({
            id: id,
            title: titlePanel,
            closable: true,
            design:'sidebar',
            gutters:true,
            liveSplitters:true,
            style: 'height: 100%;width: 100%;'
        });
        
        this.mainPanel.addChild(this.toolbar);
        this.mainPanel.addChild(contentPane);
        this.mainPanel.addChild(new dijit.layout.ContentPane({
            align: 'right',
            region: 'leading',
            splitter: true,
            content: this.pegawaiTable.domNode,
            style: 'height: 100%;width: 20%;'
        }));
    },
    
    getMainPanel: function() {
        return this.mainPanel;
    }
});
