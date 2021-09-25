// For part II:
const { CloudWatchClient } = require("@aws-sdk/client-cloudwatch");
const { ListMetricsCommand } = require("@aws-sdk/client-cloudwatch");

exports.scheduledEventLoggerHandler = async () => {
  // For part I

  let saneString = "Hello, HYF!";
  let weirdString = [...saneString]
    .map((char) => {
      return nextChar(char);
    })
    .join("");

  // return saneString;

  // For part II:
  const cloudwatchClient = new CloudWatchClient({ region: "us-east-1" });

  let startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 3);

  const params = {
    StartTime: startDate,
    EndTime: new Date(),
    MetricDataQueries: [
      {
        Id: "counts",
        MetricStat: {
          Metric: {
            Dimensions: [
              {
                Name: "ApiName",
                Value: "Latency",
              },
            ],
            MetricName: "count",
            Namespace: "AWS/ApiGateway",
          },
          Period: 2592000,
          Stat: "Sum",
        },
      },
    ],
  };

  const results = await cloudwatchClient.send(new ListMetricsCommand(params));
  console.log("Success. Metrics:", JSON.stringify(results.Metrics.ApiGateway));

  return results;
};

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
