// โหลดข้อมูลบล็อก
function loadBlogs() {
  const url = "data/blogs.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const blogs = data.blogs;
      const blogList = document.querySelector(".blog-list");
      for (const blog of blogs) {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="#">
            <img src="${blog.image}" alt="${blog.title}">
            <h3 class="text-primary">${blog.title}</h3>
            <p>${blog.description}</p>
          </a>
        `;
        blogList.appendChild(li);
      }
    });
}

// โหลดข้อมูลสถิติ
function loadStatistics() {
  const url = "data/statistics.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const totalBlogs = data.totalBlogs;
      const totalViews = data.totalViews;
      document.querySelector("#total-blogs").textContent = totalBlogs;
      document.querySelector("#total-views").textContent = totalViews;
    });
}

// เรียกใช้ฟังก์ชันโหลดข้อมูล
loadBlogs();
loadStatistics();
