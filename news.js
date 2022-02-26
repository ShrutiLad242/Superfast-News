// Initialize the news api parameters
var source = 'the-times-of-india';
let apiKey = '495a882ca2684fdbb1e11ec0846a6761'
let category = 'general'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

reload();

let General = document.getElementById('type_news_1');
General.addEventListener('click', () => {
    category = 'General';
    reload();
});

let Entertainment = document.getElementById('type_news_2');
Entertainment.addEventListener('click', () => {
    category = 'Entertainment';
    reload();
});

let Business = document.getElementById('type_news_3');
Business.addEventListener('click', () => {
    category = 'Business';
    reload();
});

let Health = document.getElementById('type_news_4');
Health.addEventListener('click', () => {
    category = 'Health';
    reload();
});

let Science = document.getElementById('type_news_5');
Science.addEventListener('click', () => {
    category = 'Science';
    reload();
});

let Technology = document.getElementById('type_news_7');
Technology.addEventListener('click', () => {
    category = 'Technology';
    reload();
});

let Sports = document.getElementById('type_news_6');
Sports.addEventListener('click', () => {
    category = 'Sports';
    reload();
});





// Create an ajax get request


function reload() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=495a882ca2684fdbb1e11ec0846a6761`, true);

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function (element, index) {
                // console.log(element, index)
                let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;
        }
        else {
            console.log("Some error occured")
        }
    }
    xhr.send()
}