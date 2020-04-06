import axiosDb from '@/axios-database';

export default {
    name:'AriclesMixin',
    data: function() {
        return { 
            articles: [],
            article:Object,
            message:''
         }
    },
    methods: {
        async getAllArticles() {
            try {
                const res = await axiosDb.get(`articles.json`);
                const allArticlesRes = res.data;
                for (const articleId in allArticlesRes) {
                  this.articles.push({
                    articleId,
                    ...   allArticlesRes[articleId]
                  });
                }
            } catch(err) {
                console.log(err);
            }
        },
        async getMyArticles() {
            try {
                const res = await axiosDb.get(`articles.json`);
               
               // console.log(res.data);
               const allArticlesRes = res.data;
               // console.log(allArticlesRes);
               for (const articleId in allArticlesRes) {
                this.articles.push({
                  articleId,
                  ...   allArticlesRes[articleId]
                });
              }
                this.articles=this.articles.filter(a=>a.authorEmail===localStorage.getItem('email'));
            } catch(err) {
                console.log(err);
            }
        },
        getArticle (id){
            axiosDb.get(`articles/${id}.json`)
            .then((res)=>{
               // console.log(res)
                this.article=res.data;
               // console.log(this.article)
            })
            .catch((err)=>{
                this.message=err.message;
            })
            
        },

        createArticle(data){
            console.log(data);
            axiosDb
                .post(`articles.json`,data).then(()=>{
                             
                                this.$router.push('/home');
                            }).catch((err)=>{
                                 console.log(err)
                                    });
    
        },
        deleteArticle(id){
        axiosDb.delete(`articles/${id}.json`)
        .then(()=>{
            //to think where to view the message
            this.message='Article successfully deleted!'
            this.$router.push('/home');
        }).catch((err)=>{
            this.message=err.message;
            })
        },
        editArticle(id,data){
          //  console.log(data);
            axiosDb
            .put(`articles/${id}.json`,data).then(()=>{
                           
                            this.$router.push('/home');
                        }).catch((err)=>{
                             console.log(err)
                                });
        }

    }
    
}