let blogPost = {
    title: "Hello",
    body: "Blog Post Body",
    author: "John Dow",
    views: 123,
    comments: [
      { author: "Ivan Ivanov", body: "Best post ever" },
      { author: "Zona Pet", body: "like it" },
    ],
    isLive: true,
  };

  let post = new Post('a', 'b', 'c');

  console.log(post);

  // Constructor function
  function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
  }