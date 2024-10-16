from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import jwt
import datetime
import os

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.config['SECRET_KEY'] = os.urandom(24)  # Replace with a secure key in production

CORS(app, origins=['*'])

uri = "mongodb+srv://co24302:VFxLb3Pw3DZruwQW@auth.dncxe.mongodb.net/?retryWrites=true&w=majority&appName=auth"

# MongoDB Atlas connection
client = MongoClient(uri)
db = client['authSytem']
users_collection = db['users']

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

# User Registration
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username').lower()
    password = data.get('password')

    if users_collection.find_one({'username': username}):
        return jsonify({'message': 'User already exists'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    users_collection.insert_one({
        'username': username,
        'password': hashed_password
    })

    return jsonify({'message': 'User registered successfully'}), 201

# User Login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username').lower()
    password = data.get('password')

    user = users_collection.find_one({'username': username})
    if user and bcrypt.check_password_hash(user['password'], password):
        # Generate JWT token
        token = jwt.encode({
            'username': username,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, app.config['SECRET_KEY'], algorithm='HS256')

        return jsonify({'token': token}), 200

    return jsonify({'message': 'Invalid credentials'}), 401

# Protected Route
@app.route('/protected', methods=['GET'])
def protected():
    token = request.headers.get('Authorization')

    if not token:
        return jsonify({'message': 'Token is missing'}), 401

    try:
        decoded = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        username = decoded['username']
        return jsonify({'message': f'Hello, {username}!'}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({'message': 'Token has expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'message': 'Invalid token'}), 401

if __name__ == '__main__':
    app.run(debug=True)