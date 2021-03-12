console.log("This index.js");
// 7057d07180d74e1ca0660fae2ddcf74b

//Grab the news container
let newsAccordian = document.getElementById('newsAccordian');
let apiKeyy = "b2c3ca6a54659d05b5892ba03e1fb219";
//Create get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=${apiKeyy}`, true);
// xhr.getResponseHeader('Content-type', 'application/json');
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles1 = json.articles;
        console.log(articles1);
        // console.log(articles1[news]);
        let newsHtml = "";
        articles1.forEach(function(element, index){
            let news = `
                    <div class="card">
                         <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index+1}:</b>${element["title"]}
                            </button>
                            </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                        <div class="card-body">
                        ${element["description"]}. <a href="${element["url"]}" target="_blank">Read More Here....</a>
                        </div>
                        </div>
                    </div>`;
                newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    } else {
        console.log("Some error Occured");
    }
}

xhr.send();

