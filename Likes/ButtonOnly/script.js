var likes = 0;

function likes_counter(element){
    var p = document.querySelector("p");
    p.innerText = likes++ + " Like(s)";
}