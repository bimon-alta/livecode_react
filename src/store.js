
import createStore from "unistore";
import axios from 'axios';

const allState = {
    user_credential:{
        username:'',
        email:'',
        isLogin: false
    },
    movieCategory: '',
    movieList: [],
    isLoading: true,

    moviesAPIURL : 'https://api-todofancy.herokuapp.com/api/movies',
    
};




export const store = createStore(allState);

export const actions = store => ({
    
    setAsNewsPage: async (state, isTrue) =>{
        store.setState({isOnNewsPage: isTrue});
    },
     
    getAllMovies: async (state) =>{
        console.log("daftar movies sblm query", state.movieList);
        await axios
            .get('https://api-todofancy.herokuapp.com/api/movies')
            .then(function(response){
                store.setState({movieList: response.data.movies, isLoading:false});
                
            })
            .catch(function(error){
                store.setState({isLoading:false});
        });
        console.log("daftar movies setelah query", state.movieList);

    },

    changeCategory: async (state, categoryName) =>{
        console.log("nilai kategori sebelum setState", state.movieCategory);
        await store.setState({movieCategory: categoryName});
        console.log("nilai kategori setelah setState", state.movieCategory);

    },

    
    


});

