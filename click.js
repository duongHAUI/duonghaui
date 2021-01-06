var slides  = document.getElementsByClassName("mySlide");
        var x = 0,time = 10;
        showSlide(x);
        function prev(){
            x--;
            if(x<0){
                x   =  slides.length -1;
            }
            showSlide(x);
        }
        function next(){
            x++;
            if(x > (slides.length-1)){
                x = 0;
            }
            showSlide(x);
        }
        // setTimeout("autoSlide(x++)",time)
        // function autoSlide(a){
        //     // for(var i = 0; i< slides.length;i++){
        //     //     slides[i].style.display = "none";
        //     // }
        //     slides[a].style.display = "block";
        // }
        function showSlide(n){
            
            for(var i = 0; i< slides.length;i++){
                slides[i].style.display = "none";
            }
            slides[n].style.display = "block";
        }
        // care();
        var color = 0;
        function care(element){
            if(color == 0){
                element.style.color  = "red";
                color++;
            }
            else if(color ==1) {
                element.style.color  = "#fff";  
                color -=1;
            }   
            
        }

        var SecondHand_chosen__show = document.getElementById("SecondHand_chosen-show");
        function SecondHand_chosen(){
            
            if(SecondHand_chosen__show.style.display == "none"){
                SecondHand_chosen__show.style.display = "block";
            } 
            else{
                SecondHand_chosen__show.style.display = "none";
            }
        }
        function active__result(type){
            switch(type){
                case 'tinhtrang' : 
                    document.getElementById("SecondHand_chosen__text").textContent = document.getElementById("tinhtrang").textContent;
                    break;
                case 'sudung' : 
                    document.getElementById("SecondHand_chosen__text").textContent = document.getElementById("sudung").textContent;
                    break;
                case 'moi' : 
                    document.getElementById("SecondHand_chosen__text").textContent = document.getElementById("moi").textContent;
                    break;    
            }
            
        }
        var MakeSearch_chosen_show = document.getElementById("MakeSearch_chosen-show");
        function MakeSearch_chosen(){
            
            if(MakeSearch_chosen_show.style.display == "none"){
                MakeSearch_chosen_show.style.display = "block";
            } 
            else{
                MakeSearch_chosen_show.style.display = "none";
            }
        }
        var chosen_drop__show = document.getElementById("chosen-drop-show");
        function chosen_drop_show(){
            
            if(chosen_drop__show.style.display == "none"){
                chosen_drop__show.style.display = "block";
            } 
            else{
                chosen_drop__show.style.display = "none";
            }
        }






        // var boxSlideItem = document.getElementsByClassName("main--box__cars-slide-item");
        // var prev_Slide = document.getElementById("btn-slide-prev");
        // var next_Slide = document.getElementById("btn-slide-next");
        // XE BÁN CHẠY TRONG THÁNG
        // var counter = 0;
        // check_prev();
        // function check_prev(){
        //     if(counter==0){
        //         prev_Slide.style.display = "none";
        //     }
        //     else{
        //         prev_Slide.style.display = "block";
        //     }
        // }
        // function check_next(){
        //     if(counter == 4){
        //         next_Slide.style.display = "none";
        //     }
        //     else{
        //         next_Slide.style.display = "block";
        //     }
        // }
        // function next_slide(){
        //     if(counter <= 3 ){
        //         boxSlideItem[counter].style.display = "none";
        //         boxSlideItem[counter].style.transtion = "2s";
        //         counter++;
        //         boxSlideItem[counter + 3].style.display = "block";
        //         check_prev();
        //         check_next();
        //     }
            
        // }
        // function prev_slide(){
        //     if(counter >0 ){
        //         boxSlideItem[counter+3].style.display = "none";
        //         boxSlideItem[--counter].style.display = "block";
        //         check_prev();
        //         check_next();
        //     }
            
        // }
        var carSlideList = document.getElementById("main--box__cars-slide-list");
        var carSlideListItem = document.getElementsByClassName("main--box__cars-slide-item");
        var carSlidePrev = document.getElementById("btn-slide-prev");
        var carSlideNext = document.getElementById("btn-slide-next");
        var counter = 1;
        var size = carSlideListItem[0].clientWidth;
        carSlideNext.addEventListener('click',()=>{
            carSlideList.style.transition = "transform 1s ease-in-out";
            carSlideList.style.transform =  'translateX('+(-size*counter)+'px)';
            counter++;
            if(counter>1){
                carSlidePrev.style.display = "block";
            }
            console.log(counter);
            if(counter == (carSlideListItem.length - 3)){
                carSlideNext.style.display = "none";
            }
        })
        carSlidePrev.addEventListener('click',()=>{
            carSlideList.style.transition = "transform 1s ease-in-out";
            if(counter==1){
                carSlidePrev.style.display = "none";
            }
            carSlideNext.style.display = "block";
            counter--;
            carSlideList.style.transform =  'translateX('+(-size*counter)+'px)';
        })
        if(counter==1){
            carSlidePrev.style.display = "none";
        }



        // Phản hồi của kahsch hàng
        // var feedback_top = document.getElementById("feedback-top");
        // var feedback_bottom = document.getElementById("feedback-bottom");
        // var feedback_left_title = document.getElementById("feedback-left-title");
        // var registration = document.getElementById("registration");
        // var feedback_right_compress = document.getElementById("feedback-right-compress");
        // var feedback_right_minus = document.getElementById("feedback-right-minus");
        // var feedback_right_times = document.getElementById("feedback-right-times");
        // var main_feedbeack = document.querySelector(".main-feedbeack");
        // feedback_top.addEventListener('click',()=>{
        //     feedback_bottom.style.display = "block";
        //     feedback_left_title.style.display = "none";
        //     registration.style.display = "block";
        //     feedback_right_minus.style.display = "block";
        //     feedback_right_times.style.display  = "block"; 
        //     feedback_right_times.addEventListener('click',()=>{
        //         feedback_bottom.style.height = "0px";
        //         feedback_right_minus.style.display = "none";
        //         feedback_right_times.style.display  = "none"; 
        //     }) 
        // });  
        $("#feedback-top").click(function(){
            $("#feedback-bottom").toggle();
            $("#feedback-left-title").toggle();
            $("#registration").toggle();
            $("#feedback-right-minus").toggle();
            $("#feedback-right-times").toggle();
        })
          
        