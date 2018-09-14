// Création du prototype d'objet
var Citation = {
	debut: "",
	milieu: "",
	fin: "",

	// Formation de la syntaxe de la citation grâce à cette méthode
	formerCitations: function (nbCitations) {
		if ((nbCitations < 1) || (nbCitations > 5)) 
		{
			nbCitations = 1; //Si la valeur n'est pas comprise entre 1 & 5, je lui attribue automatiquement la valeur 1
		}
		else
		{	//Rien, cas normal puisque le nbCitations est bien compris entre 1 & 5
		}

		for (var i = 1; i <= nbCitations; i++) 
		{
			$("#emplacementCitation").append("<div class='citationGeneree'>\"" + piocherUnElement(this.debut) + " " + piocherUnElement(this.milieu) + " " + piocherUnElement(this.fin) + "\"</div><br/>");
		}
	}
};

// Instanciation de notre objet de citations sur les animaux
var citationAnimaux = Object.create(Citation);
citationAnimaux.debut = ["Le chat", "Le rat", "Le cheval", "Le renard", "Le serpent", "Le dauphin", "Le lapin", "L'aigle", "La poule", "Le cerf", "Le chien", "L'écureuil", "La marmotte", "L'éléphant", "La galinette cendrée"];
citationAnimaux.milieu = ["dort", "vit", "galope", "chante", "rampe", "nage", "fait la course", "se pose", "picore", "se balade", "joue", "cache ses réserves", "se baigne", "creuse sa tanière", "chasse"];
citationAnimaux.fin = ["au soleil.", "dans les égouts de Paris.", "avec la belette.", "sur le sable du désert du Sahara.", "dans l'océan Pacifique.", "avec la tortue.", "au sommet du pic du Canigou.", "dans le poulailler de ma grand-mère.", "dans les bois.", "avec la petite fille du voisin.", "dans le tronc d'un chêne.", "dans un lac au Kenya.", "dans la terre.", "avec Les Inconnus."];

// Instanciation de notre objet de citations sur les super-héros
var citationSuperheros = Object.create(Citation);
citationSuperheros.debut = ["Iron-Man", "Captain America", "Thor", "Hulk", "Spider-Man", "Ant-Man", "Black Widow", "Black Panther", "Bucky", "Doctor Strange", "Deadpool", "Faucon", "Star-Lord", "Drax", "Groot"];
citationSuperheros.milieu = ["cogne", "neutralise", "tabasse", "écrase", "se défend contre", "écrabouille", "combat", "frappe", "bat", "anéantit", "ratatine", "achève", "bouscule", "lamine", "embête"];
citationSuperheros.fin = ["Le Mandarin.", "Crâne rouge.", "Loki.", "Ultron.", "un moustique.", "Modok.", "Ronan.", "les Chitauri.", "l'Hydra.", "Dormammu.", "Doctor Octopus.", "Mephisto.", "Thanos.", "Le Collectionneur.", "personne"];

var themeChoisi = " ";

// Quand on clique sur un thème de citations,
// on retient son thème (id)
$(".btnTypeCitation").click(function() 
{
	themeChoisi = this.id;
	$("#choixNombre").fadeIn(1000);
	$("#choixTheme").css("display", "none");
});

// Quand on clique sur l'un des boutons de nb de citations, en fonction du thème choisi 
// on appelle la fonction de création de citations en lui envoyant le nombre de citations
// à créer et l'objet dans lequel piocher
$(".btnNbCitations").click(function() 
{
	$(".erreur").css("display", "none");
	$("#emplacementCitation").empty();
	var nbSelectionne = $(this).text();

	if (themeChoisi == "citationsAnimaux") 
	{
		citationAnimaux.formerCitations(nbSelectionne);
	}
	else if (themeChoisi == "citationsSuperheros") 
	{
		citationSuperheros.formerCitations(nbSelectionne);
	}
	else // Si les conditions précédentes sont pas respectées, alors je repose la 1ère question (choix du thème)
	{
		$("#btnNbCitations").css("display", "none");
		$("#choixTheme").fadeIn(1000);
		$("#choixTheme").after("<div class='erreur'>Vous n'avez le choix qu'entre Animaux et Super-héros!</div>")
	} 

	$("#emplacementCitation").fadeIn(1000);
	$("#choixNombre").css("display", "none");
	$("#rejouerArreter").fadeIn(1000);
});

// Quand on clique sur le bouton "rejouer", on cache les divs et
// on affiche à nouveau la première question
$("#rejouer").click(function()
{
	$("#emplacementCitation").css("display", "none");
	$("#choixTheme").fadeIn(1000);
	$("#rejouerArreter").css("display", "none");
});

// Au clic sur le bouton "Arrêter", on ne laisse que les citations générées
$("#arreter").click(function()
{
	$("#rejouerArreter").css("display", "none");
});

// Permet de piocher au hasard 1 élément du tableau & de le supprimer
function piocherUnElement(tableau)
{
	return tableau[Math.floor(Math.random()*tableau.length)];
}