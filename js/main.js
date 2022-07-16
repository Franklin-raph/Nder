const scrollTopBtn = document.querySelector('#scrollToTop')
window.onscroll = function(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scrollTopBtn.style.display = "block"
    }else{
        scrollTopBtn.style.display = "none"
    }
}

scrollTopBtn.addEventListener('click', function(){
    window.scrollTo(0, 0)
    }
)