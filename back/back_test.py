import pandas as pd
import joblib
import os

new_data = pd.DataFrame({
    'sex':                          [0],
    'marital_status':               [4],
    'occupation_status':            [11],
    'highest_qualification':        [2],
    'religion':                     [0],
    'order_of_birth':               [5],
    'diagnosed_for':                [21],
    'iscoveredbyhealthscheme':      [1],
    'disability_status':            [0],
    'regular_treatment':            [2],
    'rural':                        [1],
    'owner_status':                 [2],
    'land_possessed':               [1],
    'drinking_water_source':        [1],
    'is_water_filter':              [1],
    'is_toilet_shared':             [1],
    'household_have_electricity':   [1],
    'lighting_source':              [1],
    'cooking_fuel':                 [7],
    'no_of_dwelling_rooms':         [2],
    'kitchen_availability':         [1],
    'is_radio':                     [1],
    'is_television':                [1],
    'is_computer':                  [1],
    'is_telephone' :                [1],
    'is_washing_machine' :          [0],
    'is_refrigerator' :             [1],
    'is_sewing_machine':            [1],
    'is_bicycle':                   [1],
    'is_water_pump':                [1],
    'is_scooter':                   [1],
    'is_car':                       [1],
    'is_tractor':                   [0],
    'smoke':                        [1],
    'alcohol':                      [1],
})

dirname = os.path.dirname(os.path.abspath(__file__))
# Charger le modèle à partir du fichier
loaded_model = joblib.load(dirname+'/modele_xgboost.pkl')

new_prediction = loaded_model.predict(new_data)

print(new_prediction)