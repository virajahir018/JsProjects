  let textInput = document.getElementById("textInput");
    let wordCount = document.getElementById("wordCount");
    let charCount = document.getElementById("charCount");

    textInput.addEventListener("input", function () {
      let text = textInput.value;

      charCount.innerText = text.length;

      let words = text.trim().split(/\s+/);

      if (text.trim() === "") {
        wordCount.innerText = 0;
      } else {
        wordCount.innerText = words.length;
      }
    });

    function clearText() {
      textInput.value = "";
      wordCount.innerText = 0;
      charCount.innerText = 0;
    }