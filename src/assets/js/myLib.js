// initDebug(refs)
//    implements Debug Button for ref-Properties
//    Ein-und Ausblenden mit <strg>+<d>
// Example call
//    ! call in "onMounted-Hook"
//    initDebug({ location, produkte, showPage, category })
// Parameters
//    refs....{ref1, ref2, ...... } Objekt von ref-Properties
export const initDebug = (refs) => {
   if (!document.getElementById('debug')) {
      let debEl = document.createElement('div')
      debEl.setAttribute('id', 'debug')
      debEl.style.display = 'none'
      debEl.style.paddingTop = '10px'
      debEl.innerHTML = `<button id="debugBtn">show ref-values in console</button>`
      document.getElementById('app').appendChild(debEl)

      let debBtnEl = document.getElementById('debugBtn')
      debBtnEl.style.borderRadius = '5px'
      debBtnEl.style.borderWidth = "0px"
      debBtnEl.style.padding = "5px"
      debBtnEl.style.background = "lightGrey"

      debBtnEl.addEventListener('click', () => {
         console.log("\n")
         Object.keys(refs).forEach(key =>  console.log(key + ':', refs[key].value) )
      })

      window.addEventListener('keydown', (ev) => {
         if (ev.ctrlKey && ev.key === 'd') {
            ev.preventDefault()
            let debEl = document.getElementById('debug')
            debEl.style.display == 'none' ? debEl.style.display = 'block' : debEl.style.display = 'none'
         }
      })
   }
}