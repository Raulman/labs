function onClick(element) {
    if(document.getElementById('selected'))
        document.getElementById('selected').id = '';
    element.id = 'selected';
}