const input = document.getElementById('input')
const btn = document.getElementById('btn')
const filter = document.getElementById('filter')
const list = document.getElementById('list')
const feedBack = document.getElementById('feed-back')
const clearBtn = document.getElementById('clear-btn')

//  *******               *******

btn.addEventListener('click', function() {
    
    let inputValue = input.value

    let i = createElement('i', 'icofont-close', )
    let li = createElement('li', 'list-group-item li', inputValue)
    li.appendChild(i)
    
    if(inputValue == '') {
        // alert('Please provide a value')
        feedBack.style.visibility = 'visible'
        input.style.borderColor = 'red'
    }else{
        list.appendChild(li)
        feedBack.style.visibility = 'hidden'
        input.style.borderColor = 'green'
        input.value = ''
    }

})

// remove list elements 
list.addEventListener('click', function(event) {
    if(event.target.classList == 'icofont-close'){
        if(confirm('Are you sure?')){
            event.target.parentElement.remove()
        }
    }
})

list.addEventListener('dblclick', function(e){
    if(this.contains(e.target)){
        let innerText = e.target.innerText
        e.target.innerHTML = ''
        let inputBox = createInputBox(innerText)
        e.target.appendChild(inputBox)

        inputBox.addEventListener('keypress', function(event) {
            if(event.key === 'Enter') {
                let inputValue = event.target.value
                e.target.innerText = inputValue
                
            }
        })
    }
    
})

// create input box 
function createInputBox(value) {
    let inp = document.createElement('input')
    inp.className = 'form-control'
    inp.type = 'text'
    inp.value = value

    return inp

}

//  create any tag
function createElement(tagName, className, innerHTML){
    let tag = document.createElement(tagName)
    tag.className = className || ''
    tag.innerHTML = innerHTML || ''

    return tag
}

// filter task
filter.addEventListener('keyup', function(e) {
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('.list-group').forEach( task => {
        let item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block'
        }else{
            task.style.display = 'none'
        }
    });

})

// clear all task 
clearBtn.addEventListener('click', function(e) {
    if(confirm('Are you sure ?')){
        list.innerHTML = ''
    }
})
