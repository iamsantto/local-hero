import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Header from './Header'
import Main from './Main'

const App = () => (
  <div className={css(styles.main)}>
    <Header />
    <Main />
  </div>
)

const styles = StyleSheet.create({
  main: {
    width: '300px',
    height: '200px'
  }
})

export default App
