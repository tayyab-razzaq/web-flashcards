import React from 'react';
import routes from './routes';


export default function App () {
	return (
		<div className='app'>
			<div className='content'>
				{routes}
			</div>
		</div>
	);
}