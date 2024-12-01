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
    {id: 10, nom: "Préparer le dîner", dateEcheance: "23/11/2024", priorite: "F", status: true}
];
let tableau = document.getElementById("tbody_donne");

function afficher_taches(){
    let selectDate = document.getElementById("selectDeadline");
    
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

            

            if(tache.status == true ){
                tr.innerHTML = `<tr data-id="${tache.id}">
                                <td ><p>${tache.id}</p></td>
                                <td class="${valeur_p}"><p>${tache.priorite}</p></td>
                                <td>${tache.nom}</td>
                                <td>${tache.dateEcheance}</td>
                                <td class="table__tbody__td-status-completed"><p>completed</p></td>
                                <td class="table__tbody__td-actions">
                                    <ul>
                                        <li class="table__tbody__td-actions__li-delete"><p>delete</p></li>
                                        <li class="table__tbody__td-actions__li-edit"><p>edit</p></li>
                                    </ul>
                                </td>
                            </tr>`
            }else{
                tr.innerHTML = `<tr data-id="${tache.id}">
                                <td ><p>${tache.id}</p></td>
                                <td class="${valeur_p}"><p>${tache.priorite}</p></td>
                                <td>${tache.nom}</td>
                                <td>${tache.dateEcheance}</td>
                                <td class="table__tbody__td-status-pendind"><p>pending...</p></td>
                                <td class="table__tbody__td-actions">
                                    <ul>
                                        <li class="table__tbody__td-actions__li-delete"><p>delete</p></li>
                                        <li class="table__tbody__td-actions__li-edit"><p>edit</p></li>
                                    </ul>
                                </td>
                            </tr>`
            }
            
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

function ajout_tache(nom , dateEcheance, priorite){
    
}

afficher_taches();