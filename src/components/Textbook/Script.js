
const groupAll = document.querySelector('.group');
const groupBtns = document.querySelectorAll('.button-group');

groupBtns.forEach((item) => {
  item.addEventListener('click', (event) => {
    let group = event.target.dataset.num;
    console.log(group);
    getGP(group);
    
  })
})

groupAll.addEventListener('click', function (event) {
  if (event.target !== this) {
    [...this.children].forEach(item => item.classList.toggle('button-active', item === event.target));
  }
});

async function getGP(group) {
  try {
    const url = `https://react-learnwords-example.herokuapp.com/words?group=${group}&page=${2}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = "";

    data.forEach(({ 
      audio, 
      audioExample, 
      audioMeaning, 
      image, 
      textExample, 
      textExampleTranslate, 
      textMeaning, 
      textMeaningTranslate,
      transcription, 
      word, 
      wordTranslate }) => {
      const cardsBlock = document.createElement('div');
      cardsBlock.classList.add('card');

      cardsBlock.innerHTML = `
        <img src="https://react-learnwords-example.herokuapp.com/${image}" alt="${word}" class="card-img">
        <div class="card-description">
          <div class="card-wrapper">
            <h3 class="word">Слово: ${word}</h3>
            <h3 class="word">Перевод: ${wordTranslate}</h3>
            <h4 class="word">Транскрипция: ${transcription}</h4>
            <button class="play"></button>
            <audio class="word" src="https://react-learnwords-example.herokuapp.com/${audio}" controls></audio>
            <audio class="word" src="https://react-learnwords-example.herokuapp.com/${audioExample}" controls></audio>
            <audio class="word" src="https://react-learnwords-example.herokuapp.com/${audioMeaning}" controls></audio>
            <p class="word">${textExample}</p>
            <p class="word">${textExampleTranslate}</p>
            <p class="word">${textMeaning}</p>
            <p class="word">${textMeaningTranslate}</p>
          </div>
        </div>
      `;

      cardsContainer.append(cardsBlock);

      const playBtn = document.querySelector('.play');
      console.log(playBtn);
      const audio1 = new Audio();

      
      function playAudio() {
        audio1.src = `https://react-learnwords-example.herokuapp.com/${audio}`;
        audio1.currentTime = 0;
        audio1.play();
      }

      playBtn.addEventListener('click', playAudio);

    });
  } catch (err) {
    console.log('Error! Not found!');   
  }
}
