
$('.slick-block').slick ({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
})

$('.creations__title').slick ({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
})

$('.all__content').slick ({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
})

$('.populars__slider').slick ({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 769,    
            settings: {
                slidesToShow: 2    
            }
        }
    ]
})

 $('.comments__blocks').slick ({
     slidesToShow: 4,    
     slidesToScroll: 1,
     responsive: [
         {
             breakpoint: 769,    
             settings: {
                 slidesToShow: 2    
             }
         }
     ]
 })

























