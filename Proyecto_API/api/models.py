from django.db import models

# Create your models here.

class Producto(models.Model):
    nombre=models.CharField(max_length=50)
    categoria=models.CharField(max_length=50)
    color=models.CharField(max_length=50)
    descripcion=models.CharField(max_length=50)
    sku=models.PositiveIntegerField()
    precion=models.PositiveIntegerField()


