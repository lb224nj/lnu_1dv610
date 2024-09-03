console.log('It is working!')
document.getElementById('surpriseButton').addEventListener('click', function(surpriseEvent) {
  surpriseEvent.preventDefault()
const user = document.getElementById('enterName').value
if (user.length === 1) {
    document.getElementById('displayFact').textContent = 'This is the first interesting fact'
}
})