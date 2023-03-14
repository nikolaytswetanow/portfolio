from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length=55, widget=forms.TextInput(attrs={'placeholder': 'Your name'}))
    email = forms.EmailField(widget=forms.TextInput(attrs={'placeholder': 'Your email'}))
    message = forms.CharField(max_length=255, widget=forms.Textarea(attrs={'placeholder': 'Write your message'}))
