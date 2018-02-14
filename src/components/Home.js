import React from 'react'

import { getCurrentTabInfo } from '../helpers'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      site: {}
    }
  }

  componentDidMount() {
    getCurrentTabInfo(tabs => {
      this.setState({ site: tabs[0]})
      // alert(JSON.stringify(tabs))
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.site.title}</h2>
      </div>
    )
  }
}

export default Home
