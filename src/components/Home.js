import React from 'react'

import { getCurrentTabInfo, getCurrentLocalStorage } from '../helpers'
import LocalStorageTable from './LocalStorageTable'

class Home extends React.Component {
	constructor() {
		super()
		this.state = {
			site: {},
			storage: {}
		}
	}

	componentDidMount() {
		getCurrentTabInfo(tabs => {
			this.setState({ site: tabs[0]})

			getCurrentLocalStorage(this.state.site.id, storage => {
				this.setState({ storage })
			})
		})
	}

	render() {
		return (
			<div>
				<h2>{this.state.site.title}</h2>
				<LocalStorageTable storageData={this.state.storage[this.state.site.id]} editable="false" />
			</div>
		)
	}
}

export default Home
