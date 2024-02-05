pipeline {
    agent any

    environment {
        DOCKER_USER = credentials('DOCKER_USER')
        DOCKER_TOKEN = credentials('DOCKER_TOKEN')
        GITHUB_RUN_ID = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t giladalboher/integratorportal:v1.0.$GITHUB_RUN_ID .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'echo $DOCKER_TOKEN | docker login -u $DOCKER_USER --password-stdin'
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push giladalboher/integratorportal:v1.0.$GITHUB_RUN_ID'
            }
        }
    }
}