from django.urls import path
from api.views import company_list,company_id,company_vacancy,vacancy_list,vacancy_id,vacancy_top_ten,vacancy_top

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:new_id>/', company_id),
    path('companies/<int:new_id>/vacancies', company_vacancy),

    path('vacancies/', vacancy_list),
    path('vacancies/<int:pk>/', vacancy_id),
    path('vacancies/top_ten/', vacancy_top_ten),
    path('vacancies/top_vacancy/', vacancy_top)
]