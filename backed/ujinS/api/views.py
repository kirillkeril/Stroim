import requests
from django.http import JsonResponse

from rest_framework import generics
from rest_framework.permissions import *
from rest_framework.decorators import api_view

from .permissions import *
from .models import *
from .serializers import *


class MarketItemAPIList(generics.ListCreateAPIView):
    """List of all recipes"""
    queryset = MarketItem.objects.all()
    serializer_class = MarketItemSerializer

class MarketItemAPISpecific(generics.ListCreateAPIView):
    """Specific recipe with Id"""
    serializer_class = MarketItemSerializer

    def get_queryset(self):
        return MarketItem.objects.filter(id=self.kwargs["pk"])

class MarketItemAPICreate(generics.CreateAPIView):
    """Recipe create by Id"""
    queryset = MarketItem.objects.all()
    serializer_class = MarketItemSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class MarketItemAPIUpdate(generics.UpdateAPIView):
    """Recipe update by Id"""
    queryset = MarketItem.objects.all()
    serializer_class = MarketItemSerializer

class MarketItemAPIDestroy(generics.RetrieveDestroyAPIView):
    """Recipe destroy by Id"""
    queryset = MarketItem.objects.all()
    serializer_class = MarketItemSerializer    
    
class CategoryAPIList(generics.ListCreateAPIView):
    """List of all categories"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminOrReadOnly,)

class CategoryAPICreate(generics.CreateAPIView):
    """Create a new category"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminUser,)

class CategoryAPIUpdate(generics.UpdateAPIView):
    """Update a category"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminUser,)

class CategoryAPIDestroy(generics.RetrieveDestroyAPIView):
    """Destroy a category"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminUser,)


@api_view(['GET'])
def getDeviceInfo(request):
    response = requests.get('https://api-uae-test.ujin.tech/api/devices/get-device-info/',
                            params=request.query_params,
                            data=request.data)
    result = response.json()
    return JsonResponse(result)

@api_view(['GET'])
def getDevices(request):
    response = requests.get('https://api-uae-test.ujin.tech/api/devices/main/',
                            data=request.data)
    result = response.json()
    return JsonResponse(result)

@api_view(['GET'])
def isFlooded(request):
    par = {
        "token": request.query_params["token"],
        "serialnumber": "636459796",
    }
    response = requests.get('https://api-uae-test.ujin.tech/api/devices/get-device-info/',
                            params=par)
    result = response.json()["data"]["signals"][0]["state"]["value"]
    result = {
        "isFlooded": True if result == "1" else False,
        "value": result
    }
    return JsonResponse(result)

@api_view(['GET'])
def isTooWarm(request):
    par = {
        "token": request.query_params["token"],
        "serialnumber": "636587104",
    }
    response = requests.get('https://api-uae-test.ujin.tech/api/devices/get-device-info/',
                            params=par)
    temperature = float(response.json()["data"]["signals"][4]["state"]["value"])
    max_temp = float(response.json()["data"]["signals"][13]["state"]["value"])
    result = {
        "isTooWarm": True if temperature > max_temp else False,
        "value": temperature
    }
    par = {
        "token": request.query_params["token"],
        "state": 1 if temperature > 30 else 0,
        "serialnumber": "636586920",
        "signal": "lamp_a1",
    }
    response = requests.get('https://api-uae-test.ujin.tech/api/apartment/send-signal/',
                            params=par)
    return JsonResponse(result)

@api_view(['GET'])
def setLampState(request):
    par = {
        "token": request.query_params["token"],
        "state": request.query_params["state"],
        "serialnumber": "636586920",
        "signal": "lamp_a1",
    }
    response = requests.get('https://api-uae-test.ujin.tech/api/apartment/send-signal/',
                            params=par)
    result = response.json()
    return JsonResponse(result)

