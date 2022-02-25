import path from 'path'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'
import treesData from 'src/data/causes/trees.json'
import globalHealthData from 'src/data/causes/globalHealth.json'
import endingHungerData from 'src/data/causes/endingHunger.json'
import ukraineData from 'src/data/causes/ukraine.json'

const getCauseDataFromName = (causeName) => {
  let data
  switch (causeName) {
    case 'cats':
      data = JSON.parse(JSON.stringify(catsData))
      break
    case 'seas':
      data = JSON.parse(JSON.stringify(seasData))
      break
    case 'trees':
      data = JSON.parse(JSON.stringify(treesData))
      break
    case 'globalHealth':
      data = JSON.parse(JSON.stringify(globalHealthData))
      break
    case 'endingHunger':
      data = JSON.parse(JSON.stringify(endingHungerData))
      break
    case 'ukraine':
      data = JSON.parse(JSON.stringify(ukraineData))
      break
    default:
      // a default is provided so component types can treat it as defined
      data = JSON.parse(JSON.stringify(catsData))
  }
  return data
}

export default getCauseDataFromName
