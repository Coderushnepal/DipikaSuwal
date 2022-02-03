var title = document.createElement("h1");
title.innerHTML = "My Blog";
title.style = `
    margin-bottom: 0;
    text-align: center;
`;

var container = document.createElement("div");
container.style = `
    margin:0 auto;
    width:750px;
`;

container.appendChild(title);
document.body.appendChild(container);

var search = document.createElement("input");
search.id = 'search';
search.placeholder = "Filter posts...";
search.style = `
    width: 100%;
    padding: 12px;
    font-size: 16px;
    margin:20px 0;
`;

container.appendChild(search);

var postWrapper = document.createElement("div");
postWrapper.id = "wrapper";
container.appendChild(postWrapper);

var loader = document.createElement("span");
loader.style.marginLeft="400px";
loader.classList.add("loader");
loader.classList.add('show');

container.appendChild(loader);