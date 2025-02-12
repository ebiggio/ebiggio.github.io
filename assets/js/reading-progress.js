document.addEventListener('DOMContentLoaded', function () {
  const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTx_54zoSShN9OqSWpGmTVqq2pO3LeKrX1Xf_H23qG2R-XINv8NWioHWr30LiUbBRqe-EtTkCF6tHlB/pub?gid=0&single=true&output=csv";

  fetch(sheetURL)
    .then(response => response.text())
    .then(csv => {
      // Remove any \r characters before splitting
      let lines = csv.replace(/\r/g, "").trim().split("\n");

      // Ignore header, and convert the second column to a number
      let data = lines.slice(1).map(line => {
        let [book_id, progress] = line.split(",");
        return [book_id, Number(progress)];
      });
      // Convert to object for easier access
      let book_progress_record = Object.fromEntries(data);

      const bookLinks = document.querySelectorAll('a.book-cover');

      bookLinks.forEach(cover => {
        let img = cover.querySelector('img');
        // Get the book_id from the img element src attribute (the filename)
        let book_id = img.src.split('/').pop().split('.')[0];

        let progress = 0;

        if (book_id && img && book_progress_record[book_id] !== undefined) {
          // Check if progress is a number between 0 and 100
          if (typeof book_progress_record[book_id] === 'number' && book_progress_record[book_id] >= 0 && book_progress_record[book_id] <= 100) {
            progress = book_progress_record[book_id];
          }
        }

        // Set the custom property so the CSS can read it
        cover.style.setProperty('--progress', progress + '%');
        cover.setAttribute('data-progress', progress + '% read');
      });
    })
    .catch(error => console.error(error));
});
