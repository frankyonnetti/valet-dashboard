function ready () {
  // const valetLink = document.querySelectorAll('pre a')
  // const menu = document.querySelector('#host-list')

  // // hide markdown table
  // document.getElementById('md-table').style.display = 'none'

  // // create wrapping element
  // function createListItem (name) {
  //   const li = document.createElement('li')
  //   li.innerHTML = name
  //   return li
  // }

  // // Wrap anchors
  // for (var i = 0; i < valetLink.length; i++) {
  //   menu.appendChild(createListItem(valetLink[i].outerHTML))
  // }

  // Bring search filed to focus on page load
  // document.querySelector('#filterInput').focus()

  // Filter
  // https://www.tutorialspoint.com/how-to-create-a-filter-list-with-javascript
  function filterFunction () {
    // var input, filter, ul, li, a, i, value
    const input = document.querySelector('#filterInput')
    const filter = input.value.toUpperCase()
    const ul = document.querySelector('#host-list')
    const li = ul.getElementsByTagName('li')

    for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName('a')[0]
      const value = a.textContent || a.innerText
      if (value.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none'
      }
    }
  }
  document.addEventListener('keyup', filterFunction)
}
document.addEventListener('DOMContentLoaded', ready)
