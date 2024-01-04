// HTML Templates

/*
HTML templates, in the context of web development, typically refer to a method of structuring and organizing the HTML code in a way that 
allows for dynamic content insertion. This is commonly achieved using template engines or template literals in JavaScript.
*/

function htmlTemplate() {
    let heading = "Template Strings";
    let tags = ["Interpolation", "Multiline", "ES6"];

    let html =
        `<h2>${heading}</h2>
        <ul>`;

    for (const x of tags) {
        html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    document.getElementById("demo").innerHTML = html;
}

