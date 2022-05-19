# Todo Frontend

## Test

- npm run test:unit
- npm run coverage:unit

- Pact Path : pact/pacts/frontend-backend.json

## Run

- npm run serve

## Docker

- docker build -t celal258/modanisa-backend:v0.0.1 .
- docker push celal258/modanisa-backend:0.0.1
- docker run -p 8081:8081 celal258/modanisa-backend:v0.0.1
- docker tag local-image:tagname new-repo:tagname

- gcloud builds submit --tag "gcr.io/galvanic-sphinx-341912/celal258-modanisa-front:v0.2.0"

## Kubernetes

- kubectl apply -f deployment/frondend-deployment.yaml

## Environment

I have two container registry

- BROKER_TOKEN -> Bearer "Secret" , pact broker token
- BROKER_URL -> <https://modanisa-test1.pactflow.io> , my pactflow instance
- CI_REGISTRY -> <https://index.docker.io/v1/>
- CI_REGISTRY_IMAGE -> celal258/todo-front
- CI_REGISTRY_GKE_IMAGE -> todo-front , Google Cloud Platform CI_REGISTRY -> gcr.io
- CI_REGISTRY_USER -> celal258
- CI_REGISTRY_PASSWORD -> "Secret"
- GCP_PROJECT_ID -> galvanic-sphinx-341912 , Google Cloud Platform project Id
- GCP_SERVICE_ACCOUNT , Google Cloud Platform Account Information
- MY_TRIGGER_TOKEN -> Gitlab run ci token
