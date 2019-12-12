$(function(){
　　　//menubar
    $(function(){
        // ▼マウスが載ったらサブメニューを表示
        $("ul.menubar li").mouseenter(function(){
           $(this).siblings().find("ul").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
           $(this).children().slideDown(150);     // 自分のサブメニューを表示する。
        });
        // ▼どこかがクリックされたらサブメニューを消す
        $('html').click(function() {
           $('ul.menubar ul').slideUp(150);
        });
     });


     //ギャラリーにスライダーつける
     let swiper = new Swiper('.swiper-container',{
        effect: 'coverflow',
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination',
        },
     })


    //  メニューのギャラリー押したらギャラリーのとこまで移動
     $('#gallery').on('click', function(){
         console.log(123)

        // スクロールした要素のいちを取得して
        let target = $('.photos').offset().top;
        console.log(target);

    //     // 取得した要素の場所に移動
      $('html, body').animate({scrollTop: target }, 1500);
  //      console.log(123);
     })


    //アクセス  
     $('#access').on('click', function(){
         console.log(123)

        // スクロールした要素のいちを取得して
        let target = $('.acsses').offset().top;
        console.log(target);

    //     // 取得した要素の場所に移動
      $('html, body').animate({scrollTop: target }, 1500);
  //      console.log(123);
     })


    //  コンタクト
     $('#contact').on('click', function(){
         console.log(123)

        // スクロールした要素のいちを取得して
        let target = $('.contact').offset().top;
        console.log(target);

    //     // 取得した要素の場所に移動
      $('html, body').animate({scrollTop: target }, 1500);
  //      console.log(123);
     })

    //  Topへ戻る
     $('#btn').on('click', function(){
         console.log(123)
         

    //     // 取得した要素の場所に移動
      $('html, body').animate({scrollTop: 0 }, 1500);
  //      console.log(123);
     })

     
     // フワッと出す
     $(window).on('scroll',function(){
         console.log(123)
         let now = $(window).scrollTop()
     
         // ターゲットになる要素の位置
         let target = $('#scroll').offset().top;
     
         // 高さを取得
         let height = window.innerHeight
         if (now + height > target){
             console.log('超えました')
             $('#scroll').removeClass('hide')
         }else {
             $('#scroll').addClass('hide');
         }
     })
    
})
