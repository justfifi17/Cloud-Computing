# ☸ Running App on Kubernetes ☸️🐳

#### * Running multi-node Kubernetes cluster on Cloud using a hosted Kubernetes cluster with Google Kubernetes Engine  - three nodes*
#




### Brief Introduction to the work 
This project involves running an application on Kubernetes using Google Cloud Platform (GCP). By setting up and managing a Kubernetes environment, I created a Kubernetes cluster, deployed the application, and exposed it to the internet.
#

### Design Overview 
●  Deploy a simple application on Kubernetes using Google Kubernetes Engine (GKE) in the Google Cloud Platform (GCP) environment. 

● The application consists of a set of replicated pods managed by a Replication Controller (RC). 

● A Service is exposed to provide external access to the application.

● Uses YAML configuration files and the kubectl command-line tool enhancing the deployment process.

#


### In conclusion...
Together, Kubernetes and GCP offer a powerful platform for deploying and managing web applications, showing the versatility and efficiency of modern cloud-native technologies.

#


### How to Use
● Clone the repository and navigate to the project directory.

● Follow the steps on the Google Slides linked at the buttom.  

● Create the Replication Controller YAML file - "sudo vim kubia-rc.yaml"

● Copy and paste the content from the "kubia-rc.yaml" file when creating the YAML file, then save and exit. 

● Access the application via external IP address (curl http://<EXTERNAL_IP>:8080)

#

### Contributions
Contributions are welcome! If you have ideas for improvement or have found a bug, please open an issue or a pull request.

#
### Google Slides - For more details on the project and step-by-step guide on implementation and installation.  
https://docs.google.com/presentation/d/1B0o00cPhwuVVfhs06XcC_O_tY2raS2vVhArE5KDS9m4/edit?usp=sharing





