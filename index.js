var responsiveSlider = function() {
    var slider = document.getElementById('slider');
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById('slideWrap');
    var count = 1;
    var items = slideList.querySelectorAll('li').length;
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
    })

    var prevSlide = () => {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
        }else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function() {
        if(count < items) {
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = items) {
          slideList.style.left = "0px";
          count = 1;
        }
    };

    next.addEventListener("click", function(e) {
        e.preventDefault();
        nextSlide();
    });
      
    prev.addEventListener("click", function(e) {
        e.preventDefault();
        prevSlide();
    });
      
    setInterval(function() {
        nextSlide()
    }, 5000);
};

window.onload = function() {
    responsiveSlider();  
}

const filterContainer = document.querySelector('.filter__container');
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function(e) {
    if(e.target.classList.contains('academics')){
        filterContainer.className = 'filter__container academics';

        toggle.className = 'toggle academics';
    }else {
        filterContainer.className = 'filter__container ourCollege';

        toggle.className = 'toggle';
    }
})

// filter gallery
const galleryLists = document.querySelectorAll('.gallery__list');
const collegeCard = document.querySelectorAll('.college__card');
galleryLists.forEach((list) => {
    list.addEventListener('click',function() {
        let j = 0;
        while (j < galleryLists.length) {
            galleryLists[j].classList.remove('active');
            j++;
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        
        for (let k = 0; k < collegeCard.length; k++) {
            collegeCard[k].classList.remove('active');
            collegeCard[k].classList.add('hide');

            if (collegeCard[k].getAttribute('data-item') == dataFilter || dataFilter == 'All') {
                collegeCard[k].classList.remove('hide');
                collegeCard[k].classList.add('active');
            }
        }

    })
})