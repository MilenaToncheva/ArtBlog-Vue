import axiosDb from '@/axios-database';

export default {
    name:'AriclesMixin',
    data: function() {
        return { 
            articles: [],
            article:Object,
            
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
                this.$toast.error(err.message,'warning');
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
                this.$toast.error(err.message,'warning');
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
                this.$toast.error(err.message,'warning');
            })
            
        },

        createArticle(data){
            console.log(data);
            axiosDb
                .post(`articles.json`,data).then(()=>{
                    this.$toast.success('Article successfully published!', 'success');
                                this.$router.push('/home');
                            }).catch((err)=>{
                                this.$toast.error(err.message,'warning');
                                    });
    
        },
        deleteArticle(id){
        axiosDb.delete(`articles/${id}.json`)
        .then(()=>{
            
            this.$toast.success('Article successfully deleted!','success');
            this.$router.push('/home');
        }).catch((err)=>{
            this.$toast.error(err.message,'warning');
            
            })
        },
        editArticle(id,data){
          //  console.log(data);
            axiosDb
            .put(`articles/${id}.json`,data).then(()=>{
                this.$toast.success('Article successfully edited!','success');
                            this.$router.push('/home');
                        }).catch((err)=>{
                            this.$toast.error(err.message,'warning');
                                });
        }

    }
    
}