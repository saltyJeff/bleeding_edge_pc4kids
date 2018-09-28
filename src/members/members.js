const peopleList = JSON.parse($('#peopleData').text())
    ['@graph']
    .sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
console.log('loading people', peopleList)

const peopleWrapper = $('#peopleWrapper')
const peopleTemp = $('#personTemp').get()[0]

function createPersonElement(person, clone) {
    clone.getElementById('name').textContent = person.name
    clone.getElementById('pic').src = person.image
    clone.getElementById('wrapper').person = person
    return clone
}
peopleList.forEach(element => {
    const clone = document.importNode(peopleTemp.content, true)
    peopleWrapper.append(createPersonElement(element, clone))
})

const modalBkgd = $('#peopleModalBkgd')
const modalName = $('#modalName')
const modalPosition = $('#modalPosition')
const modalExperience = $('#modalExperience')
const modalReason = $('#modalReason')
$('.personWrapper').click(function () {
    const person = this.person
    modalName.text(person.name)
    modalPosition.text(person.jobTitle)
    modalExperience.text(person.knowsAbout)
    modalReason.text(person.reason)
    modalBkgd.show()
})
$('#closeModal, #peopleModalBkgd').click(function () {
    modalBkgd.hide()
})