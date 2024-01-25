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
                    sh "${dockerPath}/docker build -t giladalboher/integratorportal:v1.0.${BUILD_ID} ."
                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_TOKEN') {
                        docker.withTool('Docker') {
                            docker.image("giladalboher/integratorportal:v1.0.${BUILD_ID}").push()
                        }
                    }
                    sh "sed -i \"s|image: giladalboher/integratorportal:v1.0.*|image: giladalboher/integratorportal:v1.0.${BUILD_ID}|\" configs/intergratorportal.yaml"
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
