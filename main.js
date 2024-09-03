console.log('It is working!')
document.getElementById('surpriseButton').addEventListener('click', function(surpriseEvent) {
  surpriseEvent.preventDefault()
const user = document.getElementById('enterName').value
if (user === '') {
    document.getElementById('displayFact').textContent = 'You did not entar a name. Therefore you dont get an intersting fact. Instead you get this:'
    const angryEmoji=document.getElementById('angryEmoji')
    angryEmoji.classList.remove('hidden')
} else if (user.length === 1) {
    document.getElementById('displayFact').textContent = 'This is interesting fact number one: JavaScript was invented in 1995. Can you figure out why you got this specific fact?'
} else if (user.length === 2) {
        document.getElementById('displayFact').textContent = 'This is the second interesting fact'
    } else if (user.length === 3) {
        document.getElementById('displayFact').textContent = 'This is the third interesting fact'
    } 

})