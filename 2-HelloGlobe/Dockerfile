FROM openjdk:19-alpine
ADD Test.class Test.class     
RUN apk --update add openjdk9-jre                                                                    
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "Test"]             