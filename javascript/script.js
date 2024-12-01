let taches = [
    {id: 1, nom: "Dire bonjour à maman", dateEcheance: "30/11/2024", priorite: "F", status: true},
    {id: 2, nom: "Aller faire les courses", dateEcheance: "25/11/2024", priorite: "M", status: false},
    {id: 3, nom: "Finir le projet de programmation", dateEcheance: "28/11/2024", priorite: "H", status: false},
    {id: 4, nom: "Nettoyer la chambre", dateEcheance: "24/11/2024", priorite: "F", status: true},
    {id: 5, nom: "Réviser pour l'examen", dateEcheance: "01/12/2024", priorite: "H", status: false},
    {id: 6, nom: "Appeler le docteur", dateEcheance: "27/11/2024", priorite: "M", status: true},
    {id: 7, nom: "Envoyer l'email important", dateEcheance: "26/11/2024", priorite: "H", status: false},
    {id: 8, nom: "Prendre un rendez-vous chez le coiffeur", dateEcheance: "29/11/2024", priorite: "F", status: false},
    {id: 9, nom: "Planifier les vacances", dateEcheance: "10/12/2024", priorite: "M", status: false},
    {id: 10, nom: "Préparer le dîner", dateEcheance: "23/11/2024", priorite: "F", status: true},
    {id: 11, nom: "Préparer le dîner", dateEcheance: "23/11/2025", priorite: "F", status: false}
];

let taches_retards = [];
let tableau = document.getElementById("tbody_donne");

let selectDate = document.getElementById("selectDeadline");

    let stat = document.getElementById("selectStatus");
    stat.addEventListener("change", function(state){
        let selectedState = state.target.value;
        // appel a ma fonction d'affichage d'evenemnt en fonction de la date selectionner
        affichageParStatus(selectedState);
    });
    stat.innerHTML = `
        <option value="Status" selected>Status</option>
        <option value="Completed" >Completed</option>
        <option value="Pending" >Pending...</option> 
    `

    selectDate.addEventListener("change", function(date){
        let selectedDate = date.target.value;
        // appel a ma fonction d'affichage d'evenemnt en fonction de la date selectionner
        affichageParDate(selectedDate);
    });

    selectDate.innerHTML = `<option value="Deadline" selected>Deadline</option>`;  
        taches.forEach((tache) => {
            let option = document.createElement('option');
            option.value = tache.dateEcheance;
            option.textContent = tache.dateEcheance;
            selectDate.appendChild(option);
        });

    let selectPriority = document.getElementById("selectPriority");
        selectPriority.innerHTML = `
                                    <option value="Priorite" selected>Priorite</option>
                                    <option value="F">Faible</option>
                                    <option value="M">Moyen</option>
                                    <option value="H">Haut</option>
        `
    selectPriority.addEventListener("change", function(p){
        let selectedPriority = p.target.value;

        affichageParPorprite(selectedPriority);
    });
function afficher_taches(){
    const dateActuelle = new Date();
    tableau.innerHTML = "";
    taches.forEach((tache) => {
            let tr = document.createElement("tr");
            let valeur_p = "";
            if (tache.priorite == "F") {
                valeur_p = "table__tbody__td-priority-F";
            } else if (tache.priorite == "M") {
                valeur_p = "table__tbody__td-priority-M";
            } else if (tache.priorite == "H") {
                valeur_p = "table__tbody__td-priority-H";
            }
            
            if (transformerStringEnDate(tache.dateEcheance) <= dateActuelle ){
                console.log("retard =" + tache.id);
            }else{
                tr.innerHTML = `<tr data-id="${tache.id}">
                                    <td><p>${tache.id}</p></td>
                                    <td class="${valeur_p}"><p>${tache.priorite}</p></td>
                                    <td>${tache.nom}</td>
                                    <td>${tache.dateEcheance}</td>
                                    <td class="${tache.status ? 'table__tbody__td-status-completed' : 'table__tbody__td-status-pending'}">
                                        <p>${tache.status ? 'completed' : 'pending...'}</p>
                                    </td>
                                    <td class="table__tbody__td-actions">
                                        <ul>
                                            <li class="table__tbody__td-actions__li-delete"><p>delete</p></li>
                                            <li class="table__tbody__td-actions__li-edit"><p>edit</p></li>
                                        </ul>
                                    </td>
                                </tr>`
                }
            // }else{
                
        tableau.appendChild(tr);
    })
}


