var app, timer, resizer;

$(function () {

    // ISOTOPE

    var iso = $('#isotope');
    iso.isotope({
        // options
        itemSelector : 'article',
        layoutMode : 'masonry'
    });
    iso.filter = function(filter){
        if(filter!='none'){
            $('#yield').fadeOut(500,function(){
                $(this).html('');
            });
            $('#tags a.active').removeClass('active');
            $('#tags a[data-slug='+filter+']').addClass('active');
        }
        $('#tags.highlight').removeClass('highlight');
        
        iso.isotope({ filter: '.tag-' + filter });
        console.log('.tag-' + filter)
    };

    // TAGS

    $.fn.tagcloud.defaults = {
        size: {start: 11, end: 16, unit: 'pt'},
        color: {start: '#999', end: '#999'}
    };

    $('#tags a').tagcloud();

    $('#isotope .tag-item').each(function(i,item){
        $(item).find('.tags li').each(function(j,tag){
            $(item).addClass('tag-' + $(tag).text());
        });
        $(item).find('.tags').remove();
    });

    function highlightTags(){
        $('#yield .tags li').each(function(j,tag){
            var tagslug = $(tag).text();
            $('#tags').addClass('highlight');
            $('#tags a[data-slug='+tagslug+']').addClass('active');
        });
        $('#yield .tags').remove();
    }

    // DATE

    moment.lang('pt-br');

    formatDates();

    // RESIZE

    $(window).resize(function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            window.resizer();
        },100);
    });

    resizer = function(){
        iso.isotope({
            itemSelector : 'article',
            layoutMode : $(window).width() < 580 ? 'spineAlign' : 'masonry'
        });
    };

    resizer();

    // DAVIS: PUSH STATE

    app = Davis(function () {
        this.use(Davis.googleAnalytics);
        this.get('/', function (req) {
            iso.filter('item');
        });
        this.get('/tags/:tag', function (req) {
            iso.filter(req.params['tag'].split('.html').join(''));
        });
        this.get('/projetos/:projeto', function (req) {
            //iso.filter(req.params['projeto'].split('.html').join(''));
            iso.filter('none');
            $('#content').addClass('loading');
            $('#yield').load(req.path + ' #content > *', function(){
                formatDates();
                highlightTags();
                $('#yield').hide(0).fadeIn(500);
                $("#yield").fitVids();
                setTimeout(function(){
                    $('#content').removeClass('loading');
                },10);
                setTimeout(function(){
                    $(window).scroll();
                },500);
            });
        });
    })

    app.start();

    if(window.location.hash != ""){
        var url = window.location.hash.split('#').join('');
        setTimeout(function(){
            Davis.location.assign(new Davis.Request(url));
        },1000);
    }

});

function formatDates(){
    if($('.date').length){
        $('.date').text(formatOneDate($('.date').text()));
    }
    if($('.post_content h1').text() == "perfil"){
        $('.date').remove();
    }
    if($('.post_content h1').text() == "360"){
        $('.date').remove();
    }
}

function formatOneDate(date){
    return moment(date).add('day',1).format("MMMM YYYY")
}