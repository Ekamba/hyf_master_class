/**
 * A Lambda function that logs the payload received from a CloudWatch scheduled event.
 */
// exports.scheduledEventLoggerHandler = async (event, context) => {
// All log statements are written to CloudWatch by default. For more information, see
// https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
// console.info(JSON.stringify(event));
// }

const { CloudWatchClient } = require("@aws-sdk/client-cloudwatch");
const { ListMetricsCommand } = require("@aws-sdk/client-cloudwatch");

/**
 * A Lambda function that logs the payload received from a CloudWatch scheduled event.
 */
exports.scheduledEventLoggerHandler = async (event, context) => {
  // All log statements are written to CloudWatch by default. For more information, see
  // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
  console.info(JSON.stringify(event));

  const cloudwatchClient = new CloudWatchClient({ region: "us-east-1" });

  var params = {
    Namespace: "AWS/Usage",
  };

  try {
    const data = await cloudwatchClient.send(new ListMetricsCommand(params));
    console.log("Success. Metrics:", JSON.stringify(data.Metrics));
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
