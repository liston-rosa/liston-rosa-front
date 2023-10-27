'use client'
import { GlobalContext } from '@/AppContext/AppContext'
import styles from './page.module.css'
import { useContext } from 'react'

export default function Home() {
  const context = useContext(GlobalContext)
  // console.log('context', context)
  return (
    <main className={styles.main}>
      <h1>Hola</h1>
    </main>
  )
}
