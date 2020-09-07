function ready () {
  //
  const htmlTag = document.querySelector('html')
  htmlTag.classList.add('js-loaded')

  // server version
  // --------------------------------------------------------------------------
  const valetVersion = document.querySelector('.server-version')
  // remove "Laravel Valet" from server version output
  const version = valetVersion.innerHTML
    .replace('<p>', '').replace('</p>', '')
    .replace('Laravel Valet ', '')
  // set new ouput
  valetVersion.innerHTML = version

  // terminal output table
  // --------------------------------------------------------------------------
  // select terminal output table
  const selectValetLinks = document.querySelector('#md-table')
  // select table element
  const newValetLinks = document.querySelector('.valetlinks-container')

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

  // build new table output
  newValetLinks.innerHTML = valetLinks

  // hide markdown table
  document.getElementById('md-table').style.display = 'none'

  // show local path on hover
  // --------------------------------------------------------------------------
  // hover to show local path
  const localPathSpan = document.querySelectorAll('.valetlinks-container td span')

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

  // light or dark mode
  // --------------------------------------------------------------------------
  const localStorage = window.localStorage
  const bodyTag = document.getElementById('valet-server')
  const modeSwitch = document.getElementById('mode-switch')

  // set initail localStorage and body class if none
  if (localStorage.getItem('themeMode') === null) {
    localStorage.setItem('themeMode', 'light')
    bodyTag.classList.add('light-mode')
  } else
  if (localStorage.getItem('themeMode') === 'light') {
    bodyTag.classList.add('light-mode')
  } else {
    bodyTag.classList.add('dark-mode')
  }

  // switch between light and dark mode
  modeSwitch.addEventListener('click', event => {
    if (localStorage.getItem('themeMode') !== null) {
      if (localStorage.getItem('themeMode') === 'light') {
        localStorage.setItem('themeMode', 'dark')
        bodyTag.classList.remove('light-mode')
        bodyTag.classList.add('dark-mode')
      } else {
        localStorage.setItem('themeMode', 'light')
        bodyTag.classList.remove('dark-mode')
        bodyTag.classList.add('light-mode')
      }
    }
  })

  // color picker
  // --------------------------------------------------------------------------
  const colorInput = document.getElementById('color-picker')

  function handleColorUpdate () {
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
  }

  colorInput.addEventListener('change', handleColorUpdate)
}
document.addEventListener('DOMContentLoaded', ready)
