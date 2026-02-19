const blogForm = document.getElementById("blogForm");
const postsContainer = document.getElementById("posts");

blogForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  // Create post element
  const post = document.createElement("div");
  post.classList.add("post");

  post.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;

  // Edit functionality
  post.querySelector(".edit").addEventListener("click", () => {
    document.getElementById("title").value = title;
    document.getElementById("content").value = content;
    post.remove();
  });

  // Delete functionality
  post.querySelector(".delete").addEventListener("click", () => {
    post.remove();
  });

  postsContainer.appendChild(post);

  // Reset form
  blogForm.reset();
});