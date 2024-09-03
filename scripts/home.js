import { projects } from '../data/projects.js' ;

    let projectSectionHTML='' ;
    projects.forEach((project)=>{
        projectSectionHTML+=`
             <div class="project">
                    <div class="info">
                        <a href="${project.link}">
                            <img class ="project-photo" src="${project.image}">
                        </a>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                    <div >
                        <button class="project-button">Take a Closer Look</button>
                    </div>
                </div>
        `;
    })
    document.querySelector('.projects').innerHTML=projectSectionHTML ;
