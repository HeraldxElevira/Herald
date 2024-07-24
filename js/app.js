var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #0BCEAF;}";
    document.body.appendChild(css);
};


// For Modal

    //Retrieves all the item and then the modal id
const items = document.querySelectorAll('.item');
const modalTemplate = document.getElementById('exampleModal');

    //Loops through each items
items.forEach((items, index) => {
    //Retrieve each data-image attribute of every item we looped
    const image = items.getAttribute('data-image');
    //Prepare new id of each iterated item (index) by adding 1 to exampleModal id = exampleModal1, exampleModal2, etc.
    const modalId = `exampleModal${index + 1}`;
    //create a clone after preparing new id
    const modalClone = modalTemplate.cloneNode(true);

    //Make sure the clone and the new modal id is match
    modalClone.id = modalId;


    //Set attribute to each items we looped with the default toggle
    //Set the target attribute to the modalId
    items.setAttribute('data-bs-toggle', 'modal');
    items.setAttribute('data-bs-target', `#${modalId}`);

    //Retrieve each img element and sets the source of it by the cloned image
    modalClone.querySelector('img').src = image;

    //Appends the cloned modal to the body of the document
    document.body.appendChild(modalClone);
})


// Scroll back to Top

// 1. Retrieve button for scroll to top
const scrollBtn = document.getElementById('btn-back-to-top');

// 2. Create a function that if the body or the documents
// ScrollTop is greater than 150px, then the button's
// display is shown or not.
function scrollFunction(){
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// 3. Call the function upon the scrolling event of the
// document
window.onscroll = function (){
    scrollFunction();
}
// 4. When User clicks, a function is activated
scrollBtn.addEventListener('click', rollBackToTop);

// 5. rollBack to Top, set the document's scrollTop
// to zero
function rollBackToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}