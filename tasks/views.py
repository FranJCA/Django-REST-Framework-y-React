from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

class TaskView(viewsets.ModelViewSet):
    serializer_class= TaskSerializer
    queryset= Task.objects.all()


#con todo esto ya no se nesesita el render from django.shortcuts import render
