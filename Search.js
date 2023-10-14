// ฟังก์ชันค้นหาบทความ
function searchBlogs(query) {
    const blogs = document.querySelectorAll(".blog-list li");
    const filteredBlogs = blogs.filter((blog) => {
        const title = blog.querySelector("h3").textContent;
        const description = blog.querySelector("p").textContent;
        return title.toLowerCase().includes(query.toLowerCase()) ||
            description.toLowerCase().includes(query.toLowerCase());
    });
    for (const blog of filteredBlogs) {
        blog.style.display = "block";
    }
}

// ฟังก์ชันซ่อนบทความ
function hideBlogs() {
    const blogs = document.querySelectorAll(".blog-list li");
    for (const blog of blogs) {
        blog.style.display = "none";
    }
}

// เหตุการณ์กดปุ่มค้นหา
document.querySelector(".search form").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = event.target.querySelector("input").value;
    searchBlogs(query);
});

// เหตุการณ์กดปุ่มซ่อน
document.querySelector(".search form button").addEventListener("click", (event) => {
    hideBlogs();
});