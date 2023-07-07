from django.urls import path

from .views import *


urlpatterns = [
    path("marketitem/", MarketItemAPIList.as_view()),
    path("marketitem/<int:pk>/", MarketItemAPISpecific.as_view()),
    path("marketitem/create/", MarketItemAPICreate.as_view()),
    path("marketitem/update/<int:pk>/", MarketItemAPIUpdate.as_view()),
    path("marketitem/destroy/<int:pk>/", MarketItemAPIDestroy.as_view()),
    
    path("categories/", CategoryAPIList.as_view()),
    path("categories/create", CategoryAPICreate.as_view()),
    path("categories/update/<int:pk>/", CategoryAPIUpdate.as_view()),
    path("categories/destroy/<int:pk>/", CategoryAPIDestroy.as_view()),
    
    path("getDeviceInfo/", getDeviceInfo),
    path("setLampState/", setLampState),
    path("isFlooded/", isFlooded),
    path("isTooWarm/", isTooWarm),
    path("getDevices/", getDevices)
]
