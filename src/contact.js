export default function contactContent(){
    const contactContainer=document.createElement('div');
    contactContainer.id="contactContainer";
        const title=document.createElement('h1');
        title.innerText="Contact";
        contactContainer.appendChild(title);

        const phone = document.createElement('h2');
        phone.innerText="Phone number: 997 420 123"
        contactContainer.appendChild(phone);

        const github= document.createElement('h2');
        github.innerHTML=`Our <a href="https://github.com/Krukuczek" class="github">GitHub</a>`;
        contactContainer.appendChild(github);

        const repo= document.createElement('h2');
        repo.innerHTML=`<a href="https://github.com/Krukuczek" class="github">Repository</a> Website`;
        contactContainer.appendChild(repo);
    return contactContainer;
}