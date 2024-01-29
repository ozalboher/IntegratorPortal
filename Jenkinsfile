pipeline {
    environment {
        registry = "giladalboher/integratorportal"
        registryCredential = 'DOCKER_TOKEN'
        dockerImage = ''
    }
    agent any

    tools {
        // This will auto-install Docker on the agent if it's not already installed
        dockerTool 'Docker'
    }
    stages {
        stage('cheackout') {
            steps{
                git branch: 'jenkins', url: 'https://github.com/giladAlboher/IntegratorPortal.git' 
            }
        }

        stage('Building our image') {
            steps{
                script {
                    def dockerPath = tool 'Docker'
                    sh "${dockerPath}/bin/docker build -t ${env.IMAGE_TAG} ."
                }
            }
        }
        stage('Deploy our image') {
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Cleaning up') {
            steps{
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }
}