$(document).ready(function() {
   loadTabFunctionality();
   //loadAppropriateStyleSheet();
});

function loadTabFunctionality() {
   var tabContainers = $('div.tab');
   $('ul.tab-nav li a').click(function(){
        tabContainers.hide().filter(this.hash).show();        
        
        $('ul.tab-nav li').removeClass('selected');
        $(this).parent().addClass('selected');
        
        return false;        
   }).filter(':first').click();
}

function loadAppropriateStyleSheet() {
    var head = document.getElementsByTagName('head')[0]; 
    if($.browser.msie) {
        loadStyleSheet('ie');
    }
    else {
        loadStyleSheet('default');
    }
}

function loadStyleSheet(fileName) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", 'styles/' + fileName + '.css')
    document.getElementsByTagName("head")[0].appendChild(fileref)
}