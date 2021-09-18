## Mandatory assignments

**Assignment 4:**

Sync your changes to s3 and write down your s3 bucket url.

bucket url: `http://onlineapp.s3.amazonaws.com/index.html`

**Assignment 5:**

Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.

`Amazon S3 website endpoints do not support HTTPS or access points. If we want to use HTTPS, we can use Amazon CloudFront to serve a static website hosted on Amazon S3.`

service name: `Amazon CloudFront`

**Assignment 6:**

Figure out and write down the price per month of storing 51TB on S3.

`The standard price is $0.023 per GB, and 51TB = 51000GB: (51000GB * $0.023)`

Price: `$1173`

Total size of website: `Total Objects: 14 ,Total Size: 495.0 KiB `

**Assignment 7:**

Write down the main cost factors for S3

brief description: `When you move data from the internet to your S3 buckets, you don’t have to pay a penny for that. Also, moving data from an S3 bucket to any service is also free. But moving data from your S3 storage to the internet is a different scenario. You will be charged for that according to the amount of data you’re moving. AWS also charges you for moving data from one region to another..`

**Assignment 8:**

The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the command needed.

docs:` aws s3 cp file_name s3://my-bucket`

**Assignment 9:**
Write down a brief use case on when S3 could be used for a data engineering assignment:

use case: `I can summarize the aws s3 to these words(Durability and Accessibility ,Cost-Effective Storage, Versioning, Powerful Security. Aws solves the problem of large amounts of data storage, paying large amount of fees for data storage, grows up or down with you and gives you instant access to your most critical files,encrypted, secure file uploads and downloads)`

command:

## Optional assignments:

**Assignment 10:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description: `We have to identify where we can cut down on our Amazon S3 charges, we must first understand our current billing and usage for Amazon S3. then follow these steps:

- Clean up incomplete multipart uploads,
- Delete previous versions of objects that you don't need,
- Review your storage-class transition costs,
- Review your data retrieval costs,
- Track the requests made to your bucket,
- Check for changes in the size of your bucket,
- Review the cost of individual buckets,
- Understand how your usage relates to your charges.`

**Assignment 11:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `?`
