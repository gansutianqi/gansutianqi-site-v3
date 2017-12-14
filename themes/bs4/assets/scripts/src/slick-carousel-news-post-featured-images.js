export default function slickCarouselNewsPostFeaturedImages() {
    $('.slick-carousel-news-post-featured-images').slick({
        dots: true,
        slidesToShow:2,
        slidesToScroll:1,
        infinite: true,
        arrows:false,
        //fade:true,
        responsive: [
            {
                breakpoint:2500,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
}

