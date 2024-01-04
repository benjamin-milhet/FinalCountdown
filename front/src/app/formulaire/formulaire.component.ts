import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Question} from '../models/question.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit{
  form: FormGroup;
  questions: Question[] = [];
  currentPage = 0;
  questionsPerPage = 6;
  totalQuestions = 30;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
      { id: 2, text: 'Quel est votre sexe ?', fieldType: 'select', options: [{ label: 'Homme', value: '1' }, { label: 'Femme', value: '2' }] },
      { id: 3, text: 'Quel est votre statut marital ?', fieldType: 'select', options: [{ label: 'Célibataire', value: '1' }, { label: 'Marié(e)', value: '2' }, { label: 'Remarié(e)', value: '4' }, { label: 'Veuf(ve)', value: '5' }, { label: 'Divorcé(e)', value: '6' }, { label: 'Non précisé', value: '8' }] },
      {
        id: 4,
        text: 'Quel est votre statut professionnel ?',
        fieldType: 'select',
        options: [
          { label: 'Cultivateur', value: '1' },
          { label: 'Ouvrier agricole salarié', value: '2' },
          { label: 'Travailleur salarié non agricole', value: '3' },
          { label: 'Travailleurs indépendants (à l\'exclusion des cultivateurs) - travailleurs à leur compte', value: '4' },
          { label: 'Travailleurs indépendants (à l\'exclusion des cultivateurs) - Employeurs', value: '5' },
          { label: 'Travailleurs indépendants (à l\'exclusion des cultivateurs) - Travailleurs familiaux non rémunérés', value: '6' },
          { label: 'Salariés réguliers', value: '7' },
          { label: 'N\'a pas travaillé mais était à la recherche d\'un emploi et/ou disponible pour travailler', value: '8' },
          { label: 'A fréquenté un établissement d\'enseignement', value: '9' },
          { label: 'S\'occupe des tâches ménagères courantes', value: '10' },
          { label: 'Mendiants', value: '11' },
          { label: 'Prostituées/travailleurs du sexe', value: '12' },
          { label: 'Rentiers, retraités, autres bénéficiaires de transferts de fonds', value: '13' },
          { label: 'Incapable de travailler en raison d\'un handicap', value: '14' },
          { label: 'Trop âgés pour travailler', value: '15' },
          { label: 'Autres', value: '16' }
        ]
      },
      {
        id: 5,
        text: 'Quel est votre plus haut niveau de qualification ?',
        fieldType: 'select',
        options: [
          { label: 'Analphabète', value: '0' },
          { label: 'Primaire', value: '1' },
          { label: 'Collège', value: '4' },
          { label: 'Lycée', value: '5' },
          { label: 'BTS/DUT ou equivalent BAC+2/BAC+3', value: '7' },
          { label: 'BAC+5 ou supérieur', value: '8' },
          { label: 'Autres', value: '9' }
        ]
      },
      {
        id: 6,
        text: 'Quel est votre religion ?',
        fieldType: 'select',
        options: [
          { label: 'Hindous', value: '1' },
          { label: 'Musulman', value: '2' },
          { label: 'Chrétien', value: '3' },
          { label: 'Sikh', value: '4' },
          { label: 'Bouddhiste', value: '5' },
          { label: 'Jain', value: '6' },
          { label: 'Autres', value: '7' },
          { label: 'Sans religion', value: '8' }
        ]
      },
      {
        id: 7,
        text: 'Quel est votre rang de naissance au sein de votre famille ?',
        fieldType: 'select',
        options: [
          { label: '0 (Premier enfant)', value: '0' },
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
          { label: '6', value: '6' },
          { label: '7', value: '7' },
          { label: '8', value: '8' },
          { label: '9', value: '9' },
          { label: '10', value: '10' }
        ]
      },
      {
        id: 8,
        text: 'Est-ce que vous êtes diagnostiqué pour une maladie ?',
        fieldType: 'select',
        options: [
          { label: "Diabète", value: "1" },
          { label: "Hypertension", value: "2" },
          { label: "Maladie cardiaque chronique", value: "3" },
          { label: "Infarctus du myocarde/crise cardiaque", value: "4" },
          { label: "Accident vasculaire cérébral/accident cérébrovasculaire", value: "5" },
          { label: "Epilepsie", value: "6" },
          { label: "Asthme/insuffisance respiratoire chronique", value: "7" },
          { label: "Goitre/trouble thyroïdien", value: "8" },
          { label: "Tuberculose", value: "9" },
          { label: "Lèpre", value: "10" },
          { label: "Cancer-Système respiratoire", value: "11" },
          { label: "Cancer-Système gastro-intestinal", value: "12" },
          { label: "Cancer-Système génito-urinaire", value: "13" },
          { label: "Cancer du sein", value: "14" },
          { label: "Calcul rénal", value: "15" },
          { label: "Insuffisance rénale chronique", value: "16" },
          { label: "Calcul biliaire/cholécystite", value: "17" },
          { label: "Insuffisance hépatique chronique", value: "18" },
          { label: "Arthrite rhumatoïde/ostéoarthrite", value: "19" },
          { label: "Maladies cutanées chroniques - psoriasis", value: "20" },
          { label: "Autres (hernie, hydrocèle, ulcère gastroduodénal, etc.)", value: "21" },
          { label: "Non diagnostiqué", value: "0" },
          { label: "Cataracte", value: "21" },
          { label: "Glaucome", value: "22" },
          { label: "Sinusite, Amygdalite", value: "23" },
          { label: "Flourose", value: "24" },
          { label: "Pyorrhée", value: "25" },
          { label: "Rhumatisme articulaire aigu/Maladie cardiaque rhumatismale", value: "26" },
          { label: "Tumeur (tout type)", value: "27" },
          { label: "Cancer du sang/leucémie", value: "28" },
          { label: "Cancer de la peau", value: "29" },
          { label: "Piles/fissure anale, Fistule anale", value: "30" },
          { label: "Anémie", value: "30" },
          { label: "Autres (Hernie, Hydrocèle, Ulcère gastroduodénal, etc.) - utilisé dans la première et la deuxième enquête de mise à jour uniquement", value: "99" }
        ]
      },
      {
        id: 9,
        text: 'Est-ce que vous possédez une couverture santé ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: '1' },
          { label: 'Non', value: '2' },
          { label: 'Ne sais pas', value: '3' }
        ]
      },
      {
        id: 10,
        text: 'Est-ce que vous possédez un handicap ?',
        fieldType: 'select',
        options: [
          { label: 'Mental', value: '1' },
          { label: 'Visuel', value: '2' },
          { label: 'L\'ouïe', value: '3' },
          { label: 'Parole', value: '4' },
          { label: 'Locomoteurs', value: '5' },
          { label: 'Multiple', value: '6' },
          { label: 'Pas de handicap', value: '0' },
          { label: 'Autres', value: '7' },
        ]
      },
      {
        id: 11,
        text: 'Est-ce que vous possédez un traitement régulier ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: '2' },
          { label: 'Oui mais pas régulier', value: '1' },
          { label: 'Non', value: '3' },
        ]
      },
      {
        id: 12,
        text: 'Est-ce que vous vivez à la campagne ou dans une ville ?',
        fieldType: 'select',
        options: [
          { label: 'Campagne', value: '1' },
          { label: 'Ville', value: '2' }
        ]
      },
      {
        id: 13,
        text: 'Est-ce que vous ête propriétaire ?',
        fieldType: 'select',
        options: [
          { label: 'Propriétaire', value: "1" },
          { label: 'Locataire', value: "2" },
          { label: 'Autres', value: "3" }
        ]
      },
      {
        id: 14,
        text: 'Quelle est la taille de terrain possédé ?',
        fieldType: 'select',
        options: [
          { label: 'Moins de 200m2', value: "1" },
          { label: 'Entre 200 et 1 000m2', value: "2" },
          { label: 'Entre 1 000 et 4 000m2', value: "3" },
          { label: 'Entre 4 000 et 10 000m2', value: "4" },
          { label: 'Plus de 10 000m2', value: "5" },
          { label: 'Non propriétaire de terrain', value: "6" }
        ]
      },
      {
        id: 15,
        text: 'Comment avez-vous accès à l\'eau potable ?',
        fieldType: 'select',
        options: [
          { label: 'Eau courante dans le logement', value: "1" },
          { label: 'Robinet public', value: "2" },
          { label: 'Pompe à main', value: "3" },
          { label: 'Puits tubulaire ou forage', value: "4" },
          { label: 'Puits creusé protégé', value: "5" },
          { label: 'Puits creusé non protégé', value: "6" },
          { label: 'Citerne/camion/chariot avec eau', value: "7" },
          { label: 'Eau de surface', value: "8" },
          { label: 'Autres sources', value: "9" }
        ]
      },
      {
        id: 16,
        text: 'Est-ce que l\'eau de votre robinet est filtrée ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: "1" },
          { label: 'Non', value: "2" }
        ]
      },
      {
        id: 17,
        text: 'Est-ce que les toilettes sont partagées ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: "1" },
          { label: 'Non', value: "2" }
        ]
      },
      {
        id: 18,
        text: 'Est-ce que votre logement a accès à l\'électricité ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: "1" },
          { label: 'Non', value: "2" }
        ]
      },
      {
        id: 19,
        text: 'Quelle est la principale source d\'énergie pour l\'éclairage ?',
        fieldType: 'select',
        options: [
          { label: 'Électricité', value: "1" },
          { label: 'Kérosène', value: "2" },
          { label: 'Solaire', value: "3" },
          { label: 'Autres', value: "5" },
          { label: 'Pas d\'éclairage', value: "6" }
        ]
      },
      {
        id: 20,
        text: 'Quelle est la principale source d\'énergie pour cuisiner ?',
        fieldType: 'select',
        options: [
          { label: 'Bois de chauffage', value: "1" },
          { label: 'Résidus de culture', value: "2" },
          { label: 'Bouse de vache', value: "3" },
          { label: 'Charbon', value: "4" },
          { label: 'Kérosène', value: "5" },
          { label: 'GPL', value: "6" },
          { label: 'Électricité', value: "7" },
          { label: 'Biogaz', value: "8" },
          { label: 'Autre', value: "9" },
          { label: 'Pas de cuisine', value: "0" },
        ]
      },
      {
        id: 21,
        text: 'Quelle est le nombre de pièce d\'habitation dans la maison ?',
        fieldType: 'select',
        options: [
          { label: '0', value: '0' },
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
          { label: '6', value: '6' },
          { label: '7', value: '7' },
          { label: '8', value: '8' },
          { label: '9', value: '9' },
          { label: '10', value: '10' }
        ]
      },
      {
        id: 22,
        text: 'Est-ce que vous disposez d\'une cuisine ?',
        fieldType: 'select',
        options: [
          { label: 'Cuisine à l\'intérieur de la maison', value: "1" },
          { label: 'N\'a pas de cuisine', value: "2" },
          { label: 'Cuisine à l\'extérieur de la maison', value: "3" },
          { label: 'Autres', value: "5" },
        ]
      },
      {
        id: 23,
        text: 'Est-ce que vous fumez ?',
        fieldType: 'select',
        options: [
          { label: 'Fumeur habituel', value: "1" },
          { label: 'Fumeur occasionnel', value: "2" },
          { label: 'Ex-fumeur', value: "3" },
          { label: 'N\'a jamais fumé', value: "4" },
          { label: 'Ne sais pas', value: "5" }
        ]
      },
      {
        id: 24,
        text: 'Est-ce que vous consommez régulièrement de l\'alcool ?',
        fieldType: 'select',
        options: [
          { label: 'Buveur habituel', value: "1" },
          { label: 'Buveur occasionnel', value: "2" },
          { label: 'Ex-buveur', value: "3" },
          { label: 'N\'a jamais bu', value: "4" },
          { label: 'Ne sais pas', value: "5" }
        ]
      },
      { id: 25, text: 'Veuillez cocher les objets et véhicules que vous posséder ?', fieldType: 'checkbox'},

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
      } else if (question.fieldType === 'select' && question.options && question.options.length > 0) {
        switch (question.id) {
            case 6:
              formControls[question.id.toString()] = new FormControl(question.options[7].value);
              break;
            case 8:
              formControls[question.id.toString()] = new FormControl(question.options[21].value);
              break;
            case 10:
              formControls[question.id.toString()] = new FormControl(question.options[6].value);
              break;
            case 11:
              formControls[question.id.toString()] = new FormControl(question.options[2].value);
              break;
            case 17:
              formControls[question.id.toString()] = new FormControl(question.options[1].value);
              break;
            case 20:
              formControls[question.id.toString()] = new FormControl(question.options[6].value);
              break;
            case 21:
              formControls[question.id.toString()] = new FormControl(question.options[2].value);
              break;
            case 23:
              formControls[question.id.toString()] = new FormControl(question.options[3].value);
              break;
            case 24:
              formControls[question.id.toString()] = new FormControl(question.options[3].value);
              break;
            default:
              formControls[question.id.toString()] = new FormControl(question.options[0].value);
              break;
        }
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
      const data = this.form.value;
      console.log(data);
      this.http.post<any>('http://localhost:5000/getDate', data).subscribe(response => {
        console.log(response.date);
        localStorage.setItem('date_mort', response.date);
        location.reload();
      });


    }
  }

}
