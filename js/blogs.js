var url = window.location;
var title = document.title;
var mnsocial = document.getElementsByClassName('mn-social-bottom');
mnsocial[0].href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
mnsocial[1].href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title;
mnsocial[2].href = 'https://linkedin.com/shareArticle?mini=true&url=' + url;
mnsocial[3].href = 'https://wa.me/?text=' + url;

const input = document.getElementById("text");
input.setAttribute("value", url)
const copyButton = document.getElementById("copy");

const copyText = (e) =>{
    input.select();
    document.execCommand("copy");
    e.currentTarget.setAttribute("tooltip", "Copied!")
};
const resetToolTip = (e) => {
    e.currentTarget.setAttribute("tooltip", "Copy to clipboard!");
};

copyButton.addEventListener("click", (e) => copyText(e));
copyButton.addEventListener("mouseover", (e) => resetToolTip(e));