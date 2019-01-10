
(function() {

 $(document).ready(function () {

    if(typeof $.fn.ebFilterLabel != "undefined")
        $(".eb-filter-label").ebFilterLabel();
    if(typeof $.fn.ebCsvExport != "undefined")    
        $(".eb-csv-export").ebCsvExport();

 });

})();