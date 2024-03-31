function toggleMenu() {
    var navList = document.getElementById('navList');
    navList.classList.toggle('show');
}

function searchFunction() {
    var input, filter, dropdown, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    dropdown = document.getElementsByClassName("dropdown-content")[0];
    a = dropdown.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
