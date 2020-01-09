import React from 'react';
import Header from './header';
import MovieList from './movie-list';
import '../css/movies.css';

import axios from 'axios';

import { withRouter, Redirect } from "react-router-dom";
import { connect } from "unistore/react";

import { actions} from "../store";


class Movies extends React.Component{
    state = {
        allMovies: [],
        categoryName:'',
        isLoading: true
    };

    componentDidMount = async() => {
        // // console.log("cek props di did mount", this.props)
        // await this.props.getAllMovies();
        // console.log("daftar movies", this.props.movieList)
        // this.getAllMovies();
        
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
        const coba = this.state.categoryName!=='' ? <MovieList moviesByCategory={this.state.allMovies} categoryName={this.state.categoryName} />:null;
        
        return (
            <div className='movies-content'>
                <Header />
                <div className="row main-content">
                    <ul>
                        <li value="romance"
                            onClick={ () => this.handleClickCategory("romance")}
                        >Romance
                        </li>
                        <li value="action"
                            onClick={ () => this.handleClickCategory("action")}
                        >Action
                        </li>
                        <li value="fiction"
                            onClick={ () => this.handleClickCategory("fiction")}
                        >Fiction
                        </li>
                        <li value="comedy"
                            onClick={ () => this.handleClickCategory("comedy")}
                        >Comedy
                        </li>
                    </ul>  
                </div>    

                <br/>
                <br/>
                {coba}

                
            
            </div>  
             
        );
    }
}

export default Movies;

// export default connect("", actions)(withRouter(Movies));




    

    

    