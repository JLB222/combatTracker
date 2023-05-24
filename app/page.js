import Image from 'next/image'
import Creature from 'components/creature.jsx'
import bestiary from 'app/bestiary.js'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Creature 
        name = {bestiary.succubus[0]}
        level = {bestiary.succubus[1]}
        />
      <Creature/>
    </main>
  )
}
