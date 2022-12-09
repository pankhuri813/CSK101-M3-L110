// Progression 1: create a function and fetch the api using axios
{/* <div class="article">
<h3> wer </h3>
<img src="" alt="image here">
<p> 345</p>
</div>
<div class="article">
<h3> wer </h3>
<img src="" alt="image here">
<p> 345</p>
</div> */}

const articleGrid = document.getElementById('articleGrid');

function populateData()
{
  axios
  .get('https://gnews.io/api/v4/top-headlines?token=9b601f7a22b8d3de7bde759631905832&lang=en')
  
  .then((res)=>{
console.log(res.data);
const articles = res.data.articles;

articles.forEach((article)=>{
  const articleElement = document.createElement('div')
  const titleElement = document.createElement('h3')
  const imageElement = document.createElement('img')
  const contentElement = document.createElement('p')

articleElement.setAttribute('class','article');


titleElement.innerText= article.title;
imageElement.setAttribute('src',article.image);
contentElement.innerText= article.content;


articleElement.append(titleElement);
articleElement.append(imageElement);
articleElement.append(contentElement);

articleGrid.append(articleElement);

});
  });
}

populateData();