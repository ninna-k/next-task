import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import PlayerCard from '../src/components/PlayerCard'

export default function Home() {
  return (
    <div className={styles.container}>
      <PlayerCard />
    </div>
  )
}
