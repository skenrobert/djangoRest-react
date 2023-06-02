from django.db import models

class Task(models.Model): #model for migration
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)


    def __str__(self):
        return self.title
