import styles from './link.module.css'
import LinkNext from 'next/link';

export default function Link({children, href}) {
  return (
    <div className={styles.addbills}>
    <LinkNext href={href}><a className={styles.addbills}>{children}</a></LinkNext>
    </div>
  )}
  