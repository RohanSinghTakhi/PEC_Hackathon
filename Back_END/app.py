from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import gridfs
import os

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient(os.getenv('MONGODB_URI'))
db = client['notebook_db']
fs = gridfs.GridFS(db)

try:
    client.admin.command('ping')
    print("Ping Successful, DB Connected !")
except:
    print('error occured')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Store file in GridFS
    file_id = fs.put(file, filename=file.filename)
    return jsonify({'message': 'File uploaded successfully', 'file_id': str(file_id)}), 201

@app.route('/files', methods=['GET'])
def list_files():
    files = fs.find()
    file_list = [{'file_id': str(file._id), 'filename': file.filename} for file in files]
    return jsonify(file_list), 200


@app.route('/files/<file_id>', methods=['GET'])
def get_file(file_id):
    try:
        file_data = fs.find_one({"_id": ObjectId(file_id)})  # Convert string to ObjectId
        if file_data:
            response = jsonify({
                'filename': file_data.filename,
                'length': file_data.length,
                'content_type': file_data.content_type
            })
            response.headers['Content-Disposition'] = f'attachment; filename={file_data.filename}'
            response.data = file_data.read()
            return response
        else:
            return jsonify({'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
