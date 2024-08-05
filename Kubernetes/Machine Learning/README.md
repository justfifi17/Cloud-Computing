# Machine Learning on Kubernetes

## Overview
This project demonstrates how to deploy a simple machine learning model using Flask and Docker on a Kubernetes cluster in Google Cloud Platform (GCP). It involves creating a machine learning application that uses a logistic regression model to predict customer behavior. The application is containerized using Docker and deployed on a Kubernetes cluster.

## Requirements
Ensure you have the following installed:
- Google Cloud SDK
- Docker
- Kubernetes (Minikube)
- Python 3.8

## Setup

1. **Start Minikube in Google Cloud Platform**
    ```bash
    minikube start
    ```

2. **Create `requirements.txt`**: I have uploaded the file so you can copy the content from there 
    ```bash
    sudo vim requirements.txt
    ```

3. **Upload the `logreg.pkl` file to GCP Cloud Shell Terminal**
    - Click the three dots in the top-right part of the Cloud Shell Terminal and select `Upload`.

4. **Create `flask_api.py`**: I have uploaded the file so you can copy the content from there 
    ```bash
    sudo vim flask_api.py
    ```
   
## Docker Configuration

1. **Create `Dockerfile`**
    ```bash
    sudo vim Dockerfile
    ```
    Copy the following content:
    ```Dockerfile
    FROM python:3.8-slim
    WORKDIR /app
    COPY . /app
    EXPOSE 5000
    RUN pip install -r requirements.txt
    CMD ["python", "flask_api.py"]
    ```

## Running the Application

1. **Build the Docker Image**
    ```bash
    sudo docker build -t ml_app_docker .
    ```

2. **Run the Docker Container**
    ```bash
    docker container run -p 5000:5000 ml_app_docker
    ```

3. **Preview the Application**
    - In the right-upper side of the terminal, click the eye-shaped button and select `Preview on port 5000`.

4. **Access API Documentation**
    - Append `/apidocs/` to the URL to access the running application.

## API Documentation

### GET /predict
- Parameters:
  - `age`: integer
  - `new_user`: integer
  - `total_pages_visited`: integer
- Response: Model prediction

### POST /predict_file
- Parameters:
  - `file`: formData (CSV file)
- Response: Model predictions for the file

## Stopping the Container

1. **List Running Docker Containers**
    ```bash
    docker ps
    ```

2. **Stop the Running Container**
    ```bash
    docker kill <CONTAINER_ID>
    ```

## References
- [Exercise Kubernetes](https://hc.labnet.sfbu.edu/~henry/sfbu/course/cloud_computing/genai/slide/exercise_kubernetes.html)

### For better understanding on the project, check out my [Google Slides](https://docs.google.com/presentation/d/1Vj2J90MlSSBiYHNByMXgfAgAYdyo7q0k3jkRg9tilj4/edit?usp=sharing)


### For clearer follow-up steps to build the project, follow my [file]()
