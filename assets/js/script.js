const html_topLeft = document.querySelector('#top-left')
const html_txtTopLeft = document.querySelector('#txt-top-left')

const html_topRight = document.querySelector('#top-right')
const html_txtTopRight = document.querySelector('#txt-top-right')

const html_bottomRight = document.querySelector('#bottom-right')
const html_txtBottomRight = document.querySelector('#txt-bottom-right')

const html_bottomLeft = document.querySelector('#bottom-left')
const html_txtBottomLeft = document.querySelector('#txt-bottom-left')

const html_startStart = document.querySelector('#start-start')
const html_txtStartStart = document.querySelector('#txt-start-start')

const html_startEnd = document.querySelector('#start-end')
const html_txtStartEnd = document.querySelector('#txt-start-end')

const html_endStart = document.querySelector('#end-start')
const html_txtEndStart = document.querySelector('#txt-end-start')

const html_endEnd = document.querySelector('#end-end')
const html_txtEndEnd = document.querySelector('#txt-end-end')



const html_copyButton = document.querySelector('.copy-button')
const html_cobaia = document.querySelector('.cobaia')

// ---

const bradius = {
    topLeft: function() {
        // `${} ${} ${} ${}`
        value = html_topLeft.value

        html_txtTopLeft.innerHTML = value
        html_cobaia.style.borderTopLeftRadius = `${value}%`
    },
    topRight: function() {
        value = html_topRight.value

        html_txtTopRight.innerHTML = value
        html_cobaia.style.borderTopRightRadius = `${value}%`
    },    
    bottomRight: function() {
        value = html_bottomRight.value

        html_txtBottomRight.innerHTML = value
        html_cobaia.style.borderBottomRightRadius = `${value}%`
    },
    bottomLeft: function() {
        value = html_bottomLeft.value

        html_txtBottomLeft.innerHTML = value
        html_cobaia.style.borderBottomLeftRadius = `${value}%`
    },
    startStart: function() {
        value = html_startStart.value

        html_txtStartStart.innerHTML = value
        html_cobaia.style.borderStartStartRadius = `${value}%`
    },
    startEnd: function() {
        value = html_startEnd.value

        html_txtStartEnd.innerHTML = value
        html_cobaia.style.borderStartEndRadius = `${value}%`
    },
    endStart: function() {
        value = html_endStart.value

        html_txtEndStart.innerHTML = value
        html_cobaia.style.borderEndStartRadius = `${value}%`
    },
    endEnd: function() {
        value = html_endEnd.value

        html_txtEndEnd.innerHTML = value
        html_cobaia.style.borderEndEndRadius = `${value}%`
    }
}

// ---

html_copyButton.addEventListener('click', e => {
    str = html_cobaia.getAttribute('style')
    navigator.clipboard.writeText(str)
    alert(`"${str}"\ncopied to clipboard!`)
})