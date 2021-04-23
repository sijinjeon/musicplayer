
var listitems=document.querySelectorAll('li'); 
//listitems를 CSS중에서 'li'라고 되어있는 모든 셀렉터로 정의한다
for (var i = 0; i < listitems.length; i++) {
    console.log(listitems[i]);
//정의한 listitems를 끝날때까지 불러온다.

    // 클릭 이벤트를 설정해보자

    listitems[i].addEventListener('click',
    //listitems[i]라는 오브젝트를 불러왔고, 이벤트를 부를 때는 addEventListner라는 메소드를 사용한다. 
     function (e){
    //새로운 함수를 만들었다. 함수 이름은 없고, 인수에는 e가 들어간다.
        var li=e.target;
    //li 태그에 있는 인수를 지정한다. 너 내가 찍었어.
        var file=li.getAttribute('data-file');
    //file이라는 곳에 html의 li 속성에 있는 'data-file'을 불러와서 붙여줬다.
    //getAtrribute는 HTML에서 특정 속성을 지정하는 역할이다.
        var audio=document.querySelector('audio');
    //audio라는 곳에 CSS에 있는 audio라는 태그를 불러와서 붙여줬다.
        audio.setAttribute('src',file);
    //붙여준 audio에 audio 파일 링크를 넣어줬다.
        audio.play();
    //이제 li를 클릭하면 audio에 불러온 src 파일을 재생한다.
    });
}

