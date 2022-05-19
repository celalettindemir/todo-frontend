#!/bin/bash

VERSION=$1 #like 1.0.0
curl -v -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer dUyaVq2xZheha-_mByqRNw"  \
-d @pact/pacts/frontend-backend.json \
https://modanisa-test1.pactflow.io/pacts/provider/Backend/consumer/Frontend/version/${VERSION}
