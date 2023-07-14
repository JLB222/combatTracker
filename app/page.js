import Image from 'next/image'
import Creature from 'components/creature.jsx'
import bestiary from 'app/bestiary.js'

function createEntry(entry) {
  return (
    <Creature
      name = {entry[0]}
      level = {entry[1]}
      abilityMods = {...entry[6]}
      tags = {entry[2].join(", ")}
      perception = {entry[3]}
      defenses = {entry[7]}
      skills = {entry[5]}
    />
  )
}


let test = createEntry(bestiary[0])
let test1 = createEntry(bestiary[1])
//let chosenMonsterArray = [bestiary[0], bestiary[1], bestiary[2],bestiary[3]]
//let chosenMonsterList = chosenMonsterArray.map(createEntry)
let allMonsterTest = bestiary.map(createEntry)



export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {allMonsterTest}
        <ul>TO-DO:
          <li>bold all of the stats affected by the Elite or Weak modifier, so user can tell at a glance they've been altered.</li>
          <li>figure out how to deal with Initiative.  Just make it editable by user?  click perception and it automatically fills in?  what if the enemy rolls stealth for initiative?  What about the app auto-sorting the monsters based on initiative?</li>
          <li>add the ability for user to add monsters to the list</li>
          <li>add ability to remove monsters from list</li>
          <li>update bestiary with combat stats: speed,attacks,spells</li>
          <li>add creature's attacks and abilities to the creature.jsx</li>
          <li>add to bestiary and creature.jsx a Notes section; info GMs won't need often but should be there (like lore skills for enemies) & ability references like Venoms</li>
          <li>make a separate page(form) for easily adding new monsters to the bestiary array?</li>
          <li>add healing and damage functionality to HP</li>
          <li>add resistances and weaknesses to creature.jsx; ideally next to the Defenses column for easy consultation</li>
          <li>update bestiary to include DC to recall knowledge on the target</li>
          <li>add function to AC span; when clicked AC goes up by two to represent shield raising?</li>
          <li>add a section for condition tracking?</li>
        </ul>
    </main>
  )
}
