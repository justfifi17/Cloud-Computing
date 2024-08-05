# Configmap: Signature Project: MongoDB + Python Flask Web Framework + REST API + GKE Copy
## Overview 
This project demonstrates deploying a MongoDB instance on Google Kubernetes Engine (GKE) and creating containerized applications that interact with it. The goal is to manage cloud infrastructure and deploy scalable applications using Kubernetes.


## Prerequisites
Before you begin, ensure you got these tools:

- Google Cloud Platform (GCP) Account: Access to Google Cloud services to create and manage GKE clusters.
- Docker: Installed on your local machine to build and push container images.
- Kubernetes CLI (kubectl): Installed and configured to manage your Kubernetes clusters.
- Git: Installed to clone the repository.

## Installation
1. Set Up Google Cloud Environment

- Create a Google Cloud Project: If you don’t have one, create a new project on the Google Cloud Console.

- Enable Billing: Ensure billing is enabled for your project, as GKE and other services may incur costs.

- Install Google Cloud SDK: Follow the installation guide to set up the SDK on your machine.

- Authenticate with GCP: Run the following command to authenticate your Google Cloud account:

```gcloud auth login```

2. Install Docker and Kubernetes CLI
- Docker Installation: Install Docker Desktop from the official website.
- Kubernetes CLI Installation: Install kubectl by following the instructions here.
  
3. Clone the Project Repository
Clone the Repository: Use the following command to clone the project repository:
```
git clone https://github.com/yourusername/cs571-signature-project.git
cd cs571-signature-project
```

## Steps
### Step 1: Create MongoDB using Persistent Volume on GKE
1- Create a GKE Cluster:

```gcloud container clusters create kubia --num-nodes=1 --machine-type=e2-micro --region=us-west1```

2- Create a Persistent Volume:

If you haven’t created one in a previous exercise, do so now:

```gcloud compute disks create --size=10GiB --zone=us-west1-a mongodb```

3- Deploy MongoDB:

Create a mongodb-deployment.yaml file and deploy MongoDB:


```kubectl apply -f mongodb-deployment.yaml```

4- Create a MongoDB Service:

Create a mongodb-service.yaml file to expose MongoDB externally:

```kubectl apply -f mongodb-service.yaml```

5- Check Service Status:

Ensure the MongoDB service is running and accessible:

```kubectl get svc```

6- Insert Records into MongoDB:

Use Node.js to insert sample data into MongoDB:
```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://EXTERNAL-IP/mydb";
// Connect to the db and insert records
```

### Step 2: Deploy a Student Server Application
1- Create studentServer.js: This server interacts with the MongoDB instance. I have added that file above

2- Create a Dockerfile:
```
FROM node:7
ADD studentServer.js /studentServer.js
ENTRYPOINT ["node", "studentServer.js"]
RUN npm install mongodb
```

3- Build and Push the Docker Image:
```
docker build -t yourdockerhubID/studentserver .

docker push yourDockerID/studentserver
```

### Step 3: Create and Deploy a Python Flask Bookshelf REST API
1- Create bookshelf.py: This is a Flask application to manage a collection of books.

2. Create a Dockerfile: 
```
FROM python:alpine3.7
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
ENV PORT 5000
EXPOSE 5000
ENTRYPOINT ["python3"]
CMD ["bookshelf.py"]
```

3- Build and Push the Docker Image
```
docker build -t yourDockerID/bookshelf .
docker push yourDockerID/bookshelf
```

### Step 4: Create ConfigMaps for the Applications
Create studentserver-configmap.yaml and bookshelf-configmap.yaml to store MongoDB URL and database name. You can copy the code from the files I uploaded above or clone this repository 

### Step 5: Expose the Applications using Nginx Ingress
1- Create Deployment and Service YAML Files:

- studentserver-deployment.yaml
- bookshelf-deployment.yaml
- studentserver-service.yaml
- bookshelf-service.yaml

2- Enable Ingress on Minikube:

```minikube addons enable ingress```

3- Create Ingress Resource:

Deploy the Ingress resource with the necessary YAML files.

4- Update /etc/hosts:

Add the Ingress IP address to your /etc/hosts file:


```Your-address cs571.project.com```

### Step 6: Test the Applications
Test the APIs using curl commands.

## Resources
- MongoDB Service: Accessible via External IP.
- Student Server API: /studentserver/api/score?student_id=11111
- Bookshelf API: /bookshelf/books, /bookshelf/book, etc.

## Troubleshooting
Common Errors: If you encounter issues with Kubernetes deployments, check the logs using:

```kubectl logs <pod-name>```

Network Issues: Ensure that your firewall rules allow traffic to the necessary ports.



#### For clearer understanding on the project take a look at my [Google Slides](https://docs.google.com/presentation/d/188Yyq0q6AsKR6UD5bEQoY7TZ7UlGZRVsXPz3Q56cS9g/edit?usp=sharing)

### For step by step follow up on building the project refer my [pdf file](./signature-project.pdf)
