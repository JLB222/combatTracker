"use client"  
import Image from 'next/image'
import bestiaryTest from '/app/bestiaryTest.js'
import Creature from '/components/creature.jsx'
import React, { useState } from 'react'


function App() {
  function createCreature(data) {
    return (
      <Creature
        key = {data.instanceId}
        id = {data.id}
        level = {data.level}
        name = {data.name}
        languages = {data.languages.join(", ")}
        abilityModStrength = {data.abilityModStrength}
        abilityModConstitution = {data.abilityModConstitution}
        abilityModDexterity = {data.abilityModDexterity}
        abilityModIntelligence = {data.abilityModIntelligence}
        abilityModWisdom = {data.abilityModWisdom}
        abilityModCharisma = {data.abilityModCharisma}
        tags = {data.tags.join(", ")}
        defenseHP = {data.defenseHP}
        defenseAC = {data.defenseAC}
        defenseFortSave = {data.defenseFortSave}
        defenseRflxSave = {data.defenseRflxSave}
        defenseWillSave = {data.defenseWillSave}
        defenseImmunities = {data.defenseImmunities}
        defenseResistances = {data.defenseResistances}
        defenseWeaknesses = {data.defenseWeaknesses}
        perception = {data.perception}
        vision = {data.vision}
        otherSenses = {data.otherSenses}
        skills = {[data.skillBonusAcrobatics, data.skillBonusArcana, data.skillBonusAthletics, data.skillBonusCrafting, data.skillBonusDeception, data.skillBonusDiplomacy, data.skillBonusIntimidation, data.skillBonusMedicine, data.skillBonusNature, data.skillBonusOccultism, data.skillBonusPerformance, data.skillBonusReligion, data.skillBonusSociety, data.skillBonusStealth, data.skillBonusSurvival, data.skillBonusThievery]}
        strikes = {data.strikes}
        canReactiveStrike = {data.canReactiveStrike}
        spells = {[data.spellSaveDC, data.spells, data.spellsAtWill, data.spellsConstant,data.spellsFocus, data.rituals,]}
        special = {data.specialAbilities}
        recallKnowledgeInfo = {[data.recallKnowledgeCategory, ...data.recallKnowledgeDC]}
        hasShield = {data.notes?.some(note => note.entry === "Shield")}
        shieldStats = {data.notes?.find(note => note.entry === "Shield")}
        notes = {data.notes}
        speeds = {data.speeds}
        items = {data.items}
        skillBonusLore = {data.skillBonusLore}
        instanceId = {data.instanceId}  //this is added to each creature upon clicking the 'Add Creature' button and is used to identify which creature to remove when the 'Remove Creature' button is clicked
        handleRemoveCreature = {handleRemoveCreature}
      />
    )
  };
  const [selectedCreatures, setSelectedCreatures] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCreatureId, setSelectedCreatureId] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event)
  };
  const handleSelectChange = (event) => {
    setSelectedCreatureId(event.target.value);
  };
  const handleAddCreature = () => {
    const selectedId = parseInt(selectedCreatureId);
    const creature = bestiaryTest.find(c => c.id === selectedId);
    if (creature) {
      const newCreature = { ...creature, instanceId: Date.now() }; // Unique instance ID for each selection
      setSelectedCreatures(prevSelected => [...prevSelected, newCreature]);
    }
  };
  const filteredCreatures = bestiaryTest.filter(creature =>
    creature.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleRemoveCreature(creatureInstanceId){
    console.log(creatureInstanceId)
    setSelectedCreatures(prevSelected => [...prevSelected.filter(el => el.instanceId !== creatureInstanceId)]);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Bestiary</h2>
        <input
          type="text"
          placeholder="Search creatures..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={selectedCreatureId} onChange={handleSelectChange}>
          <option value="">Select a creature...</option>
          {filteredCreatures.map(creature => (
            <option key={creature.id} value={creature.id}>
              {creature.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddCreature}>Add Creature</button>

        <h2>Selected Creatures</h2>
        {selectedCreatures.length > 0 ? (
          selectedCreatures.map(createCreature)
        ) : (
          <p>No creatures selected.</p>
        )}
      </div>

        <ul>TO-DO:
          {/* <li>Add tooltips to the Senses block. (Blind, Deafened, etc)</li> */}
          <li>Add tooltips to the Conditions block. (Enfeebled, Drained, etc)</li>
          <li>html is not currently very semantic.  tons of divs and spans that should be something more clear.</li>
          <li>consider styling the skills that are untrained differently than those that are</li>
          <li>style the skills list so that every other row is a different color so they're easier to read</li>
          {/* <li>Immunities, resistances, and weaknesses are displayed in the Defenses column even if they have none, because that property exists in their bestiary entry (albeit empty). I previously used .length to only render them if they had at least 1 element in their array.  We should probably eliminate properties on individual creatures if they're empty to save memory.</li> */}
          {/* <li>Make an 'affliction' category for special abilities?</li> */}
          <li>both description and effect are necessary on some stat blocks; keep this in mind for components</li>
        {/* <li>style: make a 'clickable' class for everything that can be clicked, so the user knows what they can interact with at a glance</li> */}
          <li>When a user clicks one of the rollers, it can be hard to tell if they rolled the same number twice in a row, or if it just didn't acknowledge the 2nd click, leading to doubt.  especially prevalent on d4s</li>
          <li>Potential solution:  an array of style objects that cycles every click.  the text color changes so you know if it's a new number or not</li>
          {/* <li>reduce creature's strike accuracy & damage when they are Enfeebled?</li> */}
          <li>change attack & damage bonus style when enfeebled?</li>
          <li>special attack damage reduced by enfeebled? how to know if a special attack is str-based? special.jsx doesn't currently track melee vs ranged</li>
          {/* <li>spell DC reduced by Stupefied</li> */}
          {/* <li>have style changes happen when something's value is altered by conditions</li> */}
          <li>Final CSS:  Make sure the toggles that affect style don't clash with each other:  MAP, EliteWeak, and Conditions</li>
          {/* <li>Add condition reductions to skills.jsx</li> */}
          <li>Add a way to calculate crit damage? or just let the user do it?</li>
          <li>Some creatures, like the Bloodseeker, have a basic Strike that deals no damage.  Showing 0d0+0 on their Strike section might confuse users, especially when making them elite makes it 0d0+2, suggesting it now does damage when it still shouldn't.  (or should it?)</li>
          <li>Low level creatures might have a negative number for their MAP & it currently renders as '+-2' because the + is hard rendered atm.  Change it?</li>
          {/* <li>flirt with the idea of using an array of objects for the bestiary, instead of an array of arrays.  maybe create a 2nd bestiary.js and dabble with rendering both?</li> */}
          <li>Maybe:  adjust the d20 roll function to do something special to detect Nat 1s and Nat 20s.  Could just let the GM watch for that, but they might appreciate a visual indicator when these are rolled.</li>
          {/* <li>Add an onClick for damage rolls on the new strike.jsx</li> */}
          {/* <li>add damage roller for rider damage</li> */}
          <li>As implemented, I'd need a different state for every different special attack a creature has.  Can we simplify all that into one state?</li>
          <li>Furthermore, every unique rider effect needs its own state, further complicating the rendering of damage.  Solution needed.</li>
            <li>rider damage effects currently display the damage roll under all rider damage spans; they need their own rendering</li>
            <li>Solution? : make a strikeRider.jsx component so each rider has its own riderDamage state?</li>
          {/* <li>bold all of the stats affected by the Elite or Weak modifier, so user can tell at a glance they've been altered.</li> */}
            {/* <li>HP, AC, saving throws</li> */}
            {/* <li>skill checks</li> */}
            {/* <li>strike damage</li> */}
          {/* <li>Back-end: tweak the skills.jsx file to make all skills like Acrobatics to improve readability and styling flexibility</li> */}
          {/* <li>Elite & Weak tags need to change damage of strikes</li> */}
          {/* <li>Elite & weak Modifier need to change Monster HP</li> */}
          {/* <li>Elite & weak Modifier need to change damage of monster's non-strike abilities.  Limited Use +4 dmg, & nonlimited +2</li> */}
            {/* <li>Add a creature to bestiary that has a damaging special attack in order to do this</li> */}
            <li>Added section to specials for rendering of Unlimited (+2dmg) special attacks, but what about Limited (+4)?  Need to find a creature with such an ability.</li>
          <li>figure out how to deal with Initiative.  Just make it editable by user?  click perception and it automatically fills in?  what if the enemy rolls stealth for initiative?  What about the app auto-sorting the monsters based on initiative?</li>
          {/* <li>add the ability for user to add monsters to the list</li> */}
          {/* <li>add ability to remove monsters from list</li> */}
          <li>add ability to re-organize entries by clicking & dragging the portrait of the creature</li>
          {/* <li>update bestiary with combat stats: speed,attacks,spells, specialAbilities </li> */}
          {/* <li>attack update: attack is now a button, but only works for the first strike, Multi-Attack Penalty is not yet implemented.  Will probably need 3 buttons per attack.</li> */}
          {/* <li>Stylize the attack bonus after clicking it so the user can tell which one is being applied more easily</li> */}
          {/* <li>add a damage roller to creature's Damage entry</li> */}
          <li>Back-end: make a separate page(form) for easily adding new monsters to the bestiary array?</li>
          {/* <li>add healing and damage functionality to HP</li> */}
          {/* <li>Healing Update: Damage/Healing is currently applied through it's own DIV at the top of the page, but I'd rather have it so that each monster has an input by their HP.  The hurdle is identifying each monster's unique Input in the code. Line 122 in creature.jsx, I currently use querySelector.value and target the class, but that always finds the FIRST element with that class, so a 'master' input box at the top is my current workaround.</li> */}
          {/* <li>update bestiary to include DC to recall knowledge on the target</li> */}
          {/* <li>add function to AC span; when clicked AC goes up by two to represent shield raising?</li> */}
          {/* <li>add a section for condition tracking?</li> */}
          <li>add a general dice roller? for single or batch rolls</li>
          {/* <li>add Lore skills for creatures that have them</li> */}
          {/* <li>Rider effects on monster attacks are difficult.  Some have poisons, some are just extra damage, some are conditions like grab.  How to do them all?</li> */}
          <li>Temporary HP?</li>
          {/* <li>show levels of darkvision on page</li> */}
          {/* <li>Other senses like Scent</li> */}
          {/* <li>for now, it is assumed that all creatures have a max of 1 rider, either damage or an effect.  Will update if/when this changes.</li> */}
          {/* <li>make each column it's own JSX component.  There's no need to overcomplicate creature.jsx</li> */}
            {/* <li>make a column for strikes</li> */}
            {/* <li>make a jsx for profile column</li> */}
            {/* <li>make a jsx for defenses column</li> */}
            {/* <li>add resistances and weaknesses to creature.jsx; ideally next to the Defenses column for easy consultation</li> */}
            {/* <li>make a jsx for skills column</li> */}
            {/* <li>make a jsx for new special attacks column</li> */}
            {/* <li>make a jsx for new spells column?  or perhaps spells are part of the special column?</li> */}
            {/* <li>make a jsx for items & equipment column - just added it to profile.jsx instead</li> */}
              {/* <li>add an item array in the bestiary for creatures that have equipment</li> */}
              {/* <li>have the shield raise option only for creatures that have a shield in their item array</li> */}
              {/* <li>show the shield's HP, hardness, and BT in the Defenses column</li> */}
              {/* <li>add a shield HP tracker and button to change its value</li> */}
            {/* <li>add to bestiary and creature.jsx a Notes section; info GMs won't need often but should be there (like lore skills for enemies) & ability references like Venoms</li> */}
            {/* <li>customize the different types of special abilities to be styled in different colors for easy reference at a glance.  EX;  reactions are red, passives are blue, whatever</li> */}
          {/* <li>edit bestiary entries to match the new Succubus format (so that they actually work with the new code)</li> */}
          {/* <li>add to the weapon array whether each weapon is Melee or Ranged</li> */}
          <li>add the ability to add a Player Character Placeholder, to help the GM remember when it's the player's turn instead of the next monster's.  No stats, necessarily, because player stats are player's responsiblity. </li>
          <li>perhaps give the PC Placeholder some basic stats like Saving Throws and Skill Checks, so that the GM can, if they want, do secret checks quickly and easily.  This would involve the GM entering custom info and thus the need for the app to save that info in memory.</li>
          <li>for the phone version of the app, have the functionality to import images so you can, for example, take a picture of someone's Mini and use that as their Placeholder photo in the initiative order</li>
          <li>since i've put reactive strike in the special abilities column, should I get rid of the hasReactiveStrike property? or can it be used for something else?</li>
        </ul>
    </main>
  )
}

export default App