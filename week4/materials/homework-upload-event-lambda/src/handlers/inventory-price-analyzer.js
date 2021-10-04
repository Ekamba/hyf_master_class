const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.s3PriceAnalyzer = async (event) => {
  const getObjectRequests = event.Records.map((record) => {
    const params = {
      Bucket: record.s3.bucket.name,
      Key: record.s3.object.key,
    };

    return s3
      .getObject(params)
      .promise()
      .then((data) => {
        // implement code here
        let items = data.Body.toString().split("\n");

        const priceUnderTen = items
          .map((item) => item.split(",")[2])
          .filter((item) => item < 10);
        console.log({ priceUnderTen: priceUnderTen });

        const maximumPrice = Math.max.apply(null, priceUnderTen);
        const minimumPrice = Math.min.apply(null, priceUnderTen);
        console.log({ maximumPrice: maximumPrice, minimumPrice: minimumPrice });
      })
      .catch((err) => {
        console.error("Error calling S3 getObject:", err);
        return Promise.reject(err);
      });
  });

  return Promise.all(getObjectRequests).then(() => {
    console.debug("Complete!");
  });
};
