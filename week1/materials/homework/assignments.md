#### Example asignment

command: `lambda list-functions`

doc: `https://docs.aws.amazon.com/cli/latest/reference/lambda/list-functions.html`

## Mandatory assignments

**Assignment 1:**

command: `aws s3 ls`

doc: `https://docs.aws.amazon.com/cli/latest/reference/s3/ls.html`

number of buckets: `11`

**Assignment 2:**
filename: `christopher-was-here.json`

## Optional Assignments

**Assignment 3:**

command: `aws s3 presign s3://hyf-products-bucket/christopher-was-here.json --expires-in 3600 --region us-east-2`

url: `https://hyf-products-bucket.s3.amazonaws.com/christopher-was-here.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2F346X675XN7OAVQ%2F20210905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210905T134608Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=553348ef87ed2081fe2bc6ee9588940743073af6a8c969b2c6d0d19ae48b34d`

**Assignment 4:**

command: `aws s3 ls s3://hyf-products-bucket --human-readable --summarize`

Total Objects: 7
Total Size: 1.1 GiB
