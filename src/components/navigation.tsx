import React from 'react'
import { Link } from 'gatsby'

const styles = require('../css/navigation.module.css')

export default () => (
  <nav className={styles.container}>
    <span>イケの日</span>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)