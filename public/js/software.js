const library = JSON.parse($('#libraryData').text())
    ['@graph']
    .sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
console.log('loading library', library)

const libWrapper = $('#libWrapper')
const libItemTemplate = $('#libItemTemp').get()[0]

function createLibItemElement(libItem, clone) {
    clone.getElementById('name').textContent = libItem.name
    clone.getElementById('pic').src = libItem.image
    const wrapper = clone.getElementById('link')
    wrapper.href = libItem.url
    wrapper.libItem = libItem
    return clone
}
library.forEach(element => {
    const clone = document.importNode(libItemTemplate.content, true)
    libWrapper.append(createLibItemElement(element, clone))
})

$('#searchBar').on('input', function () {
    const searchVal = this.value.toLowerCase()
    //hide all things that don't contain the value
    libWrapper.children().each(function () {
        this.libItem.name.toLowerCase().indexOf(searchVal) == -1 ? $(this).hide() : $(this).show()
    })
})