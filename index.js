// getting the value from url after '#'
const hashMessage = window.location.hash
// decoding the message from url
const message = atob(hashMessage.replace('#',''))

//check if there is a message 
if (message != ''){
    // adding class hide to the input message. selecting by id
    document.querySelector('#message-card').classList.add('hide')
    document.querySelector('#hash-card').classList.add('hide')

    // removing class hide to show the message
    document.querySelector('#message-show').classList.remove('hide')
    // get the h1 and change its value to be the message
    const theHeader = document.querySelector('#the-message')
    theHeader.innerHTML = message

}

const create = document.querySelector('button');

create.addEventListener('click',(event) => {
    // prevent the automatic refresh
    event.preventDefault();
    // get the input and encode
    const input = document.querySelector('#message-input');
    const encoded = btoa(input.value);
    // but the value in a result input, with a link selected to be shared
    const toShare = document.querySelector('#message-result');
    toShare.value = window.location + '#' + encoded;
    toShare.select();
});