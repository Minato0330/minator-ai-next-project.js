# Orcish AI Next.js Framework

![orcish-ai-nextjs-framework](https://github.com/TheOrcDev/orcish-ai-nextjs-framework/assets/7549148/81f0102f-c201-4bbe-92e3-cc8012da9aca)

## Overview

The Orcish AI Next.js Framework is a powerful tool that leverages the capabilities of GPT-4, OpenAI's advanced language model, to integrate AI functionalities seamlessly into your Next.js applications. With this framework, you can easily harness the power of AI to generate text and images based on your specified input.

## Getting Started

### Installation

To begin, install the required dependencies using the following command:

```bash
pnpm i
```

# Development Server

After installing the dependencies, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

`cp .env.example .env`

### Configuration

Create a copy of the provided `.env.example` file and name it `.env`. Fill in the required OpenAI API Key in the newly created `.env` file:

```bash
OPENAI_API_KEY=your_api_key
```

Make sure to replace placeholder values with your actual API key.

## Usage Guide

## Text Completion:

1. **Locate Input Field:** On the index page of our application, you'll find an input field.
   
2. **Insert Subject:** Enter your desired subject into the input field.

3. **Choose AI Model (Optional):** If desired, you can select the AI model for text completion. By default it's going to be `gpt-3.5-turbo`.
   
4. **Generate Text:** Click on the `Get Completion` button. This action prompts the framework to generate text based on your input.

## Image Generation:

1. **Switch Mode:** To switch to image generation mode, click on the toggle, and click "Image".

2. **Choose AI Image Model (Optional):** If desired, you can select the Image AI model for image generation. By default it's going to be `dall-e-3`.

3. **Get Image:** Once in "Image" mode, click on the `Get Image` button. The AI will then generate an image based on your input.

## Text-to-Speech:

1. **Switch Mode:** Click on the toggle again to switch to "Text to Speech" mode.

2. **Choose AI Voice Model (Optional):** If desired, you can select the Voice AI model for voice generation. By default it's going to be `tts-1`.

3. **Choose AI Voice (Optional):** If desired, you can select the voice for voice generation. By default it's going to be `echo`.
   
4. **Generate Voice Output:** With the mode set to "Text to Speech," click on the `Get Voice Output` button. This action will invoke the AI to generate an audio file that you can play.


The Orcish AI Next.js Framework provides a seamless integration of AI capabilities into your Next.js applications, offering a versatile and user-friendly experience for generating both text and images.

