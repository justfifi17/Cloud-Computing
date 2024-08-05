## Containerized Video Transcription and Chat App 

This project is a containerized application that enables video transcription and chat functionality using Generative AI. The app uses Docker, OpenAI, and Pinecone services to provide transcription services and a chat interface based on video content.

## Project Overview
The Containerized Video Transcription and Chat App is a simple yet powerful application that allows users to:

- Transcribe YouTube videos using a Dockerized service (yt-whisper).
- Interact with a chatbot based on the content of the videos, powered by Generative AI.
- The application is built using Docker Compose, which simplifies the setup and management of the services involved.

## Prerequisites
Before you begin, ensure you have met the following requirements:

- OpenAI API Key: You'll need to obtain a key from OpenAI.
- Pinecone API Key: Sign up and generate an API key from Pinecone.
- Docker Desktop: Install the latest version of Docker Desktop and ensure it is running.
- Git Client: Install a Git client to clone the repository.

## Installation
Follow these steps to set up the application:

1- Clone the Repository:

Open a terminal and run the following commands to clone the project repository:

```git clone https://github.com/Davidnet/docker-genai.git```

``` cd docker-genai ```

2- Set Up Environment Variables:

Copy the example environment file and edit it with your API keys:

```cp .env.example .env```

```notepad .env```

Add your OpenAI and Pinecone API keys to the .env file.

3- Build and Run the Application:

Navigate to the project directory and build the application:

```docker compose up --build```

This will start the services and expose them on ports 8503 and 8504.

## Usage
 ### Video Transcription
1- Open your browser and navigate to the yt-whisper service:

```http://localhost:8503```

2- In the YouTube URL field, enter a video URL and click Submit.

3- Once processed, the video transcript will be indexed in Pinecone, and you can download the transcript directly from the web app.

### Chat Interface
1- Open your browser and navigate to the chat service:

```http://localhost:8504```

2- You can ask questions related to the indexed video content, such as "What is a sugar cookie?", and the app will generate responses based on the video transcripts.

## Stopping the Application
To stop the application, go to the terminal where the services are running and press ```Ctrl + C```.


### For clearer understanding or the project, take a look at the [Google Slides](https://docs.google.com/presentation/d/1EdzEpeF6iJ1zyntC6XyDx1tWQC0jNTQy9QDKg9YvT1w/edit?usp=sharing)

### For step-by-step instructions on building this project, [View the PDF](./containerized%20video%20transcription%20and%20chat%20app.pdf)

