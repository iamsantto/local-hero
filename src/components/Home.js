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
		const { site, storage } = this.state
		return (
			<div>
				<h2>{site.title}</h2>
				<LocalStorageTable storageData={storage[site.id]} editable="false" />
			</div>
		)
	}
}

export default Home
