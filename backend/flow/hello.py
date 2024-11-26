# ---------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# ---------------------------------------------------------

from promptflow.core import tool
from openai import OpenAI
import os
import edge_tts
import json
import time
import asyncio
import requests
from promptflow.core import tool
import whisper_timestamped as whisper
from utility.script.script_generator import generate_script
from utility.audio.audio_generator import generate_audio
from utility.captions.timed_captions_generator import generate_timed_captions
from utility.video.background_video_generator import generate_video_url
from utility.render.render_engine import get_output_media
from utility.video.video_search_query_generator import getVideoSearchQueriesTimed, merge_empty_intervals
# import argparse

# The inputs section will change based on the arguments of the tool function, after you save the code
# Adding type to arguments and return value will help the system show the types properly
# Please update the function name/signature per need



@tool
def my_python_tool(input1: str) -> str:
        SAMPLE_FILE_NAME = "audio_tts.wav"
        VIDEO_SERVER = "pexel"
        
        # # response = generate_script(SAMPLE_TOPIC)
        # # print("script: {}".format(response))

        asyncio.run(generate_audio(input1, SAMPLE_FILE_NAME))

        timed_captions = generate_timed_captions(SAMPLE_FILE_NAME)
        print(timed_captions)

        search_terms = getVideoSearchQueriesTimed(input1, timed_captions)
        print(search_terms)

        background_video_urls = None
        if search_terms is not None:
            background_video_urls = generate_video_url(search_terms, VIDEO_SERVER)
            print(background_video_urls)
        else:
            print("No background video")

        background_video_urls = merge_empty_intervals(background_video_urls)

        if background_video_urls is not None:
            s3_url = get_output_media(SAMPLE_FILE_NAME, timed_captions, background_video_urls, VIDEO_SERVER)
            return (s3_url)
        else:
            return "None"
        
