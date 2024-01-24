pipeline {
    agent any

    tools {
        // Reference the Docker installation configured in Jenkins
        dockerTool 'DockerInstallation'
    }

    environment {
        // DOCKER_USER = credentials('DOCKER_USER')
        DOCKER_TOKEN = credentials('DOCKER_TOKEN')
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_TOKEN') {
                        def imageName = "giladalboher/integratorportal:v1.0.${BUILD_ID}"
                        docker.build(imageName, '.')
                        docker.withRegistry('', '') {
                            docker.image(imageName).push()
                        }
                        sh "sed -i \"s|image: giladalboher/integratorportal:v1.0.*|image: $imageName|\" configs/intergratorportal.yaml"
                    }
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

        // Add additional stages for testing, waiting for pods, etc. if needed

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
