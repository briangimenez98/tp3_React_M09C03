import React from 'react';
import Tablerow from './TableRow';
import {Component} from 'react';

class Table extends Component {

    constructor(){
		super()
		this.state = {
			movies : []
		}
	}

    render(){
        return (
            <div className='container'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Título</th>
                            <th scope="col">Clasificación</th>
                            <th scope="col">Premios</th>
                            <th scope="col">Duración</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map((item,index) => {
                                return <Tablerow
                                    key={item.title+index}
                                    id={item.id}
                                    title={item.title}
                                    rating={item.rating}
                                    awards={item.awards}
                                    length={item.length}
                                />
                            })
                        }
                    </tbody>
                </table>
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

	getMovies = (info) => {
        //console.log(info.data);
		this.setState({
			movies : info.data
		})
	}

	async componentDidMount(){
		await this.apiCall('http://localhost:3001/api/movies',this.getMovies)
	}
    
}

export default Table;