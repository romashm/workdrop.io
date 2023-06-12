from django.shortcuts import render

import openai
import asyncio

# Create your views here.
openai.api_key = "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"

async def async_io_career_guidance(str):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=str,
        temperature=0.7,
        max_tokens=1000,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    
    return response.choices[0].text

async def index(request):
    return render(request, 'index.html', {
        "Career_Guidance": await asyncio.create_task(async_io_career_guidance("Напиши 10 вопросов, которые помогут выбрать мне профессию, с ответами 'да' или 'нет' впиши в HTML - таг <p class='questions'>, но не пиши сами ответы ")),
        "Personality_Type": await asyncio.create_task(async_io_career_guidance("Напиши 10 вопросов, которые помогут выбрать мне мой тип личности, с ответами 'да' или 'нет' впиши в HTML - таг <p class='questions_p'>, но не пиши сами ответы ")),
        "Result": await asyncio.create_task(async_io_career_guidance("Напиши одну профессию"))
    })

def page(request):
    return render(request, 'page.html')