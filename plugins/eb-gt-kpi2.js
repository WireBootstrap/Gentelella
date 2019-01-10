(function () {
    
    //ebTileStats
    $.fn.ebGtKpi2 = function (config) {

        var self = this;
        
        // add classes to the beginning of the root container markup
        eb.ui.prependClass(self, "eb-gt-kpi2 eb-plugin");
        
        // create the component class with all the helper stuff
        var cmp = new eb.ui.Component(this, config, _defaults());
        
        // define the schema defaults
        var schema = cmp.updateFieldSchema({ value: "value", name: "name", cssValue: "cssValue", description: "description" });
        
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

            var r = d.Rows[cfg.tablerow || 0];
            
            if (!r) {
                r = d.newRow();
                r[schema.cssValue] = "";
                r[schema.name] = 0;
                r[schema.value] = 0;
            }
                         
            var sr = cmp.schemaRow(r);

            t = t.format(sr.val(schema.cssValue), sr.val(schema.value), sr.val(schema.name), sr.val(schema.description) || "");
            
            
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
          return {autoInit: true};
        }

        // HTML template
        function _template() {
          
            return "<div class=\"tile-stats\">"+
                  "<div class=\"icon\"><i class=\"{0}\"></i></div>"+
                  "<div class=\"count\">{1}</div>"+
                  "<h3>{2}</h3>"+
                  "<p>{3}</p>"+
                "</div>";                    
        }

        this.getData = function () {
            return cmp.data();
        }

        this.config = function () {
            return cfg;
        }

        this.databind = function (data) {
            if(data) cmp.data(data);
            _bind();
        }

        this.initialize = function () {
            _init();
            return this;
        }

        if(cfg.autoInit)
            _init();

        return this;
    }

})(); 
