from django.db import models

class Task(models.Model): #model for migration
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self): # show values in http://127.0.0.1:8000/admin/tasks
        return self.title # before show obj no title
