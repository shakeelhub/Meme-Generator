const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .meme-title");
  const memeAuthor = document.querySelector(".meme-generator .meme-author");
  
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };
  
// This function is responsible for fetching meme data from the URL
// fetches the meme data and returns a Promise 
const fetchMeme = () => {
    return fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch meme");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching meme:", error);
        throw error;
      });
  };
  
//   the code uses Promises with then() and catch() to handle asynchronous operations 
  const generateMeme = () => {
    fetchMeme()
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      })
      .catch((error) => {
        console.error("Error updating meme details:", error);
      });
  };
  
  
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();