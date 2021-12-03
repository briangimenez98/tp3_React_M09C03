import React from 'react';
import Genre from './Genre';
import {Component} from 'react';

class Genresindb extends Component {

	constructor(){
		super()
		this.state = {
			genresList : []
		}
	}

	render(){
		return (
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
					</div>
					<div className="card-body">
						<div className="row">
							{this.state.genresList.map((genre,index) => {
								return <Genre name = {genre.name} key={genre.name + index} />
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}

	async apiCall(url,handler){
		try {
			let response = await fetch(url)
			let result = await response.json()
			handler(result)
		} catch (error) {
			console.log(error);
		}
	}

	loadGenres = (result) => {
		this.setState({
			genresList : result.data
		})
	}

	async componentDidMount(){
		await this.apiCall('http://localhost:3001/api/genres',this.loadGenres)
	}
	
}

export default Genresindb;