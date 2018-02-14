import React from 'react'

import { getCurrentTabInfo, getCurrentLocalStorage } from '../helpers'

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
      alert(JSON.stringify(tabs))
    })

    getCurrentLocalStorage(this.state.site.id, storage => {
      this.setState({storage})
      alert(JSON.stringify(storage))
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.site.title}</h2>
        {/* <h5>{this.state.storage}</h5> */}
      </div>
    )
  }
}

export default Home
