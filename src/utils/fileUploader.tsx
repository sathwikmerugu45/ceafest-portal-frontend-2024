import aws from "aws-sdk"

export const upload = async (key: string, file: File) => {
    const spacesEndpoint = new aws.Endpoint('festceaiitm.blr1.digitaloceanspaces.com')
    const s3 = new aws.S3({
        endpoint: spacesEndpoint,
        credentials: {
            accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID || 'DO00LFZNUQ8NJDEUNT3R',
            secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY || 'uNSAg9TRVPKygJYtnGht686LvACbS7tJxGAC6+u5hcY',
        }
    })
    await s3.upload({
        Bucket: 'eventPictures',
        Key: key,
        ContentType: file.type,
        Body: file,
        ACL: 'public-read',
    }).promise()
}

// uNSAg9TRVPKygJYtnGht686LvACbS7tJxGAC6+u5hcY