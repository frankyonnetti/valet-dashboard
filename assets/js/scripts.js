function ready () {
  // hide markdown table
  document.getElementById('md-table').style.display = 'none'

  // Bring search filed to focus on page load
  // document.querySelector('#filterInput').focus()

  // select terminal output table
  const selectValetLinks = document.querySelector('#md-table')
  // select table element
  const newValetLinks = document.querySelector('.valetlinks')

  // replace pipes "|" with table rows and columns
  // https://javascript.info/regexp-quantifiers
  const valetLinks = selectValetLinks.innerHTML
    .replace('<p>', '').replace('</p>', '')
    .replace(/X/g, '<i class="fas fa-shield-check"></i>')
    .replace(/\+(.+)\+/g, '') // replace +--...--+
    .replace(/((?:[^|]*\|){4}[^|]*)\|/g, '$1</span</td></tr>') // replace every
    .replace(/((?:[^|]*\|){3}[^|]*)\|/g, '$1</td><td><span>')
    .replace(/((?:[^|]*\|){2}[^|]*)\|/g, '$1</td><td>')
    .replace(/((?:[^|]*\|){1}[^|]*)\|/g, '$1</td><td>')
    .replace(/((?:[^|]*\|){0}[^|]*)\|/g, '$1<tr><td>')

  // build new table data
  newValetLinks.innerHTML = valetLinks

  // Filter
  // https://www.tutorialspoint.com/how-to-create-a-filter-list-with-javascript
  function filterFunction () {
    const input = document.querySelector('#filterInput')
    const filter = input.value.toUpperCase()
    const ul = document.querySelector('#md-table')
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
