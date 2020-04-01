from django.shortcuts import render

from django.http import JsonResponse
from api.models import Vacancy
from api.models import Company

#COMPANY LIST
def company_list(request):
    companies = Company.objects.all()
    new_companies_json = [c.to_json() for c in companies]
    return JsonResponse(new_companies_json, safe=False)

#COMPANY BY ID
def company_id(request, new_id):
    try:
        company = Company.objects.get(id=new_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company.to_json())

#VACANCIES IN ONE COMPANY
def company_vacancy(request, new_id):
    try:
        company = Company.objects.get(id=new_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    vacancies = company.vacancy_set.all()
    json_vacancies = [j_v.to_json() for j_v in Vacancy]
    return JsonResponse(json_vacancies, safe=False)

#VACANCY LIST
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    json_vacancies = [j_v.to_json() for j_v in Vacancy]
    return JsonResponse(json_vacancies, safe=False)

#VACANCY BY ID
def vacancy_id(request, pk):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

#TOP TEN VACANCIES
def vacancy_top_ten(request):
    vacancies = Vacancy.objects.all()
    json_vacancies = []
    tempSalary=-1000
    tempCounter=0
    for top_vacancy in vacancies:
        if tempCounter==3:
            break
        if top_vacancy.salary>tempSalary:
            tempSalary = top_vacancy.salary
            json_vacancies.append(top_vacancy.to_json())
        tempCounter=tempCounter+1

    json_vacancies.sort(key=lambda topVacancy: topVacancy["salary"],reverse=True)

    return JsonResponse(json_vacancies, safe=False)

#TOP 10 VACANCIES THROUGH THE SQLITE COMMAND DJANGO
def vacancy_top(request):
    # vacancies = Vacancy.objects.filter().order_by('-salary')[:10]
    vacancies = Vacancy.objects.order_by('-salary')[0:10]
    json_vacancies = [j_v.to_json() for j_v in vacancies]
    return JsonResponse(json_vacancies, safe=False)
