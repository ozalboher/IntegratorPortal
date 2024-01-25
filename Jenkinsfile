pipeline {
  agent any
  
  environment {
        DOCKERHUB_CREDENTIALS = credentials('DOCKERHUB_LOGIN')
  }
  
  tools {nodejs "nodejs"}

  parameters {
    gitParameter branchFilter: 'origin/(.*)', defaultValue: 'main', name: 'BRANCH', type: 'PT_BRANCH'
  }
  
  stages {
    stage('Clone Code Repository') {
      steps {
        git branch: "${params.BRANCH}", url: 'https://github.com/dkelim1/nodejs-app.git'
      }
    }
    
    stage('Install NPM application') {
      steps {
        sh 'npm install'
      }
    }
    
    
    stage('Download docker binary') {
        steps{
            script {
                    def dockerHome = tool 'docker'
                    env.PATH = "${dockerHome}/bin:${env.PATH}"           
            }
        }
    }    
    

    stage('Docker Build and Tag') {
        steps {
            script {
                docker.withServer('tcp://192.168.59.102:2376', 'DOCKERHOST_CRED'){
                sh 'docker build -t dkelim1/nodejs-app .' 
                }
            }
        }
    }
    
    stage('DockerHub Login') {
        steps {
            script {
                docker.withServer('tcp://192.168.59.102:2376', 'DOCKERHOST_CRED'){
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'     
                }
            }    
        }
    }

    stage('Push Image to DockerHub') {
        steps {
            script {
                docker.withServer('tcp://192.168.59.102:2376', 'DOCKERHOST_CRED'){
                sh 'docker push dkelim1/nodejs-app:latest' 
                }
            }    
        }
    }


    stage('Logout from DockerHub') {
        steps {
            script {
                docker.withServer('tcp://192.168.59.102:2376', 'DOCKERHOST_CRED'){
                sh 'docker logout' 
                }
            }    
        }
    }
    
  }    
}