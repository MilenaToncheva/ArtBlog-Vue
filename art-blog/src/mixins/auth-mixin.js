 import authAxios from '@/axios-auth.js';
export default {
    name:'AuthMixin',
    data(){
        return {

        }
    },
methods:{
    loginUser(payload){
        authAxios
        .post(
            '/accounts:signInWithPassword',
             payload
        )
        .then((res)=>{
           // console.log(res);
             const { idToken, localId, email } = res.data;

            localStorage.setItem("token", idToken);
            localStorage.setItem("userId", localId);
            localStorage.setItem("email", email);
           
           // console.log(localStorage.getItem('email'));
            //console.log(localStorage.getItem('token'));
            
            this.$toast.success('Successfully logged in!','success');
         this.$emit('onAuth',localStorage.getItem('token')!==null)
          
            this.$router.push("/home");
        })
        .catch((err) => {
             this.$toast.error(err.message,'warning');
            console.error(err);
        });
    },
    registerUser(payload){
        authAxios
        .post(
            "/accounts:signUp",
            payload
            )
        .then(()=>{
            this.$toast.success('Successful registration!','success')
            this.$router.push('/users/login');
        })
        .catch((err)=>{
            this.$toast.error(err.message,'warning');
            console.error(err);
        })
    },
    logoutUser(){
        localStorage.removeItem('token');
    localStorage.removeItem('userId');
    //this.isAuthenticated=false;
    this.$emit('onAuth',localStorage.getItem('token')!==null);
   
    this.$toast.success('Successfully logged out!','success')
    this.$router.push('/');
    }
    
    }
}