import styles from 'styles/pages/404.module.css'

export const metadata = {
  title: '404 Not Found',
}

export default function NotFound() {
  return (
    <div className={styles.box}>
      <h1>404 - This page could not be found.</h1>
    </div>
  )
}
