# -*- coding: utf-8 -*-
"""Copy of Hinglish

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1iwud1pH36llw5OboRfywUzRPzcuOK6zv
"""

!pip install transformers
!pip install indic-transliteration

!pip install googletrans==4.0.0-rc1
!pip install indic-transliteration

from googletrans import Translator
from indic_transliteration import sanscript
from indic_transliteration.sanscript import transliterate

def translate_to_hinglish(text):
    # Translate English text to Hindi
    translator = Translator()
    translated_text = translator.translate(text, src='en', dest='hi').text

    # Transliterate the Hindi text to Hinglish
    hinglish_text = transliterate(translated_text, sanscript.DEVANAGARI, sanscript.ITRANS)

    return hinglish_text

# Example usage
english_text = "I had about a 30 minute demo just using this new headset"
output_hinglish = translate_to_hinglish(english_text)
print(output_hinglish)

english_text = "Definitely share your feedback in the comment section"
output_hinglish = translate_to_hinglish(english_text)
print(output_hinglish)

english_text = "So even if it's a big video, I will clearly mention all the products"
output_hinglish = translate_to_hinglish(english_text)
print(output_hinglish)

english_text = ". I was waiting for my bag."
output_hinglish = translate_to_hinglish(english_text)
print(output_hinglish)

from googletrans import Translator

def translate_to_hindi(text):
    translator = Translator()
    translation = translator.translate(text, src='en', dest='hi')
    return translation.text

def mix_languages(text, english_fraction=0.5):
    words = text.split()
    mixed_text = ""
    for word in words:
        if len(word) > 3 and len(word) < 8:
            hindi_translation = translate_to_hindi(word)
            if hindi_translation == word:
                mixed_text += word + " "
            else:
                mixed_text += hindi_translation + " "
        else:
            mixed_text += word + " "
    return mixed_text

# Example usage
english_text = input("Enter English text: ")
mixed_text = mix_languages(english_text)
print("Mixed Language Text:", mixed_text)

english_text = input("Enter English text: ")
mixed_text = mix_languages(english_text)
print("Mixed Language Text:", mixed_text)

english_text = input("Enter English text: ")
mixed_text = mix_languages(english_text)
print("Mixed Language Text:", mixed_text)