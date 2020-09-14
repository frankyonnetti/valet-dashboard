function ready () {
  // Add class when JS is loaded.
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

  // https://javascript.info/regexp-quantifiers
  const valetLinks = selectValetLinks.innerHTML
    .replace('<p>', '').replace('</p>', '')
    // replace SSL column "X" with icon
    .replace(/X/g, '<i class="fas fa-lock"></i>')
    // replace +--...--+
    .replace(/\+(.+)\+/g, '')
    // replace pipes "|" starting from column 5
    .replace(/((?:[^|]*\|){4}[^|]*)\|/g, '$1</em></span></td></tr>')
    .replace(/((?:[^|]*\|){3}[^|]*)\|/g, '$1</td><td><span><em>')
    .replace(/((?:[^|]*\|){2}[^|]*)\|/g, '$1</td><td>')
    .replace(/((?:[^|]*\|){1}[^|]*)\|/g, '$1</td><td>')
    .replace(/((?:[^|]*\|){0}[^|]*)\|/g, '$1<tr><td>')

  // build new table
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

  localPathSpan.forEach((item) => item.addEventListener('mouseover', changeOnOver))
  localPathSpan.forEach((item) => item.addEventListener('mouseout', changeOnOut))

  // light or dark mode
  // --------------------------------------------------------------------------
  const localStorage = window.localStorage
  const conatiners = document.querySelectorAll('.color-mode')
  const modeSwitch = document.getElementById('mode-switch')

  // set initail localStorage and body class if none
  if (localStorage.getItem('themeMode') === null) {
    localStorage.setItem('themeMode', 'light')
    conatiners.forEach((el) => el.classList.add('light-mode'))
  } else
  if (localStorage.getItem('themeMode') === 'light') {
    conatiners.forEach((el) => el.classList.add('light-mode'))
  } else {
    conatiners.forEach((el) => el.classList.add('dark-mode'))
  }

  // switch between light and dark mode
  modeSwitch.addEventListener('click', event => {
    if (localStorage.getItem('themeMode') !== null) {
      if (localStorage.getItem('themeMode') === 'light') {
        localStorage.setItem('themeMode', 'dark')
        conatiners.forEach((el) => el.classList.remove('light-mode'))
        conatiners.forEach((el) => el.classList.add('dark-mode'))
      } else {
        localStorage.setItem('themeMode', 'light')
        conatiners.forEach((el) => el.classList.remove('dark-mode'))
        conatiners.forEach((el) => el.classList.add('light-mode'))
      }
    }
  })

  // color picker
  // --------------------------------------------------------------------------
  // "active-color" is set on color input field's 'name' attribute
  const colorInput = document.getElementById('color-picker')

  // set initail localStorage for active-color
  if (localStorage.getItem('activeColor') === null) {
    localStorage.setItem('activeColor', '#ba68c8')
    const getActiveColor = localStorage.getItem('activeColor')
    document.documentElement.setAttribute('style', '--active-color:' + getActiveColor + ';')
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
