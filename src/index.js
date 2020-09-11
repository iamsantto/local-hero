import React from 'react'
import { render } from 'react-dom'
import { MemoryRouter } from 'react-router'

import App from './components/App'

render((
	<MemoryRouter initialEntries={['/home', '/options']} initialIndex={0}>
		<App />
	</MemoryRouter>
), document.getElementById('root'))
