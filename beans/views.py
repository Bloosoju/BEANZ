from django.http import HttpResponse
from django.template import loader
from .models import Bean


def beans(request):
    return HttpResponse("Hello world!")

def index(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())