function affichageParDate(date) {
    tableau.innerHTML = ``;  
    if (date === "Deadline") {
        afficher_taches();
        return; // Sortir de la fonction 
    }
    taches.forEach((tache) => {
        if (date === tache.dateEcheance) {
            let tr = document.createElement("tr");
            tr.setAttribute("data-id", tache.id);

            let valeur_p = "";
            if (tache.priorite === "F") {
                valeur_p = "table__tbody__td-priority-F";
            } else if (tache.priorite === "M") {
                valeur_p = "table__tbody__td-priority-M";
            } else if (tache.priorite === "H") {
                valeur_p = "table__tbody__td-priority-H";
            }
            tr.innerHTML = `
                <td><p>${tache.id}</p></td>
                <td class="${valeur_p}"><p>${tache.priorite}</p></td>
                <td>${tache.nom}</td>
                <td>${tache.dateEcheance}</td>
                <td class="${tache.status ? 'table__tbody__td-status-completed' : 'table__tbody__td-status-pending'}">
                    <p>${tache.status ? 'completed' : 'pending...'}</p>
                </td>
                <td class="table__tbody__td-actions">
                    <ul>
                        <li class="table__tbody__td-actions__li-delete"><p>delete</p></li>
                        <li class="table__tbody__td-actions__li-edit"><p>edit</p></li>
                    </ul>
                </td>
            `;
            tableau.appendChild(tr);
        }
    });
}

function affichageParStatus(status){
    tableau.innerHTML = ``;  
    if (status === "Status") {
        afficher_taches();
        return; // Sortir de la fonction 
    }
    let statusActuel = false ;
    if (status === "Completed"){
        statusActuel = true ;
    }
    taches.forEach((tache) => {
        if (statusActuel === tache.status) {
            let tr = document.createElement("tr");
            tr.setAttribute("data-id", tache.id);

            let valeur_p = "";
            if (tache.priorite === "F") {
                valeur_p = "table__tbody__td-priority-F";
            } else if (tache.priorite === "M") {
                valeur_p = "table__tbody__td-priority-M";
            } else if (tache.priorite === "H") {
                valeur_p = "table__tbody__td-priority-H";
            }
            
            tr.innerHTML = `
                <td><p>${tache.id}</p></td>
                <td class="${valeur_p}"><p>${tache.priorite}</p></td>
                <td>${tache.nom}</td>
                <td>${tache.dateEcheance}</td>
                <td class="${tache.status ? 'table__tbody__td-status-completed' : 'table__tbody__td-status-pending'}">
                    <p>${tache.status ? 'completed' : 'pending...'}</p>
                </td>
                <td class="table__tbody__td-actions">
                    <ul>
                        <li class="table__tbody__td-actions__li-delete"><p>delete</p></li>
                        <li class="table__tbody__td-actions__li-edit"><p>edit</p></li>
                    </ul>
                </td>
            `;
            
            tableau.appendChild(tr);
        }
    });
}

function affichageParPorprite(priority){
    tableau.innerHTML = ``;  
    if (priority === "Priorite") {
        afficher_taches();
        return; // Sortir de la fonction 
    }

    taches.forEach((tache) => {
        if (priority === tache.priorite) {
            let tr = document.createElement("tr");
            tr.setAttribute("data-id", tache.id);

            let valeur_p = "";
            if (tache.priorite === "F") {
                valeur_p = "table__tbody__td-priority-F";
            } else if (tache.priorite === "M") {
                valeur_p = "table__tbody__td-priority-M";
            } else if (tache.priorite === "H") {
                valeur_p = "table__tbody__td-priority-H";
            }    
            tr.innerHTML = `
                <td><p>${tache.id}</p></td>
                <td class="${valeur_p}"><p>${tache.priorite}</p></td>
                <td>${tache.nom}</td>
                <td>${tache.dateEcheance}</td>
                <td class="${tache.status ? 'table__tbody__td-status-completed' : 'table__tbody__td-status-pending'}">
                    <p>${tache.status ? 'completed' : 'pending...'}</p>
                </td>
                <td class="table__tbody__td-actions">
                    <ul>
                        <li class="table__tbody__td-actions__li-delete"><p>delete</p></li>
                        <li class="table__tbody__td-actions__li-edit"><p>edit</p></li>
                    </ul>
                </td>
            `;
            
            tableau.appendChild(tr);
        }
    });
}

