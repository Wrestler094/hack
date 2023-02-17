from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from .models import User
import jwt, datetime


def auth_reigster_response(user):
    payload = {
            "id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow(),
        }

    token = jwt.encode(payload, "secret", algorithm="HS256").decode(
        "utf-8"
    )

    response = Response()

    response.set_cookie(key="jwt", value=token, httponly=True)
    # ВНИМАНИЕ КОСТЫЛЬ
    if user.email == 'aloha@mail.com':
        role = 'admin'
    else:
        role = 'client'
    # КОНЕЦ КОСТЫЛЯ
    user_data = {
        "userData": {
            "id": user.id,
            "fullName": user.username,
            "username": "test_username",
            "avatar": "/img/13-small.d796bffd.png",
            "email": user.email,
            "role": role,
            "ability": [
                {
                    "action": "manage",
                    "subject": "all"
                }
            ],
            "extras": {
                "eCommerceCartItemsCount": 5
            }
        },
        "accessToken": token,
        "refreshToken": ''
    }

    response.data = user_data
    return response


# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        password = request.data["password"]
        email = request.data['email']
        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User not found!")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password!")

        return auth_reigster_response(user)


class LoginView(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User not found!")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password!")

        return auth_reigster_response(user)

class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get("jwt")

        if not token:
            raise AuthenticationFailed("Unauthenticated!")

        try:
            payload = jwt.decode(token, "secret", algorithm=["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated!")

        user = User.objects.filter(id=payload["id"]).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie("jwt")
        response.data = {"message": "success"}
        return response

