// Smooth Scroll to #links ============================================= //

//get all # links in the document
var links = document.querySelectorAll('a[href*="#"]');

//assign a click event to all the # links
for(var l = 0; l < links.length; l++) {
    links[l].addEventListener('click', scrollMe, false);
}

function scrollMe(e) {
    e.preventDefault(); //needed in order for the scroll to work

    var hash = e.target.hash;

    //check if hash is not empty
    if(hash) {   

        // Scroll to that element
        document.querySelector(hash).scrollIntoView({ 
           behavior: 'smooth'
        });
    }
}
