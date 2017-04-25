app.controller('particuliersController', function($scope){
		$scope.servParticuliers = [

			// Prestation 1 (femmes)
			{
				img:"img/particuliers/femmes/meeting.jpg",
				alt:"photo meeting",
				titre:"Entretien découverte",
				description:"Nous permet de définir vos besoins, vos objectifs.",
				tarif:"1H - 50€",
				genre:"F"
			},
			// Prestation 2 (femmes)
			{
				img:"img/particuliers/femmes/atelier_colorimetrie.jpg",
				alt:"photo atelier colorimetrie",
				titre:"Atelier colorimétrie",
				description:"Les couleurs ont un impact sur votre usage. Elles peuvent vous effacer ou vous mettre en valeur.	Ce test est un incontournable du relooking car Atelier colorimétrieil va nous permettre de définir votre colorimétrie et le résultat nous servira dans le choix de vos tenues, votre maquillage, coloration coiffure et vos accessoires, connaître la symbolique des couleurs et savoir les utiliser. Un nuancier correspondant à votre résultat vous sera remis en fin de séances utile. Il vous sera utile lors de vos achats vestimentaires!",
				tarif:"1H - 70€",
				genre:"F"
			},
			// Prestation 3 (femmes)
			{
				img:"img/particuliers/femmes/atelier_makeup.jpg",
				alt:"photo make-up",
				titre:"Atelier make-up",
				description:"Se maquiller peut être un plaisir pour certaines personnes et une perte de temps pour d'autres. Pourtant, avec quelques astuces et conseils, nous pouvons toutes réaliser un maquillage idéal en toutes circonstances. Comprend : <ul> 								<li>test des couleurs</li> 								<li>analyse morphologique du visage</li> 								<li>cours de maquillage</li> 							</ul>",
				tarif:"1H30 - 90€",
				genre:"F"
			},
			// Prestation 4 (femmes)
			{
				img:"img/particuliers/femmes/relooking_coiffure.jpg",
				alt:"photo relooking coiffure",
				titre:"Relooking coiffure",
				description:"Avec l'aide de notre partenaire coiffeur et après avoir vu ensemble : <ul> 								<li>votre personnalité</li> 								<li>la morphologie de votre visage</li> 								<li>test des couleurs</li> 								<li>votre nature de cheveux</li> 								<li>vos contraintes et envies</li> 							</ul> Nous vous révélerons la coupe et les choix de coloration qui vous mettrons en valeur. 							(!) En prévision du relooking coiffure nous vous conseillons de ne pas couper vos cheveux.",
				tarif:"Ajouter le prix et la durée de la séance",
				genre:"F"
			},
			// Prestation 5 (femmes)
			{
				img:"img/particuliers/femmes/relooking_vestimentaire.jpg",
				alt:"photo relooking vestimentaire",
				titre:"Relooking vestimentaire",
				description:"Chacun étoffe sa garde-robe de différentes façons. Certaines personnes sont douées pour trouver ce qui leur va, d'autres se laisseront influencer par la mode ou un vendeur plus préoccupé par la vente que par le rendu du vêtement sur vous. <br> Savoir s'habiller en toute occasion et suivant l'objectif de style que vous vous êtes fixé, voila ce que je peux vous aider à acquérir. 							Comprend : <ul> 								<li>test des couleurs</li> 								<li>analyse morphologique de votre silhouette</li> 								<li>identification de votre style</li> 								<li>conseils vestimentaires et accessoires</li> 								<li>accompagnement shopping</li> 							</ul>",
				tarif:"6H - 400€",
				genre:"F"
			},
			// Prestation 6 (femmes)
			{
				img:"img/particuliers/femmes/relooking_complet.jpg",
				alt:"photo coaching en image",
				titre:"Coaching en image complet",
				description:"Comprend : <ul> 								<li>entretien découverte</li> 								<li>test des couleurs</li> 								<li>analyse morphologique du visage, cosmétologie et cours de maquillage</li> 								<li>conseils coiffure</li> 								<li>analyse morphologique de la silhouette</li> 								<li>conseils vestimentaires (coupes, couleurs, motifs et imprimés) et accessoires</li> 								<li>tri de votre garde-robes</li> 								<li>accompagnement shopping</li> 							</ul> 							Non-compris : 							<ul> 								<li>(!) La prestation de notre partenaire coiffeur</li> 								<li>(!) Les achats lors du shopping</li> 							</ul> Un book récapitulatif vous sera envoyé ultérieurement.",
				tarif:"10-11H - 690€",
				genre:"F"
			},
			// Prestation 7 (femmes)
			{
				img:"img/particuliers/femmes/",
				alt:"photo atelier occasion",
				titre:"Atelier occasion",
				description:"Ajouter le prix et la durée de la séance",
				tarif:"Ajouter le prix et la durée de la séance",
				genre:"F"
			},
			// Prestation 8 (femmes)
			{
				img:"img/particuliers/femmes/",
				alt:"photo coatch séduction",
				titre:"Coach Séduction",
				description:"Ajouter le prix et la durée de la séance",
				tarif:"Ajouter le prix et la durée de la séance",
				genre:"F"
			},
			// Prestation 1 (hommes)
			{
				img:"img/particuliers/hommes/",
				alt:"photo meeting",
				titre:"Entretien découverte",
				description:"Nous permet de définir vos besoins, vos objectifs.",
				tarif:"1H - 50€",
				genre:"H"
			},
			// Prestation 2 (hommes)
			{
				img:"img/particuliers/hommes/total_relooking.jpg",
				alt:"photo coaching en image",
				titre:"Coaching en image",
				description:"Comprend : <ul> 								<li>entretien découverte</li> 								<li>test des couleurs</li> 								<li>maquillage</li> 								<li>coiffure</li> 								<li>analyse morphologique et style souhaité</li> 								<li>conseils vestimentaires et accessoires</li> 								<li>accompagnement shopping</li> 							</ul>",
				tarif:"8H - 490€",
				genre:"H"
			},
			// Prestation 3 (hommes)
			{
				img:"img/particuliers/hommes/colorimetrie.jpg",
				alt:"photo colorimetrie",
				titre:"Prestation spécifique",
				description:"",
				tarif:"Ajouter le prix et la durée de la séance",
				genre:"H"
			},
			// Prestation 4 (hommes)
			{
				img:"img/particuliers/hommes/relooking_beard.jpg",
				alt:"photo relooking barbe",
				titre:"Prestation spécifique",
				description:"",
				tarif:"Ajouter le prix et la durée de la séance",
				genre:"H"
			},
			// Prestation 5 (hommes)
			{
				img:"img/particuliers/hommes/relooking_hair.jpg",
				alt:"photo relooking cheveux",
				titre:"Prestation spécifique",
				description:"",
				tarif:"Ajouter le prix et la durée de la séance",
				genre:"H"
			},
			// Prestation 6 (hommes)
			{
				img:"img/particuliers/hommes/relooking_style.jpg",
				alt:"photo relooking style",
				titre:"Prestation spécifique",
				description:"",
				tarif:"Ajouter le prix et la durée de la séance",
				genre:"H"
			},
			// Prestation 7 (hommes)
			{
				img:"img/particuliers/hommes/",
				alt:"photo coatch séduction",
				titre:"Coach Séduction",
				description:"Ajouter le prix et la durée de la séance",
				tarif:"Ajouter le prix et la durée de la séance",
				genre:"H"
			}
		];
	});


