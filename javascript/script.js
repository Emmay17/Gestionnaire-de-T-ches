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

function afficher_taches(){
    let tableau = document.getElementById("tbody_donne");
    taches.forEach((tache) => {
            console.log({tache});
            
            let tr = document.createElement("tr");
            tr.innerHTML = `<tr data-id="${tache.id}">
                                <td class="table__tbody__td-priority"><p>${tache.priorite}</p></td>
                                <td>${tache.nom}</td>
                                <td>${tache.dateEcheance}</td>
                                <td class="table__tbody__td-status"><p>${tache.status ? "Completed" : "Pending..."}</p></td>
                                <td class="table__tbody__td-actions">
                                    <ul>
                                        <li class="table__tbody__td-actions__li-delete"><p>delete</p></li>
                                        <li class="table__tbody__td-actions__li-edit"><p>edit</p></li>
                                    </ul>
                                </td>
                            </tr>`
        tableau.appendChild(tr);
    
        })
    }
    
    
    
    afficher_taches();