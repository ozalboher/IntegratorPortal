pipeline {
    agent any

    tools {
        // Reference the Docker installation configured in Jenkins
        dockerTool 'Docker'
    }

    environment {
        // DOCKER_USER = credentials('DOCKER_USER')
        DOCKER_TOKEN = credentials('DOCKER_TOKEN')
    }
    parameters {
        choice(choices: ['jenkins'], description: 'Branch name', name: 'BRANCH')
    }

    stages {
        stage('Clone Code Repository') {
            steps {
                git branch: "${params.BRANCH}", url: 'https://github.com/giladAlboher/IntegratorPortal.git'
            }
        }
        stage('Install Docker') {
            steps {
                sh 'curl -fsSL https://get.docker.com -o get-docker.sh'
                sh 'sh get-docker.sh'
                sh 'docker version'
                sh 'docker login -u giladalboher -p ${DOCKER_TOKEN}'
                sh 'docker build -t integratorportal .'
                sh 'docker push docker push giladalboher/integratorportal:latest'
            }
            post {
                always {
                    sh 'docker logout'
                }
            }
        }
     }
}