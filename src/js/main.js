console.log('It is working!')
document.getElementById('surpriseButton').addEventListener('click', function (surpriseEvent) {
  surpriseEvent.preventDefault()
  const user = document.getElementById('enterName').value
  const angryEmoji = document.getElementById('angryEmoji')
  if (user === '') {
    document.getElementById('displayFact').textContent = 'You did not enter a name. Therefore you do not get an intersting fact. Instead you get this:'

    angryEmoji.classList.remove('hidden')
  } else {
    document.getElementById('angryEmoji').classList.add('hidden')

    if (user.length === 1) {
      document.getElementById('displayFact').textContent = 'This is interesting fact number one: JavaScript was invented in 1995. Can you figure out why you got this specific fact?'
    } else if (user.length === 2) {
      document.getElementById('displayFact').textContent = 'This is the interesting fact number two: CSS was invented in 1996. Can you figure out why you got interesting fact number two?'
    } else if (user.length === 3) {
      document.getElementById('displayFact').textContent = 'This is the third interesting fact: Elephants can not jump. Can you figure out why you got interesting fact number three?'
    } else if (user.length === 4) {
      document.getElementById('displayFact').textContent = 'This is the interesting fact number four: There exists more than 700 different coding languages . Can you figure out why you got interesting fact number four?'
    } else if (user.length === 5) {
      document.getElementById('displayFact').textContent = 'This is the interesting fact number five: Python was first released in 1991. Can you figure out why you got interesting fact number five?'
    } else if (user.length === 6) {
      document.getElementById('displayFact').textContent = 'This is the interesting fact number six: C++ was created in 1979 and released to the public in 1983. Can you figure out why you got interesting fact number six?'
    } else if (user.length === 7) {
      document.getElementById('displayFact').textContent = 'This is the interesting fact number seven: HTML was created in 1991 and the first version was released to the public in 1993. Can you figure out why you got interesting fact number seven?'
    } else if (user.length === 8) {
      document.getElementById('displayFact').textContent = 'This is the interesting fact number eight: The first emoji was created in 1999 . Can you figure out why you got interesting fact number eight?'
    } else if (user.length === 9) {
      document.getElementById('displayFact').textContent = 'This is the interesting fact number nine: Linnéuniversitetet was founded in 2010 . Can you figure out why you got interesting fact number nine?'
    } else if (user.length >= 10) {
      document.getElementById('displayFact').textContent = 'This is the interesting fact number ten to infinity: Visual Studio Code was released in 2015 . Can you figure out why you got interesting fact number ten to infinity?'
    }
  }
})
