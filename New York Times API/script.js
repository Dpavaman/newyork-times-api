
document.body.style.overflow = 'scroll';
var container = document.createElement('div');
container.classList.add('container','text-center');
document.body.appendChild(container);
//---------------------------------------------------------------------------------------------------------Master Container--------------------------------------------------------------------------------------------------------------------------
var heading = document.createElement('div');
heading.classList.add('badge','text-center','badge-primary','text-wrap');
heading.setAttribute('style','font-size:2rem; margin:1rem 1rem;')
heading.innerHTML = `New York Times Top Stories API`;
container.appendChild(heading);
//------------------------------------------------------------------------------------------------------------Page Heading----------------------------------------------------------------------------------------------------------------------------
const tabs = ['HOME','WORLD','POLITICS','MAGAZINE','TECHNOLOGY','SCIENCE','HEALTH','SPORTS','ARTS','FASHION' /*,'FOOD','TRAVEL'*/];

var pagination = document.createElement('div');
pagination.classList.add('container','text-center');
var nav = document.createElement('nav');
var ul = document.createElement('ul');
ul.classList.add('breadcrumb','justify-content-center');
for(let ind = 0 ; ind < tabs.length ; ind++)
{
    var li = document.createElement('li');
    li.classList.add('breadcrumb-item');
    var anchor = document.createElement('button');
    //anchor.classList.add('page-link');
    anchor.setAttribute('style','border:none; background:inherit;')
    anchor.setAttribute('onclick',`${tabs[ind].toLowerCase( )}()`);
    anchor.id = `${tabs[ind].toLowerCase()}`;
    anchor.innerHTML = `${tabs[ind]}`;
    li.appendChild(anchor);
    ul.appendChild(li);
}

container.appendChild(pagination);
pagination.appendChild(nav);
nav.appendChild(ul);
//--------------------------------------------------------------------------------------------------------------BreadCrumb----------------------------------------------------------------------------------------------------------------------------
var API = 'eEPPsfm3o8klfPQgBayi6lcGkpuOWnV3';

