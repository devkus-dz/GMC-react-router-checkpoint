// Data from api tmbd.org
const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    posterURL: "https://image.tmdb.org/t/p/w1280/g1z0zLD8tW94omZdM1NDg9Cb0L5.jpg",
    rating: 4.8,
    details: {
      fullDescription: "Dom Cobb is a skilled thief who steals secrets from within the subconscious during dreams, facing one last job for redemption.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=0&mute=1"
    }
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A team of explorers travels through a wormhole in space.",
    posterURL: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: 4.7,
    details: {
      fullDescription: "Earth's future has been riddled by disasters, famines, and droughts. A team of astronauts travel through a wormhole in search of a new home.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=0&mute=1"
    }
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "Batman raises the stakes in his war on crime.",
    posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.6,
    details: {
      fullDescription: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham with the help of Lieutenant Jim Gordon and District Attorney Harvey Dent.",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=0&mute=1"
    }
  },
  {
    id: 4,
    title: "Avatar",
    description: "A marine on an alien planet.",
    posterURL: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    rating: 4,
    details: {
      fullDescription: "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Jake Sully, a former Marine, becomes torn between following his orders and protecting the world he feels is his home.",
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY?autoplay=0&mute=1"
    }
  },
  {
    id: 5,
    title: "The Matrix",
    description: "A hacker discovers the shocking truth about his reality.",
    posterURL: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 4.1,
    details: {
      fullDescription: "Neo, a hacker, learns about the true nature of his reality and his role in the war against its controllers.",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8?autoplay=0&mute=1"
    }
  },
  {
    id: 6,
    title: "Forrest Gump",
    description: "The life journey of a simple man with a big heart.",
    posterURL: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    rating: 3.8,
    details: {
      fullDescription: "Forrest Gump, a man with a low IQ, recounts the early years of his life when he found himself in the middle of key historical events.",
      trailer: "https://www.youtube.com/embed/bLvqoHBptjg?autoplay=0&mute=1"
    }
  },
  {
    id: 7,
    title: "Gladiator",
    description: "A Roman general seeks revenge after being betrayed.",
    posterURL: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    rating: 4.5,
    details: {
      fullDescription: "When a Roman general is betrayed and his family murdered, he comes to Rome as a gladiator to seek revenge.",
      trailer: "https://www.youtube.com/embed/owK1qxDselE?autoplay=0&mute=1"
    }
  },
  {
    id: 8,
    title: "The Lion King",
    description: "A young lion prince flees his kingdom.",
    posterURL: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    rating: 3.9,
    details: {
      fullDescription: "Simba, a young lion, is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba's uncle Scar murders Mufasa, Simba is manipulated into thinking he was responsible and flees into exile.",
      trailer: "https://www.youtube.com/embed/7TavVZMewpY?autoplay=0&mute=1"
    }
  },
  {
    id: 9,
    title: "Spider-Man: No Way Home",
    description: "Spider-Man's identity is revealed, causing chaos.",
    posterURL: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: 3.8,
    details: {
      fullDescription: "Peter Parker seeks the help of Doctor Strange to make people forget his Spider-Man identity, leading to dangerous consequences and multiverse chaos.",
      trailer: "https://www.youtube.com/embed/JfVOs4VSpmA?autoplay=0&mute=1"
    }
  }
];

export default movies;
