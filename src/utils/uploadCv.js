import AWS from "aws-sdk";

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:8a7b86d8-5ec6-4621-9a34-4e95186d7018',
});

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {
        Bucket: 'makersden.io-cvs'
    }
});

const uploadCv = (file) => new Promise((resolve, reject) =>
    s3.upload({
        Key: file.name,
        Body: file,
    }, function (err, data) {
        console.log({ err, data });
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    })
);


export default uploadCv;