const maxPages = 6

const log = (code) => {
    console.log(code)
}

const currentPageNumber = () => {
    const currentPageUrl = window.location.href
    log(currentPageUrl)

    const patt = /\d/g
    const digits = (currentPageUrl.slice(-10)).match(patt)
    let pageDigit = ''
    for (digit in digits) {
        pageDigit += digits[digit]
    }
    document.querySelector('.currentPage').innerHTML = pageDigit
    return pageDigit
}

const currentPage = currentPageNumber()

const nextPageBtn = document.querySelector('.nextPage')
const previousPageBtn = document.querySelector('.previousPage')
previousPageBtn.href = 'page' + (parseInt(currentPage) - 1) + '.html'
nextPageBtn.href = 'page' + (parseInt(currentPage) + 1) + '.html'

const currentPageMinus1 = document.querySelector('.currentPageMinus1')
const currentPagePlus1 = document.querySelector('.currentPagePlus1')
const currentPagePlus2 = document.querySelector('.currentPagePlus2')
currentPageMinus1.innerHTML = (parseInt(currentPage) - 1)
currentPagePlus1.innerHTML = (parseInt(currentPage) + 1)
currentPagePlus2.innerHTML = (parseInt(currentPage) + 2)
currentPageMinus1.href = 'page' + (parseInt(currentPage) - 1) + '.html'
currentPagePlus1.href = 'page' + (parseInt(currentPage) + 1) + '.html'
currentPagePlus2.href = 'page' + (parseInt(currentPage) + 2) + '.html'


if (parseInt(currentPage) - 1 < 0) {
    previousPageBtn.classList.add('disabled')
    currentPageMinus1.remove()
} else if (parseInt(currentPage) == maxPages) {
    nextPageBtn.classList.add('disabled')
    currentPagePlus1.remove()
    currentPagePlus2.remove()
}