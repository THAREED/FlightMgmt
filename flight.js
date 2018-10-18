  // var table = document.getElementById("myTable");
  // $.getJSON('flightInfo.json',function(data)
  // {
  //   console.log('Flight information is already dowloaded.');
  //     var content;
  //     var item = [];
  //     var count1 = 0;
  //         $.each(data,function (key,value)
  //         {
  //             var row = table.insertRow(0);
  //             var cell1 = row.insertCell(0);
  //             var cell2 = row.insertCell(1);
  //             var cell3 = row.insertCell(2);
  //             var cell4 = row.insertCell(3);
  //             var cell5 = row.insertCell(4);
  //             cell1.innerHTML = '<a style="font-size:30px; color:#2490d8; text-shadow: 2px 2px #f6cd61;" href="#">'+value.price+' <i class="fa fa-btc"></i></a>';
  //             cell2.innerHTML = value.airline;
  //             cell3.innerHTML = value.takeoff;
  //             cell4.innerHTML = value.landing;
  //             cell5.innerHTML = '<h style="font-weight:1000;">'+value.stop+'<a style="font-weight:300;" href="#"> details </a><a href="#"> <span class="glyphicon glyphicon-envelope"> </span></a><a href="#"> <span class="glyphicon glyphicon-print"> </span> </a></h>';
  //         });
  //
  //     $.fn.pageMe = function(opts){
  //         var $this = this,
  //             defaults = {
  //                 perPage: 3,
  //                 showPrevNext: true,
  //                 hidePageNumbers: false
  //             },
  //         settings = $.extend(defaults, opts);
  //         var listElement = $this;
  //         var perPage = settings.perPage;
  //         var children = listElement.children();
  //         var pager = $('.pager');
  //         if (typeof settings.childSelector!="undefined") {
  //             children = listElement.find(settings.childSelector);
  //         }
  //
  //         if (typeof settings.pagerSelector!="undefined") {
  //             pager = $(settings.pagerSelector);
  //         }
  //
  //         var numItems = children.size();
  //         var numPages = Math.ceil(numItems/perPage);
  //
  //         pager.data("curr",0);
  //
  //         if (settings.showPrevNext){
  //             $('<li><a href="#" class="prev_link"> « </a></li>').appendTo(pager);
  //         }
  //         var curr = 0;
  //         while(numPages > curr && (settings.hidePageNumbers==false)){
  //             $('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
  //             curr++;
  //         }
  //
  //         if (settings.showPrevNext){
  //             $('<li><a href="#" class="next_link"> » </a></li>').appendTo(pager);
  //         }
  //
  //         pager.find('.page_link:first').addClass('active');
  //         pager.find('.prev_link').hide();
  //         if (numPages<=1) {
  //             pager.find('.next_link').hide();
  //         }
  //         pager.children().eq(1).addClass("active");
  //         children.hide();
  //         children.slice(0, perPage).show();
  //
  //         pager.find('li .page_link').click(function(){
  //             var clickedPage = $(this).html().valueOf()-1;
  //             goTo(clickedPage,perPage);
  //             return false;
  //         });
  //         pager.find('li .prev_link').click(function(){
  //             previous();
  //             return false;
  //         });
  //         pager.find('li .next_link').click(function(){
  //             next();
  //             return false;
  //         });
  //
  //         goTo(0);
  //         function previous(){
  //             var goToPage = parseInt(pager.data("curr")) - 1;
  //             goTo(goToPage);
  //         }
  //
  //         function next(){
  //             goToPage = parseInt(pager.data("curr")) + 1;
  //             goTo(goToPage);
  //         }
  //
  //         function goTo(page){
  //             var startAt = page * perPage,
  //                 endOn = startAt + perPage;
  //
  //             children.css('display','none').slice(startAt, endOn).show();
  //
  //             $("#flightInPage").text(( (page+1)*3 ));
  //             $("#shownText").text(" of "+numItems+" flights shown - oneway");
  //
  //             console.log('page: '+(page+1));
  //             if (page>=1) {
  //                 pager.find('.prev_link').show();
  //             }
  //             else {
  //                 pager.find('.prev_link').hide();
  //             }
  //
  //             if (page<(numPages-1)) {
  //                 pager.find('.next_link').show();
  //             }
  //             else {
  //                 pager.find('.next_link').hide();
  //                 $("#flightInPage").text(numItems);
  //             }
  //
  //             pager.data("curr",page);
  //             pager.children().removeClass("active");
  //             pager.children().eq(page+1).addClass("active");
  //         }
  //     };
  //
  //       $(document).ready(function()
  //       {
  //         $('#myTable').pageMe();
  //       });
  //   })
  //
  //
  //
  // .fail(function()
  // {
  //     console.log("Flight information failed to load.");
  // });
