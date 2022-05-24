export function scrollToElement(el) {
    var block = document.querySelector('.' + el)

    var offset = getOffset(block)

    window.scrollTo(0, offset)
}

export function scrollTop() {
    window.scrollTo(0, 0)
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY
}