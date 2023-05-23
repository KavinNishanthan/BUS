# Generated by Django 4.1.8 on 2023-05-20 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_register'),
    ]

    operations = [
        migrations.AddField(
            model_name='register',
            name='bookedId',
            field=models.PositiveIntegerField(default=400),
        ),
        migrations.AddField(
            model_name='register',
            name='bookedTicket',
            field=models.PositiveIntegerField(default=300),
        ),
    ]