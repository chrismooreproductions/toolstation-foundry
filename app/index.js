import * as React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

class App extends React.Component {
	render() {
		return (
			<Root />
		)
	}
}

render(<App />, document.getElementById('app'))
