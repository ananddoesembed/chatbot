# Generated by Django 3.2.9 on 2021-11-03 14:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('name', models.CharField(blank=True, max_length=30, null=True)),
                ('category', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, null=True)),
                ('brand', models.CharField(max_length=200)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('countInStock', models.IntegerField(blank=True, default=0, null=True)),
                ('rating', models.DecimalField(decimal_places=2, max_digits=7)),
                ('numReviews', models.IntegerField(blank=True, default=0, null=True)),
                ('createdAt', models.DateField(auto_now_add=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
