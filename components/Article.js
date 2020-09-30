import data from './ArticleData'
// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>
*/
function articleMaker(title, date, firstParagraph, secondParagraph, thirdParagraph) {

  const articleDiv = document.createElement('div')
  const titleDiv = document.createElement('h2')
  const dateDiv = document.createElement('p')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const expand = document.createElement('span')

  articleDiv.className = 'article'
  expand.className = 'expandButton'
  dateDiv.className = 'date'

  articleDiv.append(titleDiv, dateDiv, p1, p2, p3, expand)

  titleDiv.textContent = title
  dateDiv.textContent = date
  p1.textContent = firstParagraph
  p2.textContent = secondParagraph
  p3.textContent = thirdParagraph
  expand.textContent = '+'
  expand.style.fontSize = '2.4rem'
  expand.style.fontWeight = 'bold'
  expand.style.color = 'black'

  // Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  // This listener should toggle the class 'article-open' on div.article.
  expand.addEventListener('click', () => {
    articleDiv.classList.toggle('article-open')
    if(expand.textContent === '+'){
      expand.textContent = '-'
    }else {
      expand.textContent = '+'
    }
  })

  // Step 3: Don't forget to return something from your function!
  return articleDiv
}
// Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
// to create a div.article element and append it to the DOM inside div.articles (see index.html).

/* Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
    Refresh the page to see the new article. */

data.forEach(obj => {
  const { title, date, firstParagraph, secondParagraph, thirdParagraph } = obj
  const article = articleMaker(title, date, firstParagraph, secondParagraph, thirdParagraph)
  document.querySelector('.articles').appendChild(article)
})

const menuDiv = document.createElement('div')
console.log(menuDiv)