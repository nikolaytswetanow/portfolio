from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.template.loader import render_to_string

from portfolio.web.forms import ContactForm


def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            html = render_to_string('emails/emailform.html', {
                'name': name,
                'email': email,
                'message': message,
            })

            # subject = 'welcome to GFG world'
            # message = f'Hi {user.username}, thank you for registering in geeksforgeeks.'
            # email_from = settings.EMAIL_HOST_USER
            # recipient_list = [user.email, ]
            # send_mail(subject, message, email_from, recipient_list)

            send_mail('Contact me - NTS',
                      'Here is the message.',
                      'noreply@nikolaytsvetanov.eu',
                      ['nikolaytswetanow@gmail.com'], html_message=html, fail_silently=False)
            return redirect('index')
    else:
        form = ContactForm

    context = {
        'form': form,
    }

    return render(request, 'index.html', context)
