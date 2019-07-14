const mongoose = require("mongoose");
const db = require("../models");

// Connect to database
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

// Feed one seed
const bookSeed = [
  {
    title: "Fantastic Beasts and Where to Find Them: The Original Screenplay",
    authors: ["J.K. Rowling"],
    description: "When Magizoologist Newt Scamander arrives in New York, he intends his stay to be just a brief stopover. However, when his magical case is misplaced and some of Newt's fantastic beasts escape, it spells trouble for everyone... Inspired by the original Hogwart’s textbook by Newt Scamander, Fantastic Beasts and Where to Find Them: The Original screenplay marks the screenwriting debut of J.K. Rowling, author of the beloved and internationally bestselling Harry Potter books. A feat of imagination and featuring a cast of remarkable characters and magical creatures, this is epic adventure-packed storytelling at its very best. Whether an existing fan or new to the wizarding world, this is a perfect addition for any film lover or reader’s bookshelf. The film Fantastic Beasts and Where to Find Them will have its theatrical release on 18th November 2016.",
    image: "http://books.google.com/books/content?id=DU0LDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=DU0LDAAAQBAJ&source=gbs_api",
  }
];

// This file empties the Books collection and inserts the books below
db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
