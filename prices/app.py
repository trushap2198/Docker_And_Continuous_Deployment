import json, requests
from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/')
def prices():
    data = requests.get('http://back-end-apparel').json()

    for item in range(len(data)):
        data[item]['price'] = item*5 + 1

    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)