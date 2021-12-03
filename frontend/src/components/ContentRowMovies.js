import React from 'react';
import Metric from './Metric';

let data = [
	{
		color: 'primary',
		title: 'Movies in Data Base',
		value: 21,
		icon: 'fa-film',
	},
	{
		color: 'success',
		title: 'Total awards',
		value: 79,
		icon: 'fa-award',
	},
	{
		color: 'warning',
		title: 'Actors quantity',
		value: 49,
		icon: 'fa-user',
	},
]

const Contentrowmovies = () => {
    return (
        <div className="row">

			{data.map((item,index) => {
				return <Metric 
					key={item + index} 
					color = {item.color} 
					title = {item.title} 
					value = {item.value} 
					icon = {item.icon}/>
			})}
						
		</div>
    );
}

export default Contentrowmovies;