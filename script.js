$(document).ready(function() {
    // console.log("ready");
    // boutton qui va lancer une fonction de rajout de txt, au clic
    $('#addToList').on("click", function() {
        // recupere la valeur que contient le champ de l'input txt
        let text = $('#todoText').val();
        // si la valeur du champ est autre que 'vide' alors :
        if (text !== "") {
            // recupere la variable text, la met dans un li>div(col6) et la stylise avec BS
            let element =
                "<li class='todos row text-center my-2 p-3'>" +
                "<div class='col-6'>" +
                text +
                "</div>";
            // crée un bouton qui servira a enlever la tache
            let button =
                "<button class='removeTodos btn btn-danger'>" +
                "<i class='fa fa-trash-o' aria-hidden='true'></i>" +
                "</button>";
            // place le bouton à l'interieur d'une autre div col6
            element += "<div class='col-6'>" + button + "</div>";
            // ferme la balise li
            element += "</li>";

            // console.log(element);
            // rajoute le tout en html dans la balise ul à l'id list
            $("#list").append(element);
            // retourne l'objet à la classe todos, contenant la li
            console.log($(".todos"));
            // pour chaque element ayant la classe .todos
            // passe en revue les elements a partir de 0 dans une boucle
            // lance une fonction qui prend 1 parametre
            $(".todos").each(function(index) {
                // console.log(index);
                // stocke les Li disponible dans une variable
                let currentLi = $(".todos")[index];
                // a l'écoute d'un click sur nimporte quel li lance une fonction
                // qui va rajouter une classe rajoutant un bgc
                $(currentLi).on("click", function() {
                    // console.log(this);
                    // console.log($(this).hasClass("done"));
                    // s'il n'a pas la class ont l'ajoute et si il l'a on l'enléve
                    if (!$(this).hasClass("done")) {
                        // rajoute la classe done a la li
                        $(this).addClass("done");
                        // sinon enleve la classe done
                    } else { 
                        $(this).removeClass("done");
                    }

                });
            });

            // fonction qui recupere les elements ayant la classe .removetodos
            // permet d'enlever une tache
            // passe en revue chaque element avec la methode each
            $(".removeTodos").each(function(index) {
                // stocke chaque bouton grace à l'index du parametre qui commence a 0
                // jusqu'au dernier element .removeTodos
                let currentButton = $(".removeTodos")[index];
                // a l'écoute d'un click sur le bouton :
                $(currentButton).on("click", function() {
                    // console.log($(this).parent());
                    // console.log($($(this).parent()).parent());
                    // a partir du bouton, remonte de 2 niveau
                    // supprime donc la li contenant les 2 div
                    $($(this).parent()).parent().remove()
                });
            });
        }
    });
});
