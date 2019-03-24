import * as React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  render() {
		return (
			<div>
        Hey! The app is loaded :)
      </div>
		)
	}
}

render(<App />, document.getElementById('app'))