function loaded()
{
    for(let ind = 0 ; ind < tabs.length ; ind++)
    {
        var page = document.createElement('div');
        page.classList.add('container','text-center');
        page.id = `${tabs[ind].toLowerCase()}page`;
        page.style.visibility = 'hidden';
        page.style.display = 'none';
    

        getdata();

        //clicked();
        async function getdata(){
            var response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${tabs[ind].toLowerCase()}.json?api-key=${API}`);
            var data = await response.json();
    
            for(let index = 0 ; index < 11 ; index++)
            {
                var card = document.createElement('div');
                card.classList.add('card','mb-3','text-left');
    
                var row = document.createElement('div');
                row.classList.add('row','d-flex');
    
                var contentCol = document.createElement('div');
                contentCol.classList.add('col-md-8');
                
                var cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
    
                var h5 = document.createElement('h5');
                h5.classList.add('card-title');
                h5.innerHTML = `${data.results[index].section.toUpperCase()}`;
    
                var title = document.createElement('p');
                title.classList.add('display-5');
                title.innerHTML = `<b>${data.results[index].title}</b>`;
    
                var date = document.createElement('p');
                date.classList.add('card-text','datecard');
                date.innerHTML = ` ${new Date(data.results[index].created_date).toLocaleString('default', {month: 'short'})} ${new Date(data.results[index].created_date).getFullYear()}`;
    
                var abstract = document.createElement('p');
                abstract.classList.add('card-text','abstractcard');
                abstract.innerHTML = `${data.results[index].abstract}`;
    
                var readMore = document.createElement('a');
                readMore.classList.add('badge','badge-primary','continueReading');
                readMore.setAttribute('href',`${data.results[index].url}`);
                readMore.setAttribute('target','new');
                readMore.innerHTML =   `Continue Reading`
    
                var imageCol = document.createElement('div');
                imageCol.classList.add('col-md-4','d-flex');
                var image = document.createElement('img');
                image.classList.add('img-thumbnail','card-image');
                image.setAttribute('src',`${data.results[index].multimedia[0].url}`);
    
    
                contentCol.appendChild(h5);
                contentCol.appendChild(title);
                contentCol.appendChild(date);
                contentCol.appendChild(abstract);
                contentCol.appendChild(readMore);
                contentCol.appendChild(cardBody);
                row.appendChild(contentCol);
                imageCol.appendChild(image);
                row.appendChild(imageCol);
                card.appendChild(row);
                document.getElementById(`${tabs[ind].toLowerCase()}page`).appendChild(card)
               
            }
            console.log(data);
        }   
       
    
        document.body.appendChild(page);
    }
}


function disable(id){
    document.getElementById(id).style.display = 'none';
    document.getElementById(id).style.visibility = 'hidden';
}

function home(){
    var home = document.getElementById('homepage');
    home.style.visibility = 'visible';
    home.style.display = 'block';
    for(let ind = 1 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }
}

function world(){
    disable('homepage');
    for(let ind = 2 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }
    var world = document.getElementById('worldpage');
    world.setAttribute('style','z-index:2; position:absolute; top:150px; left:110px');
    world.style.visibility = 'visible';
    world.style.display = 'block';
    
}

function politics(){
    for(let ind = 0 ; ind < 3 ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    for(let ind = 3 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    var politics = document.getElementById('politicspage');
    politics.setAttribute('style','z-index:2; position:absolute; top:150px; left:110px');
    politics.style.visibility = 'visible';
    politics.style.display = 'block';    
}

function magazine(){
    for(let ind = 0 ; ind < 4 ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    for(let ind = 4 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    var magazine = document.getElementById('magazinepage');
    magazine.setAttribute('style','z-index:2; position:absolute; top:150px; left:110px');
    magazine.style.visibility = 'visible';
    magazine.style.display = 'block';    
}

function technology(){
    for(let ind = 0 ; ind < 5 ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    for(let ind = 5 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    var technology = document.getElementById('technologypage');
    technology.setAttribute('style','z-index:2; position:absolute; top:150px; left:110px');
    technology.style.visibility = 'visible';
    technology.style.display = 'block';    
}

function science(){
    for(let ind = 0 ; ind < 6 ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    for(let ind = 6 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    var science = document.getElementById('sciencepage');
    science.setAttribute('style','z-index:2; position:absolute; top:150px; left:110px');
    science.style.visibility = 'visible';
    science.style.display = 'block';    
}

function health(){
    for(let ind = 0 ; ind < 7 ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    for(let ind = 7 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    var health = document.getElementById('healthpage');
    health.setAttribute('style','z-index:2; position:absolute; top:150px; left:110px');
    health.style.visibility = 'visible';
    health.style.display = 'block';    
}

function sports(){
    for(let ind = 0 ; ind < 8 ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    for(let ind = 8 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    var sports = document.getElementById('sportspage');
    sports.setAttribute('style','z-index:2; position:absolute; top:150px; left:110px');
    sports.style.visibility = 'visible';
    sports.style.display = 'block';    
}

function arts(){
    for(let ind = 0 ; ind < 9 ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    for(let ind = 9 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    var arts = document.getElementById('artspage');
    arts.setAttribute('style','z-index:2; position:absolute; top:150px; left:110px');
    arts.style.visibility = 'visible';
    arts.style.display = 'block';    
}
function fashion(){
    for(let ind = 0 ; ind < 10 ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    for(let ind = 10 ; ind < tabs.length ; ind++)
    {
        disable(`${tabs[ind].toLowerCase()}page`);
    }

    var fashion = document.getElementById('fashionpage');
    fashion.setAttribute('style','z-index:2; position:absolute; top:150px; left:110px');
    fashion.style.visibility = 'visible';
    fashion.style.display = 'block';    
}
document.body.setAttribute('onload','home()');
loaded();
