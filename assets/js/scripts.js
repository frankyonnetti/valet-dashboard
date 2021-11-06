function ready () {
  const localStorage = window.localStorage
  // Add class when JS is loaded.
  const htmlTag = document.querySelector('html')
  htmlTag.classList.add('js-loaded')

  const newValetLinks = document.querySelector('.valetlinks-container')
  const valetLinks = newValetLinks.innerHTML

  // ! Unique "data" attribute
  // --------------------------------------------------------------------------
  const hostRow = newValetLinks.children

  for (let hostCount = 0; hostCount < hostRow.length; hostCount++) {
    // add a unique "data" attribute to each row
    const hostSite = hostRow[hostCount].children.item(1).innerText.replace(/\./g, '_')
    hostRow[hostCount].setAttribute('data-host', hostSite)
  }

  // ! trim down technology version output to get just the version number.
  // --------------------------------------------------------------------------
  // dnsmasq
  const dnsmasqVersion = document.querySelector('.dnsmasq .tech-info')
  if (dnsmasqVersion !== null) {
    // get substring between two words
    const getDnsmasqVersion = dnsmasqVersion.innerHTML.split('Dnsmasq version ').pop().split('  Copyright')[0]
    dnsmasqVersion.innerHTML = getDnsmasqVersion
  }
  // mariadb
  const mariadbVersion = document.querySelector('.mariadb .tech-info')
  if (mariadbVersion !== null) {
    // get substring between two words
    const getMariadbVersion = mariadbVersion.innerHTML.split('Distrib ').pop().split('-MariaDB')[0]
    mariadbVersion.innerHTML = getMariadbVersion
  }
  // nginx
  const nginxVersion = document.querySelector('.nginx .tech-info')
  if (nginxVersion !== null) {
    // get the first set of floating numbers
    const getNginxVersion = nginxVersion.innerHTML.replace('nginx version: nginx/', '')
    nginxVersion.innerHTML = getNginxVersion
  }
  // phpmyadmin
  const phpmyadminPath = document.querySelector('[data-host="phpmyadmin"] .path em')
  if (phpmyadminPath !== null) {
    const phpmyadminURL = document.querySelector('[data-host="phpmyadmin"] .url a')
    const phpmyadminLink = document.querySelector('.phpmyadmin .tech-label a')
    const phpmyadminVersion = document.querySelector('.phpmyadmin .tech-info')
    const getPHPmyadminPath = phpmyadminPath.innerHTML.split('/')
    document.querySelector('.phpmyadmin').removeAttribute('style')
    phpmyadminLink.setAttribute('href', phpmyadminURL)
    phpmyadminVersion.innerHTML = getPHPmyadminPath[getPHPmyadminPath.length - 3]
  }

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

  function copyPath () {
    const element = this
    const path = element.innerText
    navigator.clipboard.writeText(path)
    element.innerHTML = '<em>Copied!</em>'
    setTimeout(function () {
      element.innerHTML = '<em>' + path + '</em>'
    }, 5e2)
  }

  localPathSpan.forEach(path => path.addEventListener('mouseover', changeOnOver))
  localPathSpan.forEach(path => path.addEventListener('mouseout', changeOnOut))
  localPathSpan.forEach(path => path.addEventListener('click', copyPath))

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
  const focusSwitch = document.getElementById('focus-quick-find-switch')

  if (localStorage.getItem('focusToggle') === null) {
    localStorage.setItem('focusToggle', 'false')
    focusSwitch.classList.add('off')
  } else
  if (localStorage.getItem('focusToggle') === 'false') {
    focusSwitch.classList.add('off')
  } else {
    focusSwitch.classList.add('on')
    document.querySelector('#filter-input').focus()
  }

  focusSwitch.addEventListener('click', event => {
    if (localStorage.getItem('focusToggle') !== null) {
      if (localStorage.getItem('focusToggle') === 'false') {
        focusSwitch.classList.remove('off')
        focusSwitch.classList.add('on')
        localStorage.setItem('focusToggle', 'true')
        document.querySelector('#filter-input').focus()
      } else {
        focusSwitch.classList.remove('on')
        focusSwitch.classList.add('off')
        localStorage.setItem('focusToggle', 'false')
      }
    }
  })

  // ! light or dark mode
  // --------------------------------------------------------------------------
  const conatiners = document.querySelectorAll('.color-mode')
  const darkModeSwitch = document.getElementById('dark-mode-switch')

  // set initial localStorage and body class if none found,
  // or load class if found in localStorage
  if (localStorage.getItem('themeMode') === null) {
    localStorage.setItem('themeMode', 'light')
    darkModeSwitch.classList.add('off')
    conatiners.forEach(mode => mode.classList.add('light-mode'))
  } else
  if (localStorage.getItem('themeMode') === 'light') {
    darkModeSwitch.classList.add('off')
    conatiners.forEach(mode => mode.classList.add('light-mode'))
  } else {
    darkModeSwitch.classList.add('on')
    conatiners.forEach(mode => mode.classList.add('dark-mode'))
  }

  // switch between light and dark mode
  darkModeSwitch.addEventListener('click', event => {
    if (localStorage.getItem('themeMode') !== null) {
      if (localStorage.getItem('themeMode') === 'light') {
        darkModeSwitch.classList.remove('off')
        darkModeSwitch.classList.add('on')
        localStorage.setItem('themeMode', 'dark')
        conatiners.forEach(mode => mode.classList.remove('light-mode'))
        conatiners.forEach(mode => mode.classList.add('dark-mode'))
      } else {
        darkModeSwitch.classList.remove('on')
        darkModeSwitch.classList.add('off')
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
