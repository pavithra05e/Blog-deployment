let books = [
  {
    id: '1',
    title: 'The Midnight Library',
    image: '/images/image1.png',
    description: 'A woman explores alternate lives in a magical library between life and death.'
  },
  {
    id: '2',
    title: 'Where the Crawdads Sing',
    image: '/images/image2.png',
    description: 'A coming-of-age mystery set in the marshlands of North Carolina.'
  },
  {
    id: '3',
    title: 'The Book Thief',
    image: '/images/image3.png',
    description: 'A young girl in Nazi Germany finds solace in books and words.'
  },
  {
    id: '4',
    title: '1984',
    image: '/images/image4.png',
    description: 'A chilling dystopian tale of surveillance and totalitarian control.'
  },
  {
    id: '5',
    title: 'Thinking, Fast and Slow',
    image: '/images/image5.png',
    description: 'An insightful dive into the dual systems of human thinking and decision-making.'
  },
  {
    id: '6',
    title: 'Before the Coffee Gets Cold',
    image: '/images/image6.png',
    description: 'A quaint café offers customers the chance to travel back in time—but with rules.'
  },
  {
      id: 7,
      title: "Sapiens: A Brief History of Humankind",
      image: "/images/image7.png",
      description: "A sweeping history of the human species from evolution to today."
    },
    {
      id: 8,
      title: "Klara and the Sun",
      image: "/images/image8.png",
      description: "An AI robot explores human emotions, love, and loyalty in a futuristic world."
    },
    {
      id: 9,
      title: "The Ocean at the End of the Lane",
      image: "/images/image9.png",
      description: "A haunting and magical tale of memory, myth, and childhood."
    },
    {
      id: 10,
      title: "The Name of the Wind",
      image: "/images/image10.png",
      description: "An epic fantasy recounting the life story of a legendary magician named Kvothe."
    },
    {
      id: 11,
      title: "Dune by Frank Herbert",
      image: "/images/image11.png",
      description: "A sprawling science fiction saga about power, destiny, and desert planets."
    },
    {
      id: 12,
      title: "Station Eleven",
      image: "/images/image12.png",
      description: "A post-apocalyptic story of survival, art, and human connection."
    },
    {
      id: 13,
      title: "Beach Read",
      image: "/images/image13.png",
      description: "A romance between two writers with clashing genres and unexpected chemistry."
    },
    {
      id: 14,
      title: "The Night Circus",
      image: "/images/image14.png",
      description: "A magical competition set in a mysterious, dreamlike circus."
    },
    {
      id: 15,
      title: "The Priory of the Orange Tree",
      image: "/images/image15.png",
      description: "A feminist fantasy epic with dragons, magic, and political intrigue."
    }
];

export {books};
export const getBooks = () => books;

export const addBook = (book) => {
  books.push(book);
};

export const updateBook = (id, updatedBook) => {
  books = books.map((b) => (b.id === id ? updatedBook : b));
};

export const deleteBook = (id) => {
  books = books.filter((b) => b.id !== id);
};
