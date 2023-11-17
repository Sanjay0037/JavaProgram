/*
    [ search functiion ]
*/ 

document.getElementById('search').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('#content li');

    listItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

/*
    -------------------------------------------------
    | add copy button  | target "code" class loop to add button
    ------------------------------------------------
*/ 
let code = document.getElementsByClassName("code");

for (let i = 0; i < code.length; i++)
{
    code[i].insertAdjacentHTML("afterbegin",`<button class="copy">Copy</button>`)
}
/*
    -------------------------------------------------
    | copy button functionality  | copy  pre.code  code.innerHTML
    ------------------------------------------------
*/ 
let copy = document.getElementsByClassName("copy");
  
for (let i = 0; i < copy.length; i++)
{
    copy[i].onclick = function()
    {
        const copytext = document.querySelectorAll(".code code")[i].innerHTML

        // tera kand hai ----------------------------------
        navigator.clipboard.writeText(copytext).then(function() {

            copy[i].innerHTML = "Copied!"
            copy[i].classList.add("copied");

            setTimeout(function() {
                copy[i].innerHTML = "Copy";
                copy[i].classList.remove("copied");
            }, 1500);
        })
        .catch(function(err) {
          console.error('Unable to copy to clipboard', err);
        });
        // to samajh ----------------------------------
    }
}