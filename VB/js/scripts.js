/* 行事曆
--------------------------------------------------------------------- */
var opt = {
   //dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
   dayNamesMin:["日","一","二","三","四","五","六"],
   monthNames:["1","2","3","4","5","6","7","8","9","10","11","12"],
   monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],
   //monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   prevText:"上月",
   nextText:"次月",
   weekHeader:"週",
   showMonthAfterYear:true,
   dateFormat:"yy/mm/dd",
   changeYear: true,
   changeMonth: true
   };

$(function(){
  // $( ".input-date" ).datepicker(opt);

  // 表格內的操作按鈕動作
  // $('.table-row-func').hover(function(){
  //   var tfl = $(this).find('.table-function-list');
  //   var tfl_w = $(this).find('a').length * 36; // 算出寬度
  //   tfl.toggleClass('hover').css('width',tfl_w);
  // });

});

/* Mobile Side Menu Accordion
--------------------------------------------------------------------- */
$(function() {
  'use strict';

  $('.sideNav-toggle').click(function(){
    $('.rwd-sidenav').addClass('show');
  });
  $('.smenu-close').click(function(){
    $('.rwd-sidenav').removeClass('show');
  });

  // 選單裡的 Accordion
  $('.rwd-sidenav > ul > li').click(function() {
      var $this = $(this);
      var $target = $this.find('ul');

      if(!$this.hasClass('active')){
         $('ul', $this.parent()).slideUp(100);
         $this.addClass('active');
         $target.slideDown(100);
      } else {
         $this.removeClass('active');
         $('ul', $this.parent()).slideUp(100);
      }
  });

  // 有下一層的加上記號
  var menuLv1 = $('.rwd-sidenav > ul > li');
  var menuLv2 = $('.rwd-sidenav > ul > li > ul > li');
  menuLv1.has('ul').addClass('submenu');
  menuLv2.has('ul').addClass('submenu');

});

/* Detect Mobile Devices
--------------------------------------------------------------------- */
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (!isMobile.any()) {
  $( ".input-date" ).datepicker(opt);
}
if(isMobile.any()) {
   $( ".input-date" ).attr('type','date');
}