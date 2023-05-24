import Image from 'next/image'
import Creature from 'components/creature.jsx'
import bestiary from 'app/bestiary.js'

console.log(bestiary)

function createEntry(entry) {
  return (
    <Creature
      name = {entry[0]}
      level = {entry[1]}
      abilityMods = {entry[6].join("")}
      tags = {entry[2].join(", ")}
      perception = {entry[3]}
      defenses = {entry[7]}
      skills = {entry[5]}
    />
  )
}


let test = createEntry(bestiary[0])
let test1 = createEntry(bestiary[1])
let chosenMonsterArray = [bestiary[0], bestiary[1]]
let chosenMonsterTest = chosenMonsterArray.map(createEntry)
//let allMonsterTest = bestiary.map(createEntry)



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {chosenMonsterTest}
    </main>
  )
}