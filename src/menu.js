import fennelPhoto from './fennelSoup.png';
import pierogiPhoto from './pierogi.jpg';
import saladPhoto from './salad.jpg';

export default function menuContent(){
    const menuContainer=document.createElement('div');
    menuContainer.id="menuContainer";
        const title=document.createElement('h1');
        title.innerText="Menu";
    menuContainer.appendChild(title);

        const dishesContainer=document.createElement('div');
        dishesContainer.classList='dishes';

            const fennelSoupContainer=document.createElement('ul');
                const fenPhotoContainer = document.createElement('li'); 
                    const fennelSoupPhoto = new Image();
                    fennelSoupPhoto.src=fennelPhoto;
                    fenPhotoContainer.appendChild(fennelSoupPhoto);

                    const fennelAuthor=document.createElement('span');
                    fennelAuthor.classList='photoAuthor';
                    fennelAuthor.innerHTML=`Photo by <a href="https://unsplash.com/@justjullietta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julia Kicova</a> on <a href="https://unsplash.com/photos/K-JgWmP_82k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;
                    fenPhotoContainer.appendChild(fennelAuthor);
                fennelSoupContainer.appendChild(fenPhotoContainer);

                const fennelDescription=document.createElement('li');
                    const fennelName=document.createElement('h2');
                    fennelName.innerText="Fennel Soup";
                    fennelDescription.appendChild(fennelName);

                    const fennelAboutSoup=document.createElement('p');
                    fennelAboutSoup.innerText="Creame soup made from fennel with croutons and parsley";
                    fennelDescription.appendChild(fennelAboutSoup);
                fennelSoupContainer.appendChild(fennelDescription);

                const fennelPrize = document.createElement('li');
                fennelPrize.innerText="25 $";
                fennelSoupContainer.appendChild(fennelPrize);
            dishesContainer.appendChild(fennelSoupContainer);

                const pierogiContainer = document.createElement('ul');
                const pierogiPhotoContainer = document.createElement('li');
                const pierogiSoupPhoto = new Image();
                pierogiSoupPhoto.src = pierogiPhoto;
                pierogiPhotoContainer.appendChild(pierogiSoupPhoto);

                const pierogiAuthor = document.createElement('span');
                pierogiAuthor.classList = 'photoAuthor';
                pierogiAuthor.innerHTML = `Photo by <a href="https://unsplash.com/@fruitboykid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eugen Kucheruk</a> on <a href="https://unsplash.com/photos/z9JWq7pr5QE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;
                pierogiPhotoContainer.appendChild(pierogiAuthor);
                pierogiContainer.appendChild(pierogiPhotoContainer);

                const pierogiDescription = document.createElement('li');
                const pierogiName = document.createElement('h2');
                pierogiName.innerText = "Pierogi with meat";
                pierogiDescription.appendChild(pierogiName);

                const aboutPierogi = document.createElement('p');
                aboutPierogi.innerText = "Delicate Polish dumplings with pork meat";
                pierogiDescription.appendChild(aboutPierogi);
                pierogiContainer.appendChild(pierogiDescription);

                const pierogiPrize = document.createElement('li');
                pierogiPrize.innerText = "30 $";
                pierogiContainer.appendChild(pierogiPrize);
                dishesContainer.appendChild(pierogiContainer);

            const saladContainer=document.createElement('ul');
                const saladPhotoContainer = document.createElement('li'); 
                    const saladSoupPhoto = new Image();
                    saladSoupPhoto.src=saladPhoto;
                    saladPhotoContainer.appendChild(saladSoupPhoto);

                    const saladAuthor=document.createElement('span');
                    saladAuthor.classList='photoAuthor';
                    saladAuthor.innerHTML=`Photo by <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anh Nguyen</a> on <a href="https://unsplash.com/photos/kcA-c3f_3FE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;
                    saladPhotoContainer.appendChild(saladAuthor);
                saladContainer.appendChild(saladPhotoContainer);

                const saladDescription=document.createElement('li');
                    const saladName=document.createElement('h2');
                    saladName.innerText="Fresh Salad";
                    saladDescription.appendChild(saladName);

                    const aboutSalad=document.createElement('p');
                    aboutSalad.innerText="expensive salad with vegetables and chicken";
                    saladDescription.appendChild(aboutSalad);
                saladContainer.appendChild(saladDescription);

                const saladPrize = document.createElement('li');
                saladPrize.innerText="15 $";
                saladContainer.appendChild(saladPrize);
            dishesContainer.appendChild(saladContainer);


        menuContainer.appendChild(dishesContainer);   
    return menuContainer;
}