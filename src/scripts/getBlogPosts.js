
const baseUrl = 'https://getedara.com';
const URL = `${baseUrl}/blog/wp-json/wp/v2/posts?per_page=6&sticky=true`;

new Vue({
    el: '#app',
    data() {
        return {
            posts: [],
        };
    },
    created() {
        axios.get(URL).then((response) => {
            this.posts = response.data;
            console.log(response);
        });
    },
    updated() {
        var blogSwiper = new Swiper('#blogSwiper', {
            slidesPerView: 3,
            spaceBetween: 10,
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                550: {
                    slidesPerView: 1,
                },
            },
            pagination: {
                el: '#blogSwiper .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.our-blog__next-btn',
                prevEl: '.our-blog__prev-btn',
            },
        });
    },
});
