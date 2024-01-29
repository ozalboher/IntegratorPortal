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

        stage('Download Docker Binary') {
            steps {
                script {
                    def dockerPath = tool 'Docker'
                    env.PATH = "${dockerPath}/bin:${env.PATH}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerPath = tool 'Docker'
                    sh "docker build -t giladalboher/integratorportal:v1.0.16 ."
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                script {
                    dir('configs') {
                        sh 'kubectl create namespace integratorportal'
                        sh 'kubectl apply -f intergratorportal.yaml'
                    }
                }
            }
        }

        stage('Commit & Push Changes') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'GITHUB_CREDENTIALS_ID', passwordVariable: 'GITHUB_TOKEN', usernameVariable: 'GITHUB_USER')]) {
                        sh 'git add -A'
                        sh 'git commit -m "Jenkins Pipeline: Build #${BUILD_ID}"'
                        sh 'git push origin master'
                    }
                }
            }
        }
    }
}
