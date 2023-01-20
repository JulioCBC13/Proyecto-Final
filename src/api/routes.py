"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Contador
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/registro', methods=['POST'])
def funcionderegistro():

    body = request.json
    if "name" not in body :
        return "el usuario no tiene nombre", 400
    if "lastname" not in body :
        return "el usuario no tiene apellido", 400
    if "email" not in body :
        return "el usuario no tiene email", 400
    if "password" not in body :
        return "el usuario no tiene contraseña", 400
    if "cedula" not in body :
        return "el usuario no tiene cedula", 400

    nuevo_usuario = User(body["name"],body["lastname"],body["email"],body["password"],body["cedula"])
    
    try:
        db.session.add(nuevo_usuario)
        db.session.commit()

        return "Se ah creado el Usuario con exito",200 

    except Exception as error:
        return "como te registras mal?.... animal",500

"""
Para login
"""

@api.route('/login', methods=['POST'])
def funciondelogin():

    body = request.json    
    if "email" not in body :
        return "el usuario no tiene email", 400
    if "password" not in body :
        return "el usuario no tiene contraseña", 400
    

    email = body.get("email", None)
    password = body.get("password", None)
    usuario = User.query.filter_by(email=email, password=password).one_or_none()


    if usuario == None:
        contador = Contador.query.filter_by(email=email, password=password).one_or_none()
        if contador != None:
            return jsonify({"msg": "Usuario y Contrateña invalida"})
        return jsonify({ "token": create_access_token(identity=email),"contador":True })
    return jsonify({ "token": create_access_token(identity=email),"usuario":True })
    
    #usuario = User(body["email"],body["password"])
    
    # try:
    #     db.session.add(usuario)
    #     db.session.commit()

    #     return "Ha iniciado con exito",200 

    # except Exception as error:
    #     return jsonify({"msg":"Fallido, hay un dato incorrecto"}),500