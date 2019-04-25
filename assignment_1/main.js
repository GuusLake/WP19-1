function change_title_index() {
    document.title = 'Index';
}
function change_title_second(){
    document.title = 'Second';
}

function generate_content() {
    document.querySelector('.container .row .col-md-12').appendChild(document.createElement('article'));
    document.querySelector('.container .row .col-md-12').lastChild.appendChild(document.createElement('h1'));
    document.querySelector('.container .row .col-md-12').lastChild.appendChild(document.createElement('p'));
    // the first child being the title and the last child being the text
    document.querySelector('.container .row .col-md-12').lastChild.firstChild.innerHTML = 'This is my second article';
    document.querySelector('.container .row .col-md-12').lastChild.lastChild.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. Nulla facilisi.';

    // adding the schedule as a thrid article
    var info = {week1:'Assignment 1',
        week2:'No lecture',
        Week3:'Assignment 2',
        Week4:'-',
        Week5:'Assignment 3',
        Week6:'-',
        Week7:'Guest Lecture'
    };

    document.querySelector('.container .row .col-md-12').appendChild(document.createElement('article'));
    document.querySelector('.container .row .col-md-12').lastChild.appendChild(document.createElement('ol'));

    for (var key in info){
        var li_value = 'week ' + ': ' + info[key];
        document.querySelector('.container .row .col-md-12').lastChild.lastChild.appendChild(document.createElement('li'));
        document.querySelector('.container .row .col-md-12').lastChild.lastChild.lastChild.innerHTML = li_value;
    }
}

function change_link() {
    document.querySelectorAll('#links ul li a')[2].href = 'https://google.com';
    // depending on the browser it could also open a new tab
    document.querySelectorAll('#links ul li a')[2].setAttribute('target', '_blank');
}

function colour_nav() {
    // for each item with the nav-item tag add a style attribute with value color:red;
    // this doesn't show however as the nav-items are filled with links which turn blue
    let nav_list = document.getElementsByClassName('nav-item');
    for (i=0; i < nav_list.length; i++){
        nav_list[i].setAttribute('style', 'color:red;');
    }
}

function generate_sidebar() {
    // the document does not have a div in the container stating it should be a row and this is not discussed in the
    // assignment so the sidebar is placed on the bottom
    document.querySelector('.container .col-md-12').className = 'col-md-8';
    document.querySelector('.container').appendChild(document.createElement('div'));
    document.querySelector('.container').lastChild.className = 'col-md-4';
    document.querySelector('.container').lastChild.appendChild(document.createElement('h1'));
    document.querySelector('.container').lastChild.lastChild.innerHTML = 'Sidebar'
}