dojo.provide('app.views.master.EntriPegawaiPanel');

dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.layout.BorderContainer');

dojo.require('app.views.custom.Toolbar');
dojo.require('app.views.master.form.EntriPegawaiForm');

dojo.declare('app.views.master.EntriPegawaiPanel', null, {
    toolbar: null,
    form: null,
    mainPanel: null,
    
    constructor: function(titlePanel) {
        this.initComponents(titlePanel);
    },

    initComponents: function(titlePanel) {
        this.toolbar = new app.views.custom.Toolbar();
        this.form = new app.views.master.form.EntriPegawaiForm();
        this.mainPanel = new dijit.layout.BorderContainer({
            title: titlePanel,
            closable: true,
            design:'sidebar',
            gutters:true,
            liveSplitters:true,
            style: 'height: 100%;width: 100%;'
        });
        var contentPane = new dijit.layout.ContentPane({
            region: 'center',
            content: this.form
        });        
        
        this.mainPanel.addChild(new app.views.custom.Toolbar());
        this.mainPanel.addChild(contentPane);
        this.mainPanel.addChild(new dijit.layout.ContentPane({
            align: 'right',
            region: 'leading',
            splitter: true,
            content: 'Hiii',
            style: 'height: 100%;width: 20%;'
        }));
    },

    getMainPanel: function() {
        return this.mainPanel;
    }
});
