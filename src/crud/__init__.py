from flask import flask
from .config import Config

def create_app():
# metodo para la creacion de la app de flask
    app = Flask(__name__)
    app.config.from_object(config)

    return app


