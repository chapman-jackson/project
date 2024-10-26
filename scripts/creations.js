const hamButton = document.querySelector('#hamburger-button');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const creations = [
	{projectName:"Cobra Bracelet", difficulty:"beginner",URL:"https://www.youtube.com/watch?v=a0QkbbHmEOo&themeRefresh=1",ImageURL:"images/project-cobra.jpeg",information:"The cobra bracelet is one of the best projects to make when starting out with tying projects. They can be used as friendship bracelets or personal jewelry. Depending on wrist size, a bracelet can hold between six and twelve feet of parachute cord, which can be untied and used in an emergency."},
    {projectName:"Key lanyard", difficulty:"intermediate",URL:"https://www.youtube.com/watch?v=QH8fEmS0eAs",ImageURL:"images/project-lanyard.jpeg",information:"This cobra and snake knot lanyard is a useful project to make since it has a loop for you to securely hold a set of keys or whatever item you attach it to."},
    {projectName:"Ocean Plait knot", difficulty:"advanced",URL:"https://www.youtube.com/watch?v=cWUO13JEUsQ",ImageURL:"images/project-ocean.jpeg",information:"The ocean plait knot is suitable for more experienced knot tyers, due to the complex nature of how it is tied. Even though this project is difficult, it can be a great decorative piece or a pot holder if you make it larger. It can also be sized accordingly to make a mat or a small rug."}
]
const projectAlbum = document.getElementById("Projects");

function displayCreations(creations) {
    projectAlbum.innerHTML = '';
    creations.forEach(creation => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        
        const creationImg = document.createElement('img');
        creationImg.src = creation.ImageURL;
        creationImg.alt = creation.projectName;
        creationImg.loading = 'lazy';
        
        const creationTitle = document.createElement('h2');
        const creationLink = document.createElement('a');
        creationLink.href = creation.URL;
        creationLink.textContent = creation.projectName; 
        creationTitle.appendChild(creationLink); 

        const creationInfo = document.createElement('p');
        creationInfo.textContent = creation.information;
        
        projectCard.appendChild(creationTitle);
        projectCard.appendChild(creationInfo);
        projectCard.appendChild(creationImg);
        
        projectAlbum.appendChild(projectCard);
    });
}

const filteredTitle = document.getElementById("filtered-title");
document.getElementById("sort-beginner").addEventListener('click', () =>  {const sortedBeginner = creations.filter(creations => creations.difficulty === "beginner"); displayCreations(sortedBeginner);filteredTitle.textContent = `Beginner project`;})
document.getElementById("sort-intermediate").addEventListener('click', () =>  {const sortedIntermediate = creations.filter(creations => creations.difficulty === "intermediate"); displayCreations(sortedIntermediate);filteredTitle.textContent = `Intermediate project`;})
document.getElementById("sort-advanced").addEventListener('click', () =>  {const sortedAdvanced = creations.filter(creations => creations.difficulty === "advanced");displayCreations(sortedAdvanced);filteredTitle.textContent = `Advanced project`;})

displayCreations(creations);