function transformerStringEnDate(string){
    const decoupe = string.split("/");
    return new Date (decoupe[2], decoupe[1]-1, decoupe[0]);
}

function transformerDateEnString(dateObj){
    const jour = ("0" + dateObj.getDate()).slice(-2);  
    const mois = ("0" + (dateObj.getMonth() + 1)).slice(-2);  
    const annee = dateObj.getFullYear();
    return `${jour}/${mois}/${annee}`;
}

function nombreDeTachesEnRetard(){
    const dateActuelle = new Date();

    let nbrTacheEnRetard = 0 ;
    taches.forEach((tache) =>{
        const dateEcheance = transformerStringEnDate(tache.dateEcheance);
        if (dateEcheance < dateActuelle){
            nbrTacheEnRetard += 1;
            taches_retards.push(tache);
        }
    });
    
    return nbrTacheEnRetard;
}

function generateId() {
    return taches.length > 0 ? taches[taches.length - 1].id + 1 : 1;
}


function ajout_tache(){
    const formulaire_ajout = document.getElementById("ajout-formulaire");

    formulaire_ajout.addEventListener("submit", function(event){
        event.preventDefault();

        const nomTache = document.getElementById("nomDeTache").value;
        const dateDeTache = document.getElementById("dateInput").value;
        const prioriteTache = document.getElementById("prioriteDeTache").value;

        const separerL = prioriteTache.split("");
        const premierLettre = separerL[0].toUpperCase();

        const nouvelleTache = {
            id : generateId(),
            nom : nomTache,
            dateEcheance : dateDeTache,
            priorite : premierLettre ,
            status : false
        }

        taches.push(nouvelleTache);

        formulaire_ajout.reset();

        afficher_taches();
    })
}
function definirDateMin() {
            const inputDate = document.getElementById('dateInput');
            
            // Obtenir la date actuelle
            const today = new Date();
            
            // Formater la date au format 'YYYY-MM-DD'
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0'); // Mois (0-11, donc on ajoute 1)
            const dd = String(today.getDate()).padStart(2, '0'); // Jour du mois

            const todayString = `${yyyy}-${mm}-${dd}`; // Exemple : "2024-12-01"
            
            // Définir la date minimale dans l'input
            inputDate.setAttribute('min', todayString);
}


// pour le menu 
// Sélectionner les éléments
const menuToggle = document.getElementById('menu-toggle'); // Bouton de menu
const leftMenu = document.getElementById('left-menu'); // Menu à ouvrir/fermer
const rightInterface = document.querySelector('.main-index__right-interface'); // Section droite

// Ajouter un écouteur d'événement au bouton pour ouvrir/fermer le menu
menuToggle.addEventListener('click', function(e) {
    // Empêcher la propagation du clic au document
    e.stopPropagation();
    
    // Ajouter ou supprimer la classe 'open' pour faire apparaître ou disparaître le menu
    leftMenu.classList.toggle('open');
});

// Ajouter un écouteur d'événement au document pour fermer le menu si on clique en dehors
document.addEventListener('click', function(e) {
    // Vérifier si le clic a été effectué à l'extérieur du menu
    if (!leftMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        // Fermer le menu en supprimant la classe 'open'
        leftMenu.classList.remove('open');
        rightInterface.classList.remove('shifted'); // Facultatif si tu veux aussi déplacer la section droite
    }
});

// Empêcher la fermeture du menu si le clic est effectué à l'intérieur du menu
leftMenu.addEventListener('click', function(e) {
    e.stopPropagation();
});

let affichage_tache_retard = document.getElementById("affichage_tache_retard");

affichage_tache_retard.innerText = "Tâches en retard : "+nombreDeTachesEnRetard()+"";

        // Appeler la fonction pour initialiser la date minimale
        definirDateMin();
afficher_taches();
nombreDeTachesEnRetard()
ajout_tache()