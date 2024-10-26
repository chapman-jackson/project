const hamButton = document.querySelector('#hamburger-button');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

 const knots = [
    {
        knotName: "Cobra knot",
        difficulty: "beginner",
        URL: "https://www.youtube.com/watch?v=KUoZtUSXLAw",
        imageURL: "images/knot-cobra.jpeg",
        information: "The cobra knot is a very popular knot for crafts. It is often used for making bracelets and lanyards. It can be tied with one single parachute cord color or two if you melt the ends of the parachute cord together."
    },
    {
        knotName: "Snake knot",
        difficulty: "beginner",
        URL: "https://www.youtube.com/watch?v=IMTWJat8bPk",
        imageURL: "images/knot-snake.jpeg",
        information: "The snake knot is another popular knot for crafts. It is mostly used for making lanyards. It can be tied with one single parachute cord color or two if you melt the ends of the parachute cord together."
    },
    {
        knotName: "Bowline knot",
        difficulty: "intermediate",
        URL: "https://www.youtube.com/watch?v=ccQ7FmwTh3Y",
        imageURL: "images/knot-bowline.jpeg",
        information: "The bowline knot is used to create a secure loop when rescuing a person. When practiced enough, it can be tied quickly with one hand, which can be life-saving if a victim has an injured arm or time is of the essence. The knot is also useful for any situation where a secure loop is needed. The knot is easy to untie, even when it is tightened."
  
    },
    {
        knotName: "Diamond knot",
        difficulty: "advanced",
        URL: "https://www.youtube.com/watch?v=XSx4D6krQrY",
        imageURL: "images/knot-diamond.jpeg",
        information: "The diamond knot is used as a stopper knot so the ends of a rope will not fall out of a hole or loop. It is also used as a decorative knot to finish the ends of lanyards."
    },
    {
        knotName: "Cow's hitch knot",
        difficulty: "beginner",
        URL: "https://www.youtube.com/watch?v=W_3PrBoXAcQ",
        imageURL: "images/knot-cow-hitch.jpeg",
        information: "The cow's hitch knot is used to attach a piece of parachute cord to a buckle or a clasp."
    
    },
    {
        knotName: "Constrictor knot",
        difficulty: "intermediate",
        URL: "https://www.youtube.com/watch?v=T8ixCI9dtC4",
        imageURL: "images/knot-constrictor.jpeg",
        information: "The constrictor knot is used to securely bind things to each other. Once you tighten it around an object, it is nearly impossible to untie. Do not use the knot on limbs or other body parts or blood flow to the area will be cut off."
        
    }
];

const knotAlbum = document.getElementById("Knots");

function displayKnots(knots) {
    knotAlbum.innerHTML = '';
    knots.forEach(knot => {
        const knotCard = document.createElement('div');
        knotCard.classList.add('card');
        
        const knotImg = document.createElement('img');
        knotImg.src = knot.imageURL;
        knotImg.alt = knot.knotName;
        knotImg.loading = 'lazy';
        
        const knotTitle = document.createElement('h2');
        const knotLink = document.createElement('a');
        knotLink.href = knot.URL;
        knotLink.textContent = knot.knotName; 
        knotTitle.appendChild(knotLink); 

        const knotInfo = document.createElement('p');
        knotInfo.textContent = knot.information;
        
        knotCard.appendChild(knotTitle);
        knotCard.appendChild(knotInfo);
        knotCard.appendChild(knotImg);
        
        knotAlbum.appendChild(knotCard);
    });
}
const filteredTitle = document.getElementById("filtered-title");
document.getElementById("sort-beginner").addEventListener('click', () =>  {const sortedBeginner = knots.filter(knots => knots.difficulty === "beginner"); displayKnots(sortedBeginner);filteredTitle.textContent = `Beginner knots`;})
document.getElementById("sort-intermediate").addEventListener('click', () =>  {const sortedIntermediate = knots.filter(knots => knots.difficulty === "intermediate"); displayKnots(sortedIntermediate);filteredTitle.textContent = `Intermediate knots`;})
document.getElementById("sort-advanced").addEventListener('click', () =>  {const sortedAdvanced = knots.filter(knots => knots.difficulty === "advanced");displayKnots(sortedAdvanced);filteredTitle.textContent = `Advanced knots`;})

displayKnots(knots);