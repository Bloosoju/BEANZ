from django.db import models

class Bean(models.Model):
    beanname = models.CharField(max_length=255)
    beanmembers = models.IntegerField()