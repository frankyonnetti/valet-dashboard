function ready () {
  const localStorage = window.localStorage
  // Add class when JS is loaded.
  const htmlTag = document.querySelector('html')
  htmlTag.classList.add('js-loaded')

  // ! server version
  // --------------------------------------------------------------------------
  const valetVersion = document.querySelector('.server-version')
  // remove "Laravel Valet" from server version output
  const version = valetVersion.innerHTML.replace('Laravel Valet ', 'v')
  // set new ouput
  valetVersion.innerHTML = version

  // ! terminal output / table
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
      return '<a href="' + localURL + '" tabindex="2">' + localURL + '</a>'
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

  // ! show local path on hover
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

  // ! Unique "data" attribute
  // --------------------------------------------------------------------------
  const hostRow = newValetLinks.children

  for (let hostCount = 0; hostCount < hostRow.length; hostCount++) {
    // add a unique "data" attribute to each row
    const hostSite = hostRow[hostCount].children.item(1).innerText.replace(/\./g, '_')
    hostRow[hostCount].setAttribute('data-host', hostSite)
  }

  // ! sortable
  // --------------------------------------------------------------------------
  const valetSortEl = document.getElementById('valetSort')
  const clearSortModalBtnContainer = document.querySelector('.sortable-container')
  const clearSortModalBtn = document.querySelector('.openmodal-reset')
  const clearSortBtn = document.querySelector('.clearsort')

  const sortable = Sortable.create(valetSortEl, { // eslint-disable-line
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
        clearSortModalBtnContainer.classList.remove('disabled')
        clearSortModalBtn.removeAttribute('disabled')
      }
    },
    group: 'hostslist',
    forceFallback: true,
    handle: '.grip',
    animation: 150,
    ghostClass: 'ghost-class'
  })

  // Set button to disabled if no sort is set in localStorage
  function disableSortButton () {
    if (localStorage.getItem('hostslist') === null) {
      clearSortModalBtnContainer.classList.add('disabled')
      clearSortModalBtn.setAttribute('disabled', true)
    }
  }
  disableSortButton()

  function clearSortStorage () {
    delete localStorage.hostslist
    newValetLinks.innerHTML = valetLinks // reload host list
    removeHeaderRow()
    disableSortButton()
    closeModal()
  }
  // Clear list localStorage button
  clearSortBtn.onclick = clearSortStorage

  // ! modal
  // --------------------------------------------------------------------------
  // buttons to open "modal" from sidebar
  const openModalResetBtn = document.querySelector('.openmodal-reset')
  // modal container
  const modal = document.querySelector('.modal')
  const modalBg = document.querySelector('.modal-bg')
  const closeSortModalBtn = document.querySelector('.cancelsort')

  // Open modal(s)
  function openModalReset () {
    modal.classList.add('open', 'reset-list')
    modalBg.classList.add('open')
  }
  openModalResetBtn.onclick = openModalReset

  // Close modal(s)
  function closeModal () {
    modal.classList.add('closing')
    modalBg.classList.add('closing')
    setTimeout(function () {
      modal.classList.remove('open', 'closing', 'reset-list')
      modalBg.classList.remove('open', 'closing')
    }, 1000)
  }
  closeSortModalBtn.onclick = closeModal
  modalBg.onclick = closeModal

  document.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      if (modal.classList.contains('open')) {
        closeModal()
      }
    }
  })

  // Filter
  // --------------------------------------------------------------------------
  document.getElementById('filter-input').addEventListener('keyup', function () {
    const searchFilter = this.value.toLowerCase()
    const row = document.querySelectorAll('.valetlinks-container .row')

    for (const host of row) {
      const item = host.getAttribute('data-host').toLowerCase()
      if (item.indexOf(searchFilter) === -1) {
        host.classList.add('hide')
      } else {
        host.classList.remove('hide')
      }
    }
  })

  // Bring search filed to focus on page load
  document.querySelector('#filter-input').focus()

  // ! light or dark mode
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

  // ! color picker
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
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
    localStorage.setItem('activeColor', colorInput.value)
  }

  colorInput.addEventListener('change', handleColorUpdate)
  colorInput.addEventListener('mousemove', handleColorUpdate)
}
document.addEventListener('DOMContentLoaded', ready)
