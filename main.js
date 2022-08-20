function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

document.querySelector('body').onclick = function(e) {
    if(e.target.className != 'close' && e.target.className != 'material-symbols-outlined') return
    let item = e.target.closest('.card')
    item.remove()
}

document.getElementById('costId').onkeyup = function(e) {
    let cost_input = document.getElementById("costId").value;
    cost_input = cost_input.replaceAll(" ", "");
    cost_input = numberWithSpaces(cost_input);

    document.getElementById("costId").value = cost_input;
    console.log(cost_input);
}