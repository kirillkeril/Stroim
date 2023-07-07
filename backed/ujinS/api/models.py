from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=64)
    picture = models.ImageField(upload_to="images/categories/%Y/%m/%d/", max_length=255, null=True, blank=True)

    def __str__(self) -> str:
        return self.name
    

class MarketItem(models.Model):
    name = models.CharField(max_length=64)
    time = models.IntegerField(default=1)
    servings_amount = models.IntegerField(default=1)
    picture = models.ImageField(upload_to="images/recipes/%Y/%m/%d/", max_length=255, null=True, blank=True)
    category = models.ForeignKey(Category, verbose_name="Категория", on_delete=models.SET_NULL, null=True)
    owner = models.ForeignKey(User, verbose_name="Создатель", on_delete=models.CASCADE, editable=False)

    def __str__(self) -> str:
        return self.name
