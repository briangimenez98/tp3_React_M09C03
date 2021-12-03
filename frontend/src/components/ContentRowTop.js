import React from 'react';
import Contentrowmovies from './ContentRowMovies';
import Genresindb from './GenresInDb';
import Lastmovieindb from './LastMovieInDb';


const Contentrowtop = () => {
    return (
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>			
	
					<Contentrowmovies/>
	
					<div className="row">
		
						<Lastmovieindb/>
                        <Genresindb/>
	
					</div>
				</div>
    );
}

export default Contentrowtop;