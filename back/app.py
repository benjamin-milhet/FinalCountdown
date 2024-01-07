from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/", methods=['GET'])
def accueil():
    return jsonify({"message": "Rendez-vous sur dans l'au dela !"})

@app.route("/getDate", methods=['POST'])
def getDate():
    data = request.get_json()
    print(data)
    return jsonify({"date": "2077-01-01T00:00:00"})