from .models import *

def get_user_by_username(username):
    """metodo para retornar el usario a partir del username"""
    return User.query.filter_by(username=username)

def register_user(user_data):
    """metodo para registrat un usario en la base de datos"""
    user=User(
        name=user_data['name'],
        lastName=user_data['lastname'],
        username=user_data['username'],
        email=user_data['email'],
        password=user_data['password'],
        cedula=user_data['cedula']
    )
    user.set_password(user_data['password'])

    