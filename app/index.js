import * as React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Mr',
			name: 'Chris Moore',
			dob: '13/11/1985',
			location: 'here',
			dateTime: '16:01 24/03/2019'
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log('submitting...')
		fetch(`/api/submit-survey`, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'post',
			body: JSON.stringify(this.state)
		}) 
		.then(response => response.json())
		.then(responseJson => console.log(responseJson.message))
	}

  render() {
		return (
			<div>
        <h1>Hey! The app is loaded :)</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="submit" />
				</form>
      </div>
		)
	}
}

render(<App />, document.getElementById('app'))