// - suddivisione sommaria delle aree del sito.
// - individuare le parti che si possono ripetere e implementarle con Vue
// - iniziare l'inserimento dei singoli elementi che si ripetono
// - individuare elementi che possono essere rimpiazzati da componenti 
// - inserire transizioni/animazioni


//Navbar
// Vue.component('navbar', {
//     template: '<div>123</div>',
// });


let app = new Vue({
    el: '#root',
    data: {
        headerTopMenu: ['sign in', 'about us', 'contact us', 'buy now'],
        headerBottomMenu: ['home', 'elements', 'features', 'pages', 'portfolio', 'blog', 'shop'], 
        footerBottomMenu:["FAQ's", "sitemap", "contact us"],
        socials: [
            {
            tag:'design',
            comment: 'If you have any suggestion for the next updates, let up know.',
            date: {hour: 12, minute: 34, day: 19, month :'Jan', year: 2020},
            photos: 'blog/img/29739607_2020680068220520_4509928046932787200_n.jpg',
            },
            {
            tag:'brands',
            comment: 'If you have any suggestion for the next updates, let up know.',
            date: {hour: 12, minute: 34, day: 19, month :'Jan', year: 2020},
            photos: 'blog/img/30087804_253872848488989_8792603541668626432_n.jpg',
            },
            {
            tag:'video',
            comment: 'If you have any suggestion for the next updates, let up know.',
            date: {hour: 12, minute: 34, day: 19, month :'Jan', year: 2020},
            photos: 'blog/img/29415620_196477127626244_3250318472361541632_n.jpg',
            },
            {
            tag:'business',
            comment: 'If you have any suggestion for the next updates, let up know.',
            date: {hour: 12, minute: 34, day: 19, month :'Jan', year: 2020},
            photos: 'blog/img/30078414_1274410412703843_8290935809419247616_n.jpg',
            },
            {
            tag:'travel',
            comment: 'If you have any suggestion for the next updates, let up know.',
            date: {hour: 12, minute: 34, day: 19, month :'Jan', year: 2020},
            photos: 'blog/img/30077195_2066750973610181_3733150062893596672_n.jpg',
            },
            {
            tag:'shopping',
            comment: 'If you have any suggestion for the next updates, let up know.',
            date: {hour: 12, minute: 34, day: 19, month :'Jan', year: 2020},
            photos: 'blog/img/29415304_166583630713703_1032667922171953152_n.jpg',
            },
            
            
        ],
        tags:{
            content: ['all', 'gadgets', 'photography', 'lifestyle', 'fashion', 'recipies', 'travel', 'sport', 'living', 'tech'],
            start: 0,
            end: function() {return this.content.length},
            show: 5,
        },
        filterPosts: [],
        posts: [
            {   //evidence
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-46.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'gadgets',
                title: 'gadgets that make your smartphone even smarter',
                imgURL: 'blog/img/blog-47.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'travel',
                title: '20 top-rated tourist attractions in manhattan',
                imgURL: 'blog/img/blog-48.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'lifestyle',
                title: 'the best way to ride a motorcycle',
                imgURL: 'blog/img/blog-49.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'travel',
                title: '5 fun things to do at the beach',
                imgURL: 'blog/img/blog-50.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'recipies',
                title: 'amazing fresh fruit and herb drinks for the summer',
                imgURL: 'blog/img/blog-51.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'gadgets',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                imgURL_wide: 'blog/img/blog-55 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'travel',
                title: '5 lovely walks in New York',
                imgURL: 'blog/img/blog-59.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'recipies',
                title: 'Tips to help you quicky prepare your lunch',
                imgURL: 'blog/img/blog-66.jpg',
                imgURL_wide: 'blog/img/blog-66 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'sport',
                title: 'Ranking the greatest players in basketball',
                imgURL: 'blog/img/blog-56.jpg',
                imgURL_wide: 'blog/img/blog-56 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'fashion',
                title: '4 ways to look cool in glasses',
                imgURL: 'blog/img/blog-57.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //recent
                tag: 'living',
                title: 'Top camper trailer towing tips',
                imgURL: 'blog/img/blog-58.jpg',
                imgURL_wide: 'blog/img/blog-58 (1).jpg',
                description: 'Lorem ipsumdolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: true,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
                {
                tag: 'travel',
                title: 'main reasons to stop texting and driving',
                imgURL: 'blog/img/blog-65.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: true,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
                {
                tag: 'tech',
                title: 'Why should I buy a smartwatch',
                imgURL: 'blog/img/blog-67.jpg',
                imgURL_wide: 'blog/img/blog-67 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: true,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
                {
                tag: 'tech',
                title: 'The best augmented reality smartglasses',
                imgURL: 'blog/img/blog-68.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: true,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
                {
                tag: 'recipies',
                title: '12 healthiest foods to eat for breakfast',
                imgURL: 'blog/img/blog-69.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: true,
                evidence: false,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //featured
                //author
                tag: 'recipies',
                title: '12 healthiest foods to eat for breakfast',
                imgURL: 'blog/img/blog-69.jpg',
                imgURL_wide: '', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                comments: 12,
                popular: false,
                recent: false,
                evidence: false,
                featured: true,
                author_img: 'blog/img/avatar.jpg',
                author_overview: 'lorem ipsum...',
                },  
        ],

        about:[
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem iste et nulla architecto cum magni sed necessitatibus possimus repudiandae tenetur!",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem iste et nulla architecto cum magni sed necessitatibus possimus repudiandae tenetur!",
        ],

    },
    computed: {
        cardpost: function(){
            return this.posts.filter(element =>{
                return element.evidence === true;
            });
        },
        popularpost: function() {
            return this.posts.filter(element =>{
                return element.popular === true;
            });
        },
        recentpost: function(){
            return this.posts.filter(element =>{
                return element.recent === true;
            });
        },
        wideposts: function(){
            return this.posts.filter(element => {
                return element.imgURL_wide !=='';
            });
        },
        featuredpost: function(){
            return this.posts.filter(element =>{
                return element.featured === true;
            });
        },
        tagContent: function(){
            return this.tags.content;
        }
    },
    methods: {
        //Avanzamento della scrollbar contenente i tags-button
        prev: function(){
            if (this.tags.start === 0) {
                return
            }
            else{
                return this.tags.start--;
            }
        },
        next: function(){
            if (this.tags.start + this.tags.show === this.tags.end()) {
                return
            }
            else{
                return this.tags.start++;
            }
        },
        postFilter: function (tag) {
            const wideposts = this.wideposts;
            this.filterPosts = wideposts;
            this.filterPosts = wideposts.filter(element =>{
                if(tag === 'all'){
                    return element;
                }
                else{
                    return element.tag === tag; 
                }
            });
        },
    },
    created(){},
    mounted(){
        this.postFilter('all');
    },

});