import Link from 'next/link'
import { connect } from 'react-redux'
import Counter from './counter'
import Clock from './clock'
import styles from './page.less'
import { Button } from 'antd'
function Page({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title
}) {
  return (
    <div className={styles.div}>
      <Button title='querwe'>querwe</Button>
      <h1>{title}</h1>
      {/* <Clock lastUpdate={lastUpdate} light={light} /> */}
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}

export default connect(state => state)(Page)