$(document).ready(function(){

    $(window).scroll(function(){
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        let info_sec_top = $('.shop_info_sec').offset().top;
        console.log(bottom_of_window,info_sec_top);

        if(bottom_of_window >= info_sec_top){
            $('.info_img_box').animate({
                opacity : '1',
                left : 0
            },1500)

            $('.info_ment_box').animate({
                opacity : '1',
                right : 0
            },1500)
        }
        
    })
})