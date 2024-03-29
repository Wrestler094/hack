from django.urls import path, include

# from . import views

from .views import RegisterView, LoginView, UserView, LogoutView

urlpatterns = [
    path("register", RegisterView.as_view()),
    path("login", LoginView.as_view()),
    path("user", UserView.as_view()),
    path("logout", LogoutView.as_view()),
]

# urlpatterns = [
#     path("", views.index),
#     path("register", views.RegisterView.as_view()),
#     # path("register/<int:pk>/", views.RegisterView.as_view()),
# ]
