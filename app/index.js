import * as React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
	componentDidMount() {
		fetch(`/api/submit-survey`)
			.then(response => {return response.json()})
			.then(responseJson => console.log(responseJson.message))
	}

  render() {
		return (
			<div>
        Hey! The app is loaded :)
      </div>
		)
	}
}

render(<App />, document.getElementById('app'))