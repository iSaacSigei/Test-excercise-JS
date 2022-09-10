const language = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(language)
  console.log(setOfLanguages)
  for (const language of setOfLanguages) {
    console.log(language)
  }

  //adding elements to a set
const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)


//using counts on set
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const langSet = new Set(languages)
  console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  
  const counts = []
  const count = {}
  
  for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log(counts)