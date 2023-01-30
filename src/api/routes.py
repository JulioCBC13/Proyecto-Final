"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Contador, BalanceP, CertificacionI, DeclaracionImp, Asesoria
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
    

# Para Balance Personal

@api.route('/balance', methods=['POST'])
def balancepersonal():

    body = request.json
    if "completeName" not in body :
        return jsonify({"error":"Falto Nombre Completo"}), 400
    if "cedula" not in body :
        return jsonify({"error":"Falto Cedula"}), 400
    if "bancoInfo" not in body :
        return jsonify({"error":"Falto Informacion de Banco"}), 400
    if "vehiculosAmount" not in body :
        return jsonify({"error":"Falto Cantidad de Vehiculos"}), 400
    if "propiedadesAmount" not in body :
        return jsonify({"error":"Falto Cantidad de Propiedades"}), 400

    nuevo_balance_personal = BalanceP(body["completeName"],body["cedula"],body["bancoInfo"],body["vehiculosAmount"],body["propiedadesAmount"])
    
    try:
        db.session.add(nuevo_balance_personal)
        db.session.commit()

        return "Se han registrado tus datos con exito",200 

    except Exception as error:
        return "hermano solo tienes que llenar los campos",500

@api.route('/balance', methods=['GET'])
def datos_balance():
    return jsonify([balance.serialize() for balance in BalanceP.query.all()]),200

# Para Certificacion de Ingresos


@api.route('/ingresos', methods=['POST'])
def CertificacionIngresos():

    body = request.json
    if "completeName" not in body :
        return jsonify({"error":"Falto Nombre Completo"}), 400
    if "cedula" not in body :
        return jsonify({"error":"Falto Cedula"}), 400
    if "promedioMensual" not in body :
        return jsonify({"error":"Falto Promedio Mensual"}), 400
    if "ocupacion" not in body :
        return jsonify({"error":"Falto Ocupacion"}), 400
    

    nuevo_certificacion_ingresos = CertificacionI(body["completeName"],body["cedula"],body["promedioMensual"],body["ocupacion"])
    
    try:
        db.session.add(nuevo_certificacion_ingresos)
        db.session.commit()

        return "Se han registrado tus datos con exito",200 

    except Exception as error:
        return "hermano solo tienes que llenar los campos",500

@api.route('/ingresos', methods=['GET'])
def datos_ingresos():
    return jsonify([ingresos.serialize() for ingresos in CertificacionI.query.all()]),200




# Para declaracion de Impuestos

@api.route('/impuestos', methods=['POST'])
def DeclaracionImpuestos():

    body = request.json
    if "completeName" not in body :
        return jsonify({"error":"Falto Nombre Completo"}), 400
    if "cedula" not in body :
        return jsonify({"error":"Falto Cedula"}), 400
    if "ingresos" not in body :
        return jsonify({"error":"Falto Ingresos"}), 400
    if "costos" not in body :
        return jsonify({"error":"Falto Costos"}), 400   
    if "gastos" not in body :
        return jsonify({"error":"Falto Gastos"}), 400
    

    nuevo_declaracion_impuestos = DeclaracionImp(body["completeName"],body["cedula"],body["ingresos"],body["costos"],body["gastos"])
    
    try:
        db.session.add(nuevo_declaracion_impuestos)
        db.session.commit()

        return "Se han registrado tus datos con exito",200 

    except Exception as error:
        return "hermano solo tienes que llenar los campos",500

@api.route('/impuestos', methods=['GET'])
def datos_impuestos():
    return jsonify([impuestos.serialize() for impuestos in DeclaracionImp.query.all()]),200

# Para Asesorías personalizadas

@api.route('/asesorias', methods=['POST'])
def nueva_asesoria():

    body = request.json
    if "completeName" not in body :
        return jsonify({"error":"Falto Nombre Completo"}), 400
    if "date" not in body :
        return jsonify({"error":"Falto Dia"}), 400
    if "time" not in body :
        return jsonify({"error":"Falto Hora"}), 400
    
    nuevo_asesoria = Asesoria(body["completeName"],body["date"],body["time"])
    
    try:
        db.session.add(nuevo_asesoria)
        db.session.commit()

        return "Se han registrado tus datos con exito",200 

    except Exception as error:
        return "hermano solo tienes que llenar los campos",500

@api.route('/asesorias', methods=['GET'])
def datos_asesorias():
    return jsonify([asesorias.serialize() for asesorias in Asesoria.query.all()]),200