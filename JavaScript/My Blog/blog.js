var postContainer = [
    {
        id: 1,
        blogTitle: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehender it molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    }, {
        id: 2,
        blogTitle: "qui est esse",
        content: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    }, {
        id: 3,
        blogTitle: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        content: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
    }, {
        id: 4,
        blogTitle: "eum et est occaecati",
        content: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
    }, {
        id: 5,
        blogTitle: "nesciunt quas odio",
        content: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
    }
];

var i = 1;
function createBlog(element) {
    var item, post, number, postInfo, blogTitle, blogDesc;
    post = document.createElement("div");
    post.classList.add('post');
    post.style = `position: relative;
        background-color: #4992d3;
        box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
        border-radius: 3px;
        padding: 20px;
        margin: 40px 0;
        width: 100%;
        max-width: 750px;
    `;

    number = document.createElement("div");
    number.classList.add('number');
    number.innerHTML = i++;
    number.style=`
        position: absolute;
        top: -15px;
        left: -15px;
        font-size: 18px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #fff;
        color: #296ca8;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px 10px;
    `;

    postInfo = document.createElement("div");
    postInfo.classList.add('postInfo');
    postInfo.style=`
        margin-left: 20px;
    `;

    blogTitle = document.createElement("h2");
    blogTitle.classList.add('blogTitle');

    blogDesc = document.createElement("p");
    blogDesc.classList.add('blogDesc');

    blogTitle.append(element.blogTitle);
    blogDesc.append(element.content);

    post.appendChild(number);
    postInfo.appendChild(blogTitle);
    postInfo.appendChild(blogDesc);
    postWrapper.appendChild(post);
    post.appendChild(postInfo);
}

postContainer.slice(0, 5).forEach((element) => {
    createBlog(element);
});

var initialNumber = 5;
// postContainer.slice(0, initialNumber);
// console.log(postContainer.slice(0, initialNumber));
function showLoader() {
    loader.classList.add('show');
    setTimeout(function () {
        loader.classList.add("hide");
        setTimeout(() => {
            initialNumber += 5;
            postContainer.slice(0, initialNumber).forEach((element) => {
                // console.log(element);
                createBlog(element);
                loader.classList.remove('hide');
            });
        }, 500);
    }, 2000);
}

function loading() {
    if (window.scrollY + this.window.innerHeight >= document.documentElement.scrollHeight) {
        // console.log("loader");
        showLoader();
    }
}
window.addEventListener('scroll', function (event) {
    loading();
})

const searchEl = document.getElementById('search');

searchEl.addEventListener('keyup', function (event) {
    searchString = event.target.value.toLowerCase();
    console.log(searchString);
    var filteredCharacter = postContainer.filter(character => {
        return (
            character.blogTitle.toLowerCase().includes(searchString) ||
            character.content.toLowerCase().includes(searchString));
    });
    // console.log(filteredCharacter);
    // createBlog(filteredCharacter);
});