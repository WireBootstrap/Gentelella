(function () {
    
    $.fn.ebGtKpi1 = function (config) {

        var self = this;
        
        // add classes to the beginning of the root container markup
        eb.ui.prependClass(self, "eb-gt-kpi1 eb-plugin");

        // create the component class with all the helper stuff
        var cmp = new eb.ui.Component(this, config, _defaults());

        // define the schema defaults
        var schema = cmp.updateFieldSchema({ value: "value", name: "name", cssValue: "cssValue", valueChange: "valueChange", lblChange: "lblChange", cssChange: "cssChange" });

        // pull the compiled configuration object
        var cfg = cmp.config();


        // component private init
        function _init() {
            _ensureComponent(function () {
                cmp.bindData(_bind);
            });
        }

        // bind with data
        function _bind() {

            // pull the data table
            var d = cmp.data();

            // grab the template to process
            var t = _template();

            var r = d.Rows[cfg.tablerow || cfg.rowIndex || 0];

            if (!r) {
                r = d.newRow();
                r[schema.cssValue] = "";
                r[schema.name] = "";
                r[schema.value] = 0;
                r[schema.cssChange] = "";
                r[schema.lblChange] = "";
                r[schema.valueChange] = "0";
            }

            //{ value: "value", name: "name", cssValue: "cssValue", valueChange: "valueChange", lblChange: "lblChange", cssChange: "cssChange" }

            var sr = cmp.schemaRow(r);

            t = t.format(sr.val(schema.cssValue), sr.val(schema.name), sr.val(schema.value), sr.val(schema.cssChange) || "", sr.val(schema.valueChange), sr.val(schema.lblChange));

            self.empty().append(t);

            // notify everyone that we are done
            cmp.ready();

        }

        // load any dependencies
        function _ensureComponent(cb) {
            cb();
        }

        // return default config
        function _defaults() {
            return { autoInit: true };
        }

        // HTML template
        function _template() {
            
            return "<div class=\"tile_count\"><div class=\"tile_stats_count\">" +
                "<span class=\"count_top\"><i class=\"{0}\"></i> {1}</span>" +
                "<div class=\"count\">{2}</div>" +
                "<span class=\"count_bottom\"><i class=\"{3}\">{4} </i> {5}</span>" +
                "</div></div>";

        }

        this.getData = function () {
            return cmp.data();
        }

        this.config = function () {
            return cfg;
        }

        this.databind = function (data) {
            if (data) cmp.data(data);
            _bind();
        }

        this.initialize = function () {
            _init();
            return this;
        }

        if (cfg.autoInit)
            _init();

        return this;
    }

})(); 
