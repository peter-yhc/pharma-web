Deploying

aws configure
aws s3 mb pharma-web-demo
npm run build
aws s3 sync build s3://pharma-web-demo --acl public-read

Go to S3 and enable static website hosting using 'index.html' for both index and error document.

Go to Permissions > Block public access tab and set these to ON
- Block public access to buckets and objects granted through new access control lists (ACLs)
- Block public access to buckets and objects granted through any access control lists (ACLs)

In the bucket policy set:

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicReadAccess",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::pharma-web-demo/*"
        }
    ]
}