import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Header = () => (
  <header className={css(styles.main)}>
    <h2 className={css(styles.pullLeft)}>local-hero</h2>
    <h5 className={css(styles.pullRight)}>v0.0.1</h5>
  </header>
)

const styles = StyleSheet.create({
  main: {
    color: 'red',
    height: '40px',
    padding: '0px'
  },
  pullRight: {
    float: 'right'
  },
  pullLeft: {
    float: 'left'
  }
})

export default Header
