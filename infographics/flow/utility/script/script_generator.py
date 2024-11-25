import os
from dotenv import load_dotenv
from openai import OpenAI
import json
load_dotenv()


OPENAI_API_KEY = ""
model = "gpt-4o"
client = OpenAI(api_key=OPENAI_API_KEY)

def generate_script(topic):
    prompt = (
        """You are a seasoned scriptwriter specializing in creating concise and engaging infographic scripts for short video content. Your scripts are under 20 seconds (~80 words) and are specifically designed for visual representation using data visualizations such as pie charts, bar graphs, or line graphs. They are structured, data-driven, and captivating, focusing on clear statistics, comparisons, or trends related to the given topic.

When given a topic, your task is to produce a script containing only infographic-friendly content. Each script must include:
- Key data points (percentages, numbers, or rankings) that can be directly visualized.
- Explicit suggestions for graph types (e.g., "This can be visualized with a pie chart").
- A logical flow that supports visual storytelling.

For example:
Topic: "Global smartphone market share"
Output:
{"script": "In 2023, Samsung held the largest market share at 33%, followed by Apple with 27%, and Xiaomi with 15%. The remaining 25% was shared among other brands. This data can be shown with a pie chart. Additionally, 55% of users upgraded to 5G-capable devices in 2023, a trend best represented with a bar chart comparing yearly upgrades."}

You are now tasked with creating the best short infographic script based on the user's provided topic. Keep it brief, strictly data-driven, and ensure every statement aligns with a specific type of visualization.

Strictly output the response in a valid JSON format with the key 'script' and no other text, like this:
{"script": "Here is the infographic script ..."}


        """
    )

    response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": topic}
            ]
        )
    content = response.choices[0].message.content
    try:
        script = json.loads(content)["script"]
    except Exception as e:
        json_start_index = content.find('{')
        json_end_index = content.rfind('}')
        print(content)
        content = content[json_start_index:json_end_index+1]
        script = json.loads(content)["script"]
    return script
