const input = document.querySelector('#favchap');
const button = document.querySelector('button')
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        //populate the li elements textContent or innerHTML with the input value

        li.textContent = input.value;
        //populate the button textContent with a ❌
        deleteButton.textContent = '❌';
        //append the li element with the delete button
        li.append(deleteButton);
        //append the li element to the unordered list in your HTML
        list.append(li);
        //add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        //send the focus to the input element

    }
    input.focus();
    // change the input value to nothing or the empty string to clean up the interface for the user
    input.value = '';
});