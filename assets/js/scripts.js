function ready () {
  // Add class when JS is loaded.
  const htmlTag = document.querySelector('html')
  const localStorage = window.localStorage
  htmlTag.classList.add('js-loaded')

  // server version
  // --------------------------------------------------------------------------
  const valetVersion = document.querySelector('.server-version')
  // remove "Laravel Valet" from server version output
  const version = valetVersion.innerHTML.replace('Laravel Valet ', 'v')
  // set new ouput
  valetVersion.innerHTML = version

  // terminal output table
  // --------------------------------------------------------------------------
  // select terminal output table
  const selectValetLinks = document.querySelector('#links-table')
  // select container element
  const newValetLinks = document.querySelector('.valetlinks-container')

  // https://javascript.info/regexp-quantifiers
  const valetLinks = selectValetLinks.innerHTML
    // replace SSL column "X" with icon
    .replace(/X/g, '<i class="fas fa-lock"></i>')
    // replace pluses "+" and dashes "-"
    .replace(/\+(.+)\+/g, '')
    // replace pipes "|" starting from column 5
    .replace(/((?:[^|]*\|){4}[^|]*)\|/g, '$1</em></span></div></div>')
    .replace(/((?:[^|]*\|){3}[^|]*)\|/g, '$1</div><div class="col path"><span><em>')
    .replace(/((?:[^|]*\|){2}[^|]*)\|/g, '$1</div><div class="col url">')
    .replace(/((?:[^|]*\|){1}[^|]*)\|/g, '$1</div><div class="col ssl">')
    .replace(/((?:[^|]*\|){0}[^|]*)\|/g, '$1<div class="row"><div class="col grip"></div><div class="col site">')
    // wrap anchor around URL
    .replace(/http(.*).test/g, function (localURL) {
      return '<a href="' + localURL + '">' + localURL + '</a>'
    })

  // build new hosts container
  newValetLinks.innerHTML = valetLinks

  // remove header row
  function removeHeaderRow () {
    document.querySelector('.valetlinks-container .row:first-child').remove()
  }
  removeHeaderRow()

  // hide imported links table
  document.getElementById('links-table').style.display = 'none'

  // show local path on hover
  // --------------------------------------------------------------------------
  const localPathSpan = document.querySelectorAll('.valetlinks-container .col span')

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

  localPathSpan.forEach(path => path.addEventListener('mouseover', changeOnOver))
  localPathSpan.forEach(path => path.addEventListener('mouseout', changeOnOut))

  // Sortable
  // --------------------------------------------------------------------------
  const valetSortEl = document.getElementById('valetSort')
  const clearSortBtnContainer = document.querySelector('.sortable-container')
  const clearSortBtn = document.querySelector('.clearsort')

  const sortable = Sortable.create(valetSortEl, { // eslint-disable-line no-unused-vars
    store: {
      // Get the order of elements. Called once during initialization.
      get: function (sortable) {
        const order = localStorage.getItem(sortable.options.group.name)
        return order ? order.split('|') : []
      },

      // Save the order of elements. Called onEnd (when the item is dropped).
      set: function (sortable) {
        const order = sortable.toArray()
        localStorage.setItem(sortable.options.group.name, order.join('|'))
        clearSortBtnContainer.classList.remove('disabled')
        clearSortBtn.removeAttribute('disabled')
      }
    },
    group: 'hostslist',
    forceFallback: true,
    handle: '.grip',
    animation: 150,
    ghostClass: 'ghost-class'
  })

  // Set button disabled if no sort
  function disableSortButton () {
    if (localStorage.getItem('hostslist') === null) {
      clearSortBtnContainer.classList.add('disabled')
      clearSortBtn.setAttribute('disabled', 'disabled')
    }
  }
  disableSortButton()

  // Clear sortable localStorage
  function clearSortStorage () {
    delete localStorage.hostslist
    newValetLinks.innerHTML = valetLinks // reload host list
    removeHeaderRow()
    disableSortButton()
  }

  // Clear list localStorage button
  clearSortBtn.onclick = clearSortStorage

  // light or dark mode
  // --------------------------------------------------------------------------
  const conatiners = document.querySelectorAll('.color-mode')
  const modeSwitch = document.getElementById('mode-switch')

  // set initial localStorage and body class if none found,
  // or load class if found in localStorage
  if (localStorage.getItem('themeMode') === null) {
    localStorage.setItem('themeMode', 'light')
    conatiners.forEach(mode => mode.classList.add('light-mode'))
  } else
  if (localStorage.getItem('themeMode') === 'light') {
    conatiners.forEach(mode => mode.classList.add('light-mode'))
  } else {
    conatiners.forEach(mode => mode.classList.add('dark-mode'))
  }

  // switch between light and dark mode
  modeSwitch.addEventListener('click', event => {
    if (localStorage.getItem('themeMode') !== null) {
      if (localStorage.getItem('themeMode') === 'light') {
        localStorage.setItem('themeMode', 'dark')
        conatiners.forEach(mode => mode.classList.remove('light-mode'))
        conatiners.forEach(mode => mode.classList.add('dark-mode'))
      } else {
        localStorage.setItem('themeMode', 'light')
        conatiners.forEach(mode => mode.classList.remove('dark-mode'))
        conatiners.forEach(mode => mode.classList.add('light-mode'))
      }
    }
  })

  // color picker
  // --------------------------------------------------------------------------
  // "active-color" is set on color input 'name' attribute
  const colorInput = document.getElementById('color-picker')

  // set initial localStorage for active-color,
  // or load active-color found in localStorage
  if (localStorage.getItem('activeColor') === null) {
    localStorage.setItem('activeColor', '#ba68c8')
    const getActiveColor = localStorage.getItem('activeColor')
    document.documentElement.setAttribute('style', '--active-color:' + getActiveColor + ';')
    colorInput.setAttribute('value', getActiveColor)
  } else {
    const getActiveColor = localStorage.getItem('activeColor')
    document.documentElement.setAttribute('style', '--active-color:' + getActiveColor + ';')
    colorInput.setAttribute('value', getActiveColor)
  }

  // change active-color
  function handleColorUpdate () {
    // console.log(this.value)
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
    localStorage.setItem('activeColor', colorInput.value)
  }

  colorInput.addEventListener('change', handleColorUpdate)
  colorInput.addEventListener('mousemove', handleColorUpdate)
}
document.addEventListener('DOMContentLoaded', ready)
