import React from 'react';
import Header from './header';
import '../css/movies.css';

import axios from 'axios';

import { withRouter, Redirect } from "react-router-dom";
import { connect } from "unistore/react";

import { actions} from "../store";


class MovieList extends React.Component{

    componentDidMount = async() => {
        
        
    };

    getAllMovies = async () =>{
        const self = this;

        // console.log("daftar movies sblm query", this.state.allMovies);
        await axios
            .get('https://api-todofancy.herokuapp.com/api/movies')
            .then(function(response){
                self.setState({allMovies: response.data.movies, isLoading:false});
                
            })
            .catch(function(error){
                self.setState({isLoading:false});
        });
        // console.log("daftar movies setelah query", this.state.allMovies);
    }

    handleClickCategory = async(categoryName) =>{
        // console.log("nilai kategori", categoryName);
        // await this.props.changeCategory(categoryName);
        // this.props.history.replace("/category/" + categoryName);
        // {/* <MovieList />   */}
        // return <Redirect to={{ pathname: "/category" + categoryName}} />;
        await this.getAllMovies();
        const newList = this.state.allMovies.filter( (item,key) => item.Category === categoryName);
        console.log("movies by category "+categoryName, newList);
        this.setState({allMovies: newList, categoryName:categoryName, isLoading:false});
    }

    

    

    render() {
        
        return (
            <div>
                
            </div>
             
        );
    }
}

// export default MovieList;

export default connect("", actions)(withRouter(MovieList));




    

    

    