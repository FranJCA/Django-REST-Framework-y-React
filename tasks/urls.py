from django.urls import path, include
from rest_framework import routers
from tasks import views

#api vversion
router= routers.DefaultRouter()
router.register(r"tasks",views.TaskView,"tasks")

from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Task API"))
    
]
