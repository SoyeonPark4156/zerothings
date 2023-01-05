$(document).ready(function(){
    // top_banner 0 번째거 위치 초기화
    $('.tb_item').eq(0).css({top: 0});
 
    let inter_tb = "";
    let inter_tb_timer = 2000;
    let inter_tb_idx = 0;
 
    inter_tb = setInterval(() => {
       // 나갈거
       $('.tb_item').eq((inter_tb_idx) % 3).animate({
          top: '-100%'
       }, 500)
 
       // 들어올거
       $('.tb_item').eq((inter_tb_idx + 1) % 3).css({
          top: '100%'
       }).animate({
          top: '0'
       }, 500)
       
       inter_tb_idx+=1;
       
    }, inter_tb_timer);
    
    //탑배너 "X" 버튼 클릭하면 사라지게
    $(document).on('click','.tb_delete',function(){
        $(".top_banner").remove();
    })

    //헤더(SHOP 메뉴) - 드롭다운 메뉴바
    
  
 });   