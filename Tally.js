/**
 * Write cookie and set the expiration to forever. It will only write once.
 *
 * @param String name
 * @param String value
 * @param Boolean checkWithValue
 * @return void
 */
function writePermanentCookie(name, value)
{
    var currentYear = (new Date()).getFullYear() + 3;
    var expires = (new Date(currentYear, 12, 12)).toUTCString();
    document.cookie = name + '=' + value + ';path=/;expires=' + expires;
}

var counter = document.getElementById('counter');
function increment()
{
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    writePermanentCookie('lastCounter', counter.innerHTML);
}

document.onmousedown = function(e)
{
    e.preventDefault();
    return false;
}

document.onkeypress = function(e)
{
    increment();
}

document.onclick = function(e)
{
    increment();
}

document.getElementById('reset').onclick = function(e)
{
    e.preventDefault();
    counter.innerHTML = -1;
}

window.onload = function(e)
{
    var lastValue = document.cookie.replace(/(?:(?:^|.*;\s*)lastCounter\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (lastValue) {
        counter.innerHTML = lastValue;
    }
}
