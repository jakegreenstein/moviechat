import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Movies from './components/Movies'

class App extends Component{
	render(){
		return (
			<div>
				This is the React app!
				<Movies />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))