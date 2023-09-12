export default function homeContent(){
    const homeContainer=document.createElement('div');
    homeContainer.id="container";

        const nameContainer = document.createElement('h1');
        nameContainer.innerText="The Velvet Table";
        homeContainer.appendChild(nameContainer);

        const aboutContainer=document.createElement('div');
        aboutContainer.classList="text";
        aboutContainer.innerText="The Velvet Table is a new created luxury restaurant which serve the unforgettable dishes and climate";
        homeContainer.appendChild(aboutContainer);

        const openTimeContainer=document.createElement('ul');
            const openHeading=document.createElement('h2');
            openHeading.innerText="We are open at: ";
            const mon=document.createElement('li');
            mon.innerText="Monday: 10am - 8pm"
            const tue=document.createElement('li');
            tue.innerText="Tuesday: 10am - 8pm"
            const wed=document.createElement('li');
            wed.innerText="Wednesday: 10am - 8pm"
            const thu=document.createElement('li');
            thu.innerText="Thursday: 10am - 8pm"
            const fri=document.createElement('li');
            fri.innerText="Friday: 10am - 8pm"
            const sat=document.createElement('li');
            sat.innerText="Saturday: 12am - 11pm"
            const sun=document.createElement('li');
            sun.innerText="Sunday: 12am - 11pm"
            openTimeContainer.appendChild(openHeading);
            openTimeContainer.appendChild(mon);
            openTimeContainer.appendChild(tue);
            openTimeContainer.appendChild(wed);
            openTimeContainer.appendChild(thu);
            openTimeContainer.appendChild(fri);
            openTimeContainer.appendChild(sat);
            openTimeContainer.appendChild(sun);
        homeContainer.appendChild(openTimeContainer);
        
        const locationContainer = document.createElement('div');
            const locationHeading= document.createElement('h2');
            locationHeading.innerText="Come to us at: ";
            locationContainer.appendChild(locationHeading)
            
            const locationParagraph=document.createElement('p');
            locationParagraph.innerText='Aleja Niepodleglosci 45, Warsaw, Poland'
            locationContainer.appendChild(locationParagraph);
        homeContainer.appendChild(locationContainer);
    return homeContainer;
}