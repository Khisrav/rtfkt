var cnt = 1;
$('#open-sub-menu').on('click', function(){
    if (cnt % 2)$('#sub-menu').show(100);
    else $('#sub-menu').hide(100);
    cnt++;
});
$('#open-mobile-sub-menu').on('click', function(){
    $('#sub-overlay').css('visibility', 'visible');
});
$('#close-mobile-sub-menu').on('click', function(){
    $('#sub-overlay').css('visibility', 'hidden');
});
var text = $('#animated-text');
const animate = (element, position) => {
    element.css('transform', 'translateX('+position+'px)');
}
$(window).scroll(function(){
    if($(window).scrollTop() > 80) {
        $("#header").css("background", '#1f2028');
    } else {
       $("#header").css("background", 'transparent');
    }

    var lastKnownScrollPosition = window.scrollY;

    window.requestAnimationFrame(function(){
        animate(text, lastKnownScrollPosition * .4 - 600);
    });
});

var filtersCnt = 1;
$('#toggleFilters').on('click', function(){
    if (filtersCnt % 2){
        $(this).text('SHOW FILTERS');
        $('#filters-block').hide();
    } else {
        $(this).text('HIDE FILTERS');
        $('#filters-block').show();
    } filtersCnt++;
});