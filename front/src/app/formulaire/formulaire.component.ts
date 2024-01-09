import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Question} from '../models/question.model';
import {HttpClient} from "@angular/common/http";
import {KeyMapType} from "../types/key-map.type";

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
  isLoading = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.loadQuestions();
    this.initializeForm();
  }

  loadQuestions() {
    this.questions = [
      { id: 1, text: 'Quel est votre âge ?', fieldType: 'number' },
      { id: 2, text: 'Quel est votre sexe ?', fieldType: 'select', options: [{ label: 'Homme', value: 1 }, { label: 'Femme', value: 0 }] },
      { id: 3, text: 'Quel est votre statut marital ?', fieldType: 'select', options: [{ label: 'Célibataire', value: 2 }, { label: 'Marié(e)', value: 1 }, { label: 'Remarié(e)', value: 4 }, { label: 'Veuf(ve)', value: 5 }, { label: 'Divorcé(e)', value: 0 }, { label: 'Non précisé', value: 3 }] },
      {
        id: 4,
        text: 'Quel est votre statut professionnel ?',
        fieldType: 'select',
        options: [
          { label: 'Cultivateur', value: 4 },
          { label: 'Ouvrier agricole salarié', value: 0 },
          { label: 'Travailleur salarié non agricole', value: 6 },
          { label: 'Travailleurs indépendants (à l\'exclusion des cultivateurs) - travailleurs à leur compte', value: 13 },
          { label: 'Travailleurs indépendants (à l\'exclusion des cultivateurs) - Employeurs', value: 12 },
          { label: 'Travailleurs indépendants (à l\'exclusion des cultivateurs) - Travailleurs familiaux non rémunérés', value: 15 },
          { label: 'Salariés réguliers', value: 10 },
          { label: 'N\'a pas travaillé mais était à la recherche d\'un emploi et/ou disponible pour travailler', value: 5 },
          { label: 'Participant à une institution éducative', value: 1 },
          { label: 'S\'occupe des tâches ménagères courantes', value: 2 },
          { label: 'Mendiants', value: 3 },
          { label: 'Prostituées/travailleurs du sexe', value: 9 },
          { label: 'Rentiers, retraités, autres bénéficiaires de transferts de fonds', value: 11 },
          { label: 'Incapable de travailler en raison d\'un handicap', value: 7 },
          { label: 'Trop âgés pour travailler', value: 14 },
          { label: 'Autres', value: 8 }
        ]
      },
      {
        id: 5,
        text: 'Quel est votre plus haut niveau de qualification ?',
        fieldType: 'select',
        options: [
          { label: 'Analphabète', value: 2 },
          { label: 'Primaire', value: 3 },
          { label: 'Collège', value: 4 },
          { label: 'Lycée', value: 6 },
          { label: 'BTS/DUT ou equivalent BAC+2/BAC+3', value: 1 },
          { label: 'BAC+5 ou supérieur', value: 5 },
          { label: 'Autres', value: 0 }
        ]
      },
      {
        id: 6,
        text: 'Quel est votre religion ?',
        fieldType: 'select',
        options: [
          { label: 'Hindous', value: 2 },
          { label: 'Musulman', value: 4 },
          { label: 'Chrétien', value: 1 },
          { label: 'Sikh', value: 5 },
          { label: 'Bouddhiste', value: 0 },
          { label: 'Jain', value: 3 },
          { label: 'Autres', value: 6 },
          { label: 'Sans religion', value: 7 }
        ]
      },
      {
        id: 7,
        text: 'Quel est votre rang de naissance au sein de votre famille ?',
        fieldType: 'select',
        options: [
          { label: '0 (Premier enfant)', value: 0 },
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 },
          { label: '6', value: 6 },
          { label: '7', value: 7 },
          { label: '8', value: 8 },
          { label: '9', value: 9 },
          { label: '10', value: 10 }
        ]
      },
      {
        id: 8,
        text: 'Est-ce que vous êtes diagnostiqué pour une maladie ?',
        fieldType: 'select',
        options: [
          { label: "Diabète", value: 11 },
          { label: "Hypertension", value: 16 },
          { label: "Maladie cardiaque chronique", value: 7 },
          { label: "Infarctus du myocarde/crise cardiaque", value: 18 },
          { label: "Accident vasculaire cérébral/accident cérébrovasculaire", value: 28 },
          { label: "Epilepsie", value: 12 },
          { label: "Asthme/insuffisance respiratoire chronique", value: 0 },
          { label: "Goitre/trouble thyroïdien", value: 15 },
          { label: "Tuberculose", value: 29 },
          { label: "Lèpre", value: 17 },
          { label: "Cancer-Système respiratoire", value: 5 },
          { label: "Cancer-Système gastro-intestinal", value: 3 },
          { label: "Cancer-Système génito-urinaire", value: 4 },
          { label: "Cancer du sein", value: 2 },
          { label: "Calcul rénaux", value: 24 },
          { label: "Insuffisance rénale chronique", value: 9 },
          { label: "Calcul biliaire/cholécystite", value: 13 },
          { label: "Insuffisance hépatique chronique", value: 8 },
          { label: "Arthrite rhumatoïde/ostéoarthrite", value: 25 },
          { label: "Maladies cutanées chroniques - psoriasis", value: 10 },
          { label: "Autres (hernie, hydrocèle, ulcère gastroduodénal, etc.)", value: 22 },
          { label: "Non diagnostiqué", value: 20 },
          { label: "Cataracte", value: 6 },
          { label: "Glaucome", value: 14 },
          { label: "Sinusite, Amygdalite", value: 26 },
          { label: "Flourose", value: 20 },
          { label: "Pyorrhée", value: 23 },
          { label: "Rhumatisme articulaire aigu/Maladie cardiaque rhumatismale", value: 20 },
          { label: "Tumeur (tout type)", value: 30 },
          { label: "Cancer du sang/leucémie", value: 1 },
          { label: "Cancer de la peau", value: 27 },
          { label: "Piles/fissure anale, Fistule anale", value: 20 },
          { label: "Anémie", value: 20 },
          { label: "Aucune", value: 19 },
        ]
      },
      {
        id: 9,
        text: 'Est-ce que vous possédez une couverture santé ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: 2 },
          { label: 'Non', value: 1 },
          { label: 'Ne sais pas', value: 0 }
        ]
      },
      {
        id: 10,
        text: 'Est-ce que vous possédez un handicap ?',
        fieldType: 'select',
        options: [
          { label: 'Mental', value: 2 },
          { label: 'Visuel', value: 7 },
          { label: 'L\'ouïe', value: 0 },
          { label: 'Parole', value: 6 },
          { label: 'Locomoteurs', value: 1 },
          { label: 'Multiple', value: 3 },
          { label: 'Pas de handicap', value: 4 },
          { label: 'Autres', value: 5 },
        ]
      },
      {
        id: 11,
        text: 'Est-ce que vous possédez un traitement régulier ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: 2 },
          { label: 'Oui mais pas régulier', value: 1 },
          { label: 'Non', value: 0 },
        ]
      },
      {
        id: 12,
        text: 'Est-ce que vous vivez à la campagne ou dans une ville ?',
        fieldType: 'select',
        options: [
          { label: 'Campagne', value: 1 },
          { label: 'Ville', value: 0 }
        ]
      },
      {
        id: 13,
        text: 'Est-ce que vous ête propriétaire ?',
        fieldType: 'select',
        options: [
          { label: 'Propriétaire', value: 1 },
          { label: 'Locataire', value: 2 },
          { label: 'Autres', value: 0 }
        ]
      },
      {
        id: 14,
        text: 'Quelle est la taille de terrain possédé ?',
        fieldType: 'select',
        options: [
          { label: 'Moins de 200m2', value: 4 },
          { label: 'Entre 200 et 1 000m2', value: 0 },
          { label: 'Entre 1 000 et 4 000m2', value: 1 },
          { label: 'Entre 4 000 et 10 000m2', value: 3 },
          { label: 'Plus de 10 000m2', value: 2 },
          { label: 'Non propriétaire de terrain', value: 5 }
        ]
      },
      {
        id: 15,
        text: 'Comment avez-vous accès à l\'eau potable ?',
        fieldType: 'select',
        options: [
          { label: 'Eau courante dans le logement', value: 3 },
          { label: 'Robinet public', value: 5 },
          { label: 'Pompe à main', value: 1 },
          { label: 'Puits tubulaire ou forage', value: 0 },
          { label: 'Puits creusé protégé', value: 4 },
          { label: 'Puits creusé non protégé', value: 7 },
          { label: 'Citerne/camion/chariot avec eau', value: 8 },
          { label: 'Eau de surface', value: 6 },
          { label: 'Autres sources', value: 2 }
        ]
      },
      {
        id: 16,
        text: 'Est-ce que l\'eau de votre robinet est filtrée ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: 1 },
          { label: 'Non', value: 0 }
        ]
      },
      {
        id: 17,
        text: 'Est-ce que les toilettes sont partagées ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: 1 },
          { label: 'Non', value: 0 }
        ]
      },
      {
        id: 18,
        text: 'Est-ce que votre logement a accès à l\'électricité ?',
        fieldType: 'select',
        options: [
          { label: 'Oui', value: 1 },
          { label: 'Non', value: 0 }
        ]
      },
      {
        id: 19,
        text: 'Quelle est la principale source d\'énergie pour l\'éclairage ?',
        fieldType: 'select',
        options: [
          { label: 'Électricité', value: 1 },
          { label: 'Kérosène', value: 2 },
          { label: 'Solaire', value: 4 },
          { label: 'Autres', value: 0 },
          { label: 'Pas d\'éclairage', value: 3 }
        ]
      },
      {
        id: 20,
        text: 'Quelle est la principale source d\'énergie pour cuisiner ?',
        fieldType: 'select',
        options: [
          { label: 'Bois de chauffage', value: 6 },
          { label: 'Résidus de culture', value: 4 },
          { label: 'Bouse de vache', value: 3 },
          { label: 'Charbon', value: 2 },
          { label: 'Kérosène', value: 7 },
          { label: 'GPL', value: 8 },
          { label: 'Électricité', value: 5 },
          { label: 'Biogaz', value: 1 },
          { label: 'Autre', value: 0 },
          { label: 'Pas de cuisine', value: 9 },
        ]
      },
      {
        id: 21,
        text: 'Quelle est le nombre de pièce d\'habitation dans la maison ?',
        fieldType: 'select',
        options: [
          { label: '0', value: 0 },
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 },
          { label: '6', value: 6 },
          { label: '7', value: 7 },
          { label: '8', value: 8 },
          { label: '9', value: 9 },
          { label: '10', value: 10 }
        ]
      },
      {
        id: 22,
        text: 'Est-ce que vous disposez d\'une cuisine ?',
        fieldType: 'select',
        options: [
          { label: 'Cuisine à l\'intérieur de la maison', value: 1 },
          { label: 'N\'a pas de cuisine', value: 0 },
          { label: 'Cuisine à l\'extérieur de la maison', value: 2 },
          { label: 'Autres', value: 3 },
        ]
      },
      {
        id: 23,
        text: 'Est-ce que vous fumez ?',
        fieldType: 'select',
        options: [
          { label: 'Fumeur habituel', value: 1 },
          { label: 'Fumeur occasionnel', value: 0 },
          { label: 'Ex-fumeur', value: 2 },
          { label: 'N\'a jamais fumé', value: 3 },
          { label: 'Ne sais pas', value: 4 }
        ]
      },
      {
        id: 24,
        text: 'Est-ce que vous consommez régulièrement de l\'alcool ?',
        fieldType: 'select',
        options: [
          { label: 'Buveur habituel', value: 1 },
          { label: 'Buveur occasionnel', value: 0 },
          { label: 'Ex-buveur', value: 2 },
          { label: 'N\'a jamais bu', value: 3 },
          { label: 'Ne sais pas', value: 4 }
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
          Validators.min(0),
          Validators.max(120)
        ]);
      } else if (question.fieldType === 'select' && question.options && question.options.length > 0) {
        switch (question.id) {
            case 6:
              formControls[question.id.toString()] = new FormControl(question.options[7].value);
              break;
            case 8:
              formControls[question.id.toString()] = new FormControl(question.options[33].value);
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

      const keyMap: KeyMapType = {
        '1': 'age',
        '2': 'sex',
        '3': 'marital_status',
        '4': 'occupation_status',
        '5': 'highest_qualification',
        '6': 'religion',
        '7': 'order_of_birth',
        '8': 'diagnosed_for',
        '9': 'iscoveredbyhealthscheme',
        '10': 'disability_status',
        '11': 'regular_treatment',
        '12': 'rural',
        '13': 'owner_status',
        '14': 'land_possessed',
        '15': 'drinking_water_source',
        '16': 'is_water_filter',
        '17': 'is_toilet_shared',
        '18': 'household_have_electricity',
        '19': 'lighting_source',
        '20': 'cooking_fuel',
        '21': 'no_of_dwelling_rooms',
        '22': 'kitchen_availability',
        '23': 'smoke',
        '24': 'alcohol',
        'is_radio': 'is_radio',
        'is_television': 'is_television',
        'is_computer': 'is_computer',
        'is_telephone': 'is_telephone',
        'is_washing_machine': 'is_washing_machine',
        'is_refrigerator': 'is_refrigerator',
        'is_sewing_machine': 'is_sewing_machine',
        'is_bicycle': 'is_bicycle',
        'is_water_pump': 'is_water_pump',
        'is_scooter': 'is_scooter',
        'is_car': 'is_car',
        'is_tractor': 'is_tractor',
      };

      const newData = this.transformData(data, keyMap);
      Object.keys(newData).forEach(key => {
        if (typeof newData[key] === 'boolean') {
          newData[key] = newData[key] ? 1 : 0;
        }
      });

      const numericData: { [key: string]: number } = {};
      for (const key in newData) {
        if (newData.hasOwnProperty(key)) {
          numericData[key] = isNaN(Number(newData[key])) ? data[key] : Number(newData[key]);
        }
      }

      /*this.http.post<any>('https://api-finalcountdown.onrender.com/getDate', newData).subscribe(
        localStorage.setItem('date_mort', response.date);
        location.reload();
      });*/

      console.log(numericData)
      this.isLoading = true;
      this.http.post<any>('http://localhost:5000/getDate', numericData).subscribe(
        response => {
          localStorage.setItem('date_mort', response.date);
          location.reload();
        },
        error => {
          console.error('Erreur lors de la soumission', error);
        },
        () => {
          this.isLoading = false;
        }
      );
    }
  }

  transformData(data: Record<string, any>, keyMap: KeyMapType) {
    const transformedData: Record<string, any> = {};

    Object.keys(data).forEach(key => {
      const newKey = keyMap[key];
      if (newKey) {
        transformedData[newKey] = data[key];
      }
    });

    return transformedData;
  }
}
