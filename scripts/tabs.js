$(document).ready(function() {
   loadTabFunctionality();
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