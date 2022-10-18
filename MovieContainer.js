import React from 'react'
import styled from 'styled-components'
import MovieComponent from './components/MovieComponent'

const MovieListContainer = styled.div
`display: flex;
flex-direction:row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly; 
`;

function MovieContainer(){
    return(
         <MovieListContainer>
<MovieComponent/>
<MovieComponent/>
<MovieComponent/>
<MovieComponent/>

         </MovieListContainer>   

    )}

    export default MovieContainer;