function ready () {
  // server version
  const valetVersion = document.querySelector('.server-version')
  // remove "Laravel Valet" from out-put
  const version = valetVersion.innerHTML
    .replace('<p>', '').replace('</p>', '')
    .replace('Laravel Valet ', '')

  valetVersion.innerHTML = version

  // select terminal output table
  const selectValetLinks = document.querySelector('#md-table')
  // select table element
  const newValetLinks = document.querySelector('.table--valetlinks')

  // replace pipes "|" with table rows and columns
  // https://javascript.info/regexp-quantifiers
  const valetLinks = selectValetLinks.innerHTML
    .replace('<p>', '').replace('</p>', '')
    .replace(/X/g, '<i class="fas fa-lock"></i>')
    .replace(/\+(.+)\+/g, '') // replace +--...--+
    .replace(/((?:[^|]*\|){4}[^|]*)\|/g, '$1</em></span></td></tr>')
    .replace(/((?:[^|]*\|){3}[^|]*)\|/g, '$1</td><td><span><em>')
    .replace(/((?:[^|]*\|){2}[^|]*)\|/g, '$1</td><td>')
    .replace(/((?:[^|]*\|){1}[^|]*)\|/g, '$1</td><td>')
    .replace(/((?:[^|]*\|){0}[^|]*)\|/g, '$1<tr><td>')

  // build new table data
  newValetLinks.innerHTML = valetLinks

  // hide markdown table
  document.getElementById('md-table').style.display = 'none'

  // Hover state to show loacl path
  const localPathSpan = document.querySelectorAll('.table--valetlinks td span')

  function changeOnOver () {
    this.classList.add('show-path')
  }

  function changeOnOut () {
    const tooltip = this
    tooltip.classList.remove('show-path')
    tooltip.classList.add('fade')
    setTimeout(function () {
      tooltip.classList.remove('fade')
    }, 300)
  }

  localPathSpan.forEach(item => item.addEventListener('mouseover', changeOnOver))
  localPathSpan.forEach(item => item.addEventListener('mouseout', changeOnOut))

  // // Bring search filed to focus on page load
  // document.querySelector('#filterInput').focus()
  //
  // // Filter
  // // https://www.tutorialspoint.com/how-to-create-a-filter-list-with-javascript
  // function filterFunction () {
  //   const input = document.querySelector('#filterInput')
  //   const filter = input.value.toUpperCase()
  //   const ul = document.querySelector('#md-table')
  //   const li = ul.getElementsByTagName('li')

  //   for (let i = 0; i < li.length; i++) {
  //     const a = li[i].getElementsByTagName('a')[0]
  //     const value = a.textContent || a.innerText
  //     if (value.toUpperCase().indexOf(filter) > -1) {
  //       li[i].style.display = ''
  //     } else {
  //       li[i].style.display = 'none'
  //     }
  //   }
  // }
  // document.addEventListener('keyup', filterFunction)
}
document.addEventListener('DOMContentLoaded', ready)
