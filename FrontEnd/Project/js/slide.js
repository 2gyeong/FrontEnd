
 // 이미지 자동으로 넘기기
    let index = 0;   //이미지에 접근하는 인덱스
        slideShow();
    
    function slideShow() {
        let i;
        let x = document.getElementsByClassName("slide1");  //slide1에 대한 dom 참조
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
        }
        index++;
        if (index > x.length) {
            index = 1;  //인덱스가 초과되면 1로 변경
        }   
        x[index-1].style.display = "block";
        setTimeout(slideShow, 4000);   //함수를 4초마다 호출
        }

