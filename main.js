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
            content: ['lorem', 'gadgets', 'photography', 'lifestyle', 'fashion', 'recipies', 'travel', 'sator', 'arepo', 'tenet', 'opera', 'rotas'],
            start: 0,
            end: function() {return this.content.length},
            show: 5,
        },
        posts: [
            {   //evidence
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //evidence
                tag: 'photography',
                title: 'how to take better concert pictures in 30 seconds',
                imgURL: 'blog/img/blog-49.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 19, month :'Jan', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: false,
                evidence: true,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'gadgets',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'gadgets',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'gadgets',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'gadgets',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //popular
                tag: 'gadgets',
                title: 'simple ways to have a pretty face',
                imgURL: 'blog/img/blog-55.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod dignissimos culpa minima dolor molestiae natus facere aspernatur iure quo, tempore qui impedit ipsum sapiente consequuntur! Quo repudiandae mollitia praesentium ratione facere aliquid excepturi. Hic nesciunt adipisci reiciendis magni excepturi?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: true,
                recent: false,
                evidence: false,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //recent
                tag: 'fashion',
                title: 'main reasons to stop texting and driving',
                imgURL: 'blog/img/blog-65.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg',
                description: 'Lorem ipsumdolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                comments: 12,
                popular: false,
                recent: true,
                evidence: false,
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
                {
                tag: 'fashion',
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
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
                {
                tag: 'fashion',
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
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
                {
                tag: 'fashion',
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
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
                {
                tag: 'fashion',
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
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                },
            {   //featured
                //author
                tag: 'recipies',
                title: 'tips to help you quickly prepare your lunch',
                imgURL: 'blog/img/blog-65.jpg',
                imgURL_wide: 'blog/img/blog-65 (1).jpg', 
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat, harum at maiores expedita deleniti?',
                visible: false,
                date: {day: 22, month :'Mar', year: 2020},
                author: 'John Doe',
                author_img: 'blog/img/blog-68.jpg',
                author_overview: 'lorem ipsum...',
                comments: 12,
                popular: false,
                recent: false,
                evidence: false,
                featured: true,
                author_img: 'blog/img/blog-68.jpg',
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
        tagsLength: function () {
            
        },
    },
    created(){},
    mounted(){},

});