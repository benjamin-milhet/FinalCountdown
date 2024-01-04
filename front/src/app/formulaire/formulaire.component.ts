import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Question} from '../models/question.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit{
  form: FormGroup;
  questions: Question[] = [];
  currentPage = 0;
  questionsPerPage = 10;
  totalQuestions = 30;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.loadQuestions();
    this.initializeForm();
  }

  loadQuestions() {
    // Ici, charger ou définir vos questions
    this.questions = [
      { id: 1, text: 'Quel est votre âge ?', fieldType: 'number' },
      { id: 2, text: 'Quel est votre sexe ?', fieldType: 'select', options: ['Homme', 'Femme'] },
      { id: 3, text: 'Quel est votre statut marital ?', fieldType: 'select', options: ['Célibataire', 'Marié(e)', 'Divorcé(e)', 'Veuf(ve)', 'Remarié(e)', 'Non précisé'] },
      { id: 4, text: 'Quel est votre statut professionnel ?', fieldType: 'select', options: ['Cultivateur', 'Ouvrier agricole salarié', 'Travailleur salarié non agricole', 'Travailleurs indépendants (à l\'exclusion des cultivateurs) - travailleurs à leur compte', 'Travailleurs indépendants (à l\'exclusion des cultivateurs) - Employeurs', 'Travailleurs indépendants (à l\'exclusion des cultivateurs) - Travailleurs familiaux non rémunérés', 'Salariés réguliers', 'N\'a pas travaillé mais était à la recherche d\'un emploi et/ou disponible pour travailler', 'A fréquenté un établissement d\'enseignement', 'S\'occupe des tâches ménagères courantes', 'Mendiants', 'Prostituées/travailleurs du sexe', 'Rentiers, retraités, autres bénéficiaires de transferts de fonds', 'Incapable de travailler en raison d\'un handicap', 'Trop âgés pour travailler', 'Autres'] },
      { id: 5, text: 'Quel est votre plus haut niveau de qualification ?', fieldType: 'select', options: ['Analphabète', 'Primaire', 'Collège', 'Lycée', 'BTS/DUT ou equivalent BAC+2/BAC+3', 'BAC+5 ou supérieur', 'Autres'] },
      { id: 6, text: 'Quel est votre religion ?', fieldType: 'select', options: ['Hindous', 'Musulman', 'Chrétien', 'Sikh', 'Bouddhiste', 'Jain', 'Autres', 'Sans religion'] },
      { id: 7, text: 'Quel est votre rang de naissance au sein de votre famille ?', fieldType: 'select', options: ['0 (Premier enfant)', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] },
      { id: 8, text: 'Est-ce que vous êtes diagnostiqué pour une maladie ?', fieldType: 'select', options: [
          "Diabète",
          "Hypertension",
          "Maladie cardiaque chronique",
          "Infarctus du myocarde/crise cardiaque",
          "Accident vasculaire cérébral/accident cérébrovasculaire",
          "Epilepsie",
          "Asthme/insuffisance respiratoire chronique",
          "Goitre/trouble thyroïdien",
          "Tuberculose",
          "Lèpre",
          "Cancer-Système respiratoire",
          "Cancer-Système gastro-intestinal",
          "Cancer-Système génito-urinaire",
          "Cancer du sein",
          "Calcul rénal",
          "Insuffisance rénale chronique",
          "Calcul biliaire/cholécystite",
          "Insuffisance hépatique chronique",
          "Arthrite rhumatoïde/ostéoarthrite",
          "Maladies cutanées chroniques - psoriasis",
          "Autres (hernie, hydrocèle, ulcère gastroduodénal, etc.)",
          "Non diagnostiqué",
          "Cataracte",
          "Glaucome",
          "Sinusite, Amygdalite",
          "Flourose",
          "Pyorrhée",
          "Rhumatisme articulaire aigu/Maladie cardiaque rhumatismale",
          "Tumeur (tout type)",
          "Cancer du sang/leucémie",
          "Cancer de la peau",
          "Piles/fissure anale, Fistule anale",
          "Anémie",
          "Autres (Hernie, Hydrocèle, Ulcère gastroduodénal, etc.) - utilisé dans la première et la deuxième enquête de mise à jour uniquement"
        ] },
      { id: 9, text: 'Est ce que vous vivez à la campagne ou dans une ville ?', fieldType: 'select', options: ['Campagne', 'Ville'] },
      { id: 10, text: 'Est-ce que vous ête propriétaire ?', fieldType: 'select', options: ['Propriétaire', 'Locataire', 'Autres'] },
      { id: 11, text: 'Quelle est la taille de terrain possédé ?', fieldType: 'select', options: ['Moins de 200m2', 'Entre 200 et 1 000m2', 'Entre 1 000 et 4 000m2', 'Entre 4 000 et 10 000m2', 'Plus de 10 000m2', 'Non propriétaire de terrain'] },
      { id: 12, text: 'Comment avez-vous accès à l\'eau potable ?', fieldType: 'select', options: ['Eau courante dans le logement', 'Robinet public', 'Pompe à main', 'Puits tubulaire ou forage', 'Puits creusé protégé', 'Puits creusé non protégé', 'Citerne/camion/chariot avec eau', 'Eau de surface', 'Autres sources'] },
      { id: 13, text: 'Est-ce que l\'eau de votre robinet est filtré ?', fieldType: 'select', options: ['Oui', 'Non'] },
      { id: 14, text: 'Est-ce que les toilettes sont partagées ?', fieldType: 'select', options: ['Oui', 'Non'] },
      { id: 15, text: 'Est-ce que votre logement à accès à l\'électricité ?', fieldType: 'select', options: ['Oui', 'Non'] },
      { id: 16, text: 'Quelle est la principale source d\'énergie pour l\'éclairage ?', fieldType: 'select', options: ['Électricité', 'Kérosène', 'Solaire', 'Autres', 'Pas d\'éclairage'] },
      { id: 17, text: 'Est-ce que vous disposez d\'une cuisine ?', fieldType: 'select', options: ['Cuisiner à l\'intérieur de la maison', 'N\'a pas de cuisine', 'Cuisiner à l\'extérieur de la maison', 'Autres', 'Pas d\'éclairage'] },
      { id: 18, text: 'Est-ce que vous fumez ?', fieldType: 'select', options: ['Fumeur habituel', 'Fumeur occasionnel', 'Ex-fumeur', 'N\'a jamais fumé', 'Ne sais pas'] },
      { id: 19, text: 'Est-ce que vous consommez régulièrement de l\'alcool ?', fieldType: 'select', options: ['Buveur habituel', 'Buveur occasionnel', 'Ex-buveur', 'N\'a jamais bu', 'Ne sais pas'] },
      { id: 20, text: 'Est-ce que vous possédez un véhicule ?', fieldType: 'select', options: ['Poussé par l\'animal', 'Poussé par une machine', 'Autres', 'Aucun'] },
      { id: 21, text: 'Veuillez cocher les objets et véhicules que vous posséder ?', fieldType: 'checkbox'},

    ];
  }

  initializeForm() {
    const formControls: { [key: string]: FormControl } = {}; // Typage explicite

    this.questions.forEach(question => {
      if (question.fieldType === 'number') {
        formControls[question.id.toString()] = new FormControl(18, [
          Validators.min(1),
          Validators.max(120)
        ]);
      } else {
        formControls[question.id.toString()] = new FormControl('');
      }
    });

    formControls['is_radio'] = new FormControl(false);
    formControls['is_television'] = new FormControl(false);
    formControls['is_computer'] = new FormControl(false);
    formControls['is_telephone'] = new FormControl(false);
    formControls['is_washing_machine'] = new FormControl(false);
    formControls['is_refrigerator'] = new FormControl(false);
    formControls['is_sewing_machine'] = new FormControl(false);
    formControls['is_bicycle'] = new FormControl(false);
    formControls['is_water_pump'] = new FormControl(false);
    formControls['is_scooter'] = new FormControl(false);
    formControls['is_car'] = new FormControl(false);
    formControls['is_tractor'] = new FormControl(false);


    this.form = this.fb.group(formControls);
  }

  nextPage() {
    if (this.currentPage < this.totalQuestions / this.questionsPerPage - 1) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Traiter les données du formulaire ici
    }
  }

  convertirDataPourTraitement(data: any) {
    
  }
}
