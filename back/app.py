from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os
import pandas as pd
from datetime import datetime, timedelta

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/", methods=['GET'])
def accueil():
    return jsonify({"message": "Rendez-vous sur dans l'au dela !"})

def calculate_datetime_change(years_to_add, years_to_subtract):
    current_datetime = datetime.now()
    new_datetime = current_datetime + timedelta(days=years_to_add * 365.25) - timedelta(days=years_to_subtract * 365.25)
    return new_datetime.strftime("%Y-%m-%dT%H:%M:%S")

@app.route("/getDate", methods=['POST'])
def getDate():
    data = request.get_json()
    print(data)

    ordered_data = {
        'sex': [data['sex']],
        'marital_status': [data['marital_status']],
        'occupation_status': [data['occupation_status']],
        'highest_qualification': [data['highest_qualification']],
        'religion': [data['religion']],
        'order_of_birth': [data['order_of_birth']],
        'diagnosed_for': [data['diagnosed_for']],
        'iscoveredbyhealthscheme': [data['iscoveredbyhealthscheme']],
        'disability_status': [data['disability_status']],
        'regular_treatment': [data['regular_treatment']],
        'rural': [data['rural']],
        'owner_status': [data['owner_status']],
        'land_possessed': [data['land_possessed']],
        'drinking_water_source': [data['drinking_water_source']],
        'is_water_filter': [data['is_water_filter']],
        'is_toilet_shared': [data['is_toilet_shared']],
        'household_have_electricity': [data['household_have_electricity']],
        'lighting_source': [data['lighting_source']],
        'cooking_fuel': [data['cooking_fuel']],
        'no_of_dwelling_rooms': [data['no_of_dwelling_rooms']],
        'kitchen_availability': [data['kitchen_availability']],
        'is_radio': [data['is_radio']],
        'is_television': [data['is_television']],
        'is_computer': [data['is_computer']],
        'is_telephone': [data['is_telephone']],
        'is_washing_machine': [data['is_washing_machine']],
        'is_refrigerator': [data['is_refrigerator']],
        'is_sewing_machine': [data['is_sewing_machine']],
        'is_bicycle': [data['is_bicycle']],
        'is_water_pump': [data['is_water_pump']],
        'is_scooter': [data['is_scooter']],
        'is_car': [data['is_car']],
        'is_tractor': [data['is_tractor']],
        'smoke': [data['smoke']],
        'alcohol': [data['alcohol']],
    }

    df = pd.DataFrame(ordered_data)

    dirname = os.path.dirname(os.path.abspath(__file__))
    loaded_model = joblib.load(dirname+'/modele_xgboost.pkl')

    new_prediction = loaded_model.predict(df)

    print(new_prediction)
    return jsonify({"date": calculate_datetime_change(new_prediction[0], data['age'])})