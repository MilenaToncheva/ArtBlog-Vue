import axiosDb from '@/axios-database';

export default {
    name:'AriclesMixin',
    data: function() {
        return { 
            articles: [],
            selectedArticle:Object,
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
               const allArticlesRes = res.data.filter(a=>a.authorEmail===localStorage.getItem('email'));
               // console.log(allArticlesRes);
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
      async  getArticle (id){
            //to check and ammend
            axiosDb.get(`articles/${id}.json`)
            .then((res)=>{
                console.log(res)
                this.selectedArticle=res.data;
                console.log(this.selectedArticle)
            })
            .catch((err)=>{
                this.message=err.message;
            })
            
        },

        createArticle(data){
            console.log(data);
            axiosDb
                .post(`articles.json`,data).then((res)=>{
                                console.log(res);
                                this.$router.push('/home');
                            }).catch((err)=>{
                                 console.log(err)
                                    });
    
        },
        deleteArticle(id){
        axiosDb.delete(`articles.json`,id)
        .then(()=>{
            //to think where to view the message
            this.message='Article successfully deleted!'
            this.$router.push('/home');
        }).catch((err)=>{
            this.message=err.message;
            })
        },
        editArticle(data){
            axiosDb
            .put(`articles.json`,data).then((res)=>{
                            console.log(res);
                            this.$router.push('/home');
                        }).catch((err)=>{
                             console.log(err)
                                });
        }

    }
    
}