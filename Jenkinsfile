pipeline {
  agent any
  
stages {
        stage('prepare') {
          steps{
                    checkout scm
                    setupCommonPipelineEnvironment script:this
          }
       }
    }

 
}
