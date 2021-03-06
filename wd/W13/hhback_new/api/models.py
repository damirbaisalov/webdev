from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default="")
    city = models.CharField(max_length=100, default='Pavlodar')
    address = models.TextField(default="")

    class Meta:
        verbose_name_plural = 'Companies'
        verbose_name = 'Company'

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "desctiption": self.description,
            "city": self.city,
            "address": self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default="")
    salary = models.FloatField(default=1500.0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE,
                                related_name='vacancies')

    def __str__(self):
        return f'Vacancy id={self.id}, name={self.name}'

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "salary": self.salary,
            # "company": self.company_id
        }
