from flask import Flask, render_template,request,redirect,url_for # For flask implementation
from pymongo import MongoClient # Database connector
from bson.objectid import ObjectId # For ObjectId to work
from bson.json_util import dumps
from flask_cors import CORS

client = MongoClient('localhost', 27017)    #Configure the connection to the database
db = client.vaksana_test    #Select the database
stats1 = db.stub_stats #Select the collection

app = Flask(__name__,template_folder='./www')
CORS(app)

@app.route("/stats")
def stats ():
	stat = stats1.find()
	return dumps(stat)

@app.route("/")
def main ():
	return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
