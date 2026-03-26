pipeline {
    agent{
        docker{
            image 'node:18-alpine'
        }
    }
    stages{
        stage('Checkout'){
            steps{
                git 'https://github.com/thuttat/Demo-docker.git'
            }
        }
        stage('Install'){
            steps{
                sh 'npm install'
            }
        }
        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
        stage('Deploy'){
            steps{
                sh 'echo"1"'
            }
        }
    }
    post{
        success{
            echo 'Pipeline successed'
        }
        failure{
            echo 'failed'
        }

    }
}