const commentForm = document.getElementById("comment-form");
const nameInput = document.getElementById("name");
const commentArea = document.getElementById("comment");
const commentsContainer = document.querySelector(".comments");

commentForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newComment = createComment(nameInput.value, commentArea.value);
  commentsContainer.appendChild(newComment);

  saveCommentsToLocalStorage();
  
  nameInput.value = "";
  commentArea.value = "";
});

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("reply-btn")) {
    const replyContainer = event.target.nextElementSibling;
    const replyForm = createReplyForm();

    replyContainer.appendChild(replyForm);
    event.target.style.display = "none";
  }

  if (event.target.classList.contains("submit-reply-btn")) {
    const replyContainer = event.target.parentElement;
    const replyName = replyContainer.querySelector(".reply-name").value;
    const replyComment = replyContainer.querySelector(".reply-comment").value;

    if (replyName && replyComment) {
      const reply = createReply(replyName, replyComment);
      replyContainer.insertBefore(reply, replyContainer.querySelector(".reply-form"));

      saveCommentsToLocalStorage();
      
      replyContainer.querySelector(".reply-name").value = "";
      replyContainer.querySelector(".reply-comment").value = "";
    }
  }
});

function createComment(name, comment) {
  const commentBox = document.createElement("div");
  commentBox.className = "comment-box";

  const commentContent = document.createElement("p");
  commentContent.innerHTML = `<strong>${name}:</strong> ${comment}`;
  commentBox.appendChild(commentContent);

  const replyButton = document.createElement("button");
  replyButton.className = "reply-btn";
  replyButton.textContent = "Balas";
  commentBox.appendChild(replyButton);

  const replyContainer = document.createElement("div");
  replyContainer.className = "reply-container";
  commentBox.appendChild(replyContainer);

  return commentBox;
}

function createReplyForm() {
    const replyForm = document.createElement("div");
  replyForm.className = "reply-form";

  const nameInput = document.createElement("input");
  nameInput.className = "reply-name";
  nameInput.type = "text";
  nameInput.placeholder = "Nama Anda";
  replyForm.appendChild(nameInput);

  const commentInput = document.createElement("textarea");
  commentInput.className = "reply-comment";
  commentInput.placeholder = "Tulis balasan Anda...";
  commentInput.rows = 3;
  replyForm.appendChild(commentInput);

  const submitButton = document.createElement("button");
  submitButton.className = "submit-reply-btn";
  submitButton.textContent = "Kirim Balasan";
  replyForm.appendChild(submitButton);

  return replyForm;
}

function createReply(name, comment) {
  const replyBox = document.createElement("div");
  replyBox.className = "reply-box";

  const replyContent = document.createElement("p");
  replyContent.innerHTML = `<strong>${name}:</strong> ${comment}`;
  replyBox.appendChild(replyContent);

  return replyBox;
}

function saveCommentsToLocalStorage() {
  const comments = [];
  const commentBoxes = commentsContainer.querySelectorAll(".comment-box");

  commentBoxes.forEach(commentBox => {
    const name = commentBox.querySelector("strong").textContent;
    const comment = commentBox.querySelector("p").textContent.replace(name + ":", "").trim();

    const replies = [];
    const replyBoxes = commentBox.querySelectorAll(".reply-box");
    replyBoxes.forEach(replyBox => {
      const replyName = replyBox.querySelector("strong").textContent;
      const replyComment = replyBox.querySelector("p").textContent.replace(replyName + ":", "").trim();
      replies.push({ name: replyName, comment: replyComment });
    });

    comments.push({ name, comment, replies });
  });

  localStorage.setItem("comments", JSON.stringify(comments));
}

function loadCommentsFromLocalStorage() {
  const savedComments = localStorage.getItem("comments");
  if (savedComments) {
    const parsedComments = JSON.parse(savedComments);
    parsedComments.forEach(comment => {
      const newComment = createComment(comment.name, comment.comment);
      commentsContainer.appendChild(newComment);

      const replyContainer = newComment.querySelector(".reply-container");
      comment.replies.forEach(reply => {
        const newReply = createReply(reply.name, reply.comment);
        replyContainer.appendChild(newReply);
      });
    });
  }
}

loadCommentsFromLocalStorage();
