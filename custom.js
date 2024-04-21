
const cat = document.querySelector("section");

cat.addEventListener("click", (e)=> {
    //명령문
    e.preventDefault();//링크 접속할 떄 바뀌는거 막는 거
    console.log("고양이를 클릭했습니다.");
    alert("야옹~");
});
