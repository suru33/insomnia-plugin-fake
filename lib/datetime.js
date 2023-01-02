const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");

const defaultDateTimeFormat = "YYYY-MM-DDTHH:mm:ss.SSS";

const checkAndGetFormat = (fmt) => fmt.trim().length === 0 ? defaultDateTimeFormat : fmt;

exports.dateTimeWithInDays = {
  name: "randomDateTimeWithInDays",
  displayName: "Random Date Time With in Days",
  description: "Get random date time with in days",
  args: [
    {
      displayName: "Recent or Soon",
      type: "enum",
      options: [
        { displayName: "Recent", value: "recent" },
        { displayName: "Soon", value: "soon" }
      ]
    },
    {
      displayName: "Unix Timestamp",
      type: "boolean",
      defaultValue: false
    },
    {
      displayName: "Unix Timestamp Milliseconds",
      type: "boolean",
      defaultValue: false
    },
    {
      displayName: "Format(dayjs) when unix timestamp is not selected",
      description: "https://day.js.org/docs/en/display/format",
      type: "string",
      defaultValue: defaultDateTimeFormat
    },
    {
      displayName: "Number of days relative to today, min 1 and defaults to 7",
      type: "number",
      defaultValue: 7
    }
  ],
  run: async (context, key, unix, unixMilliseconds, format, days) => {
    days = days < 1 ? 7 : days;
    switch (key) {
      case "recent": {
        const recentDatetime = faker.date.recent(days);
        if (unixMilliseconds) {
          return `${dayjs(recentDatetime).valueOf()}`;
        }
        if(unix) {
          return `${dayjs(recentDatetime).unix()}`;
        }
        return dayjs(recentDatetime).format(checkAndGetFormat(format));
      }
      default: {
        const soonDatetime = faker.date.soon(days);
        if (unixMilliseconds) {
          return `${dayjs(soonDatetime).valueOf()}`;
        }
        if(unix) {
          return `${dayjs(soonDatetime).unix()}`;
        }
        return dayjs(soonDatetime).format(checkAndGetFormat(format));
      }
    }
  }
};

exports.dateTimeWithInYears = {
  name: "randomDateTimeWithInYears",
  displayName: "Random Date Time With in Years",
  description: "Get random date time with in years",
  args: [
    {
      displayName: "Past or future",
      type: "enum",
      options: [
        { displayName: "Past", value: "past" },
        { displayName: "Future", value: "future" }
      ]
    },
    {
      displayName: "Unix Timestamp",
      type: "boolean",
      defaultValue: false
    },
    {
      displayName: "Unix Timestamp Milliseconds",
      type: "boolean",
      defaultValue: false
    },
    {
      displayName: "Format(dayjs) when unix timestamp is not selected",
      description: "https://day.js.org/docs/en/display/format",
      type: "string",
      defaultValue: defaultDateTimeFormat
    },
    {
      displayName: "Number of years relative to today, min 1 and defaults to 1",
      type: "number",
      defaultValue: 1
    }
  ],
  run: async (context, key, unix, unixMilliseconds, format, years) => {
    years = years < 1 ? 1 : years;
    switch (key) {
      case "past": {
        const pastDateTime = faker.date.past(years);
        if (unixMilliseconds) {
          return `${dayjs(pastDateTime).valueOf()}`;
        }
        if(unix) {
          return `${dayjs(pastDateTime).unix()}`;
        }
        return dayjs(pastDateTime).format(checkAndGetFormat(format));
      }
      default: {
        const futureDatetime = faker.date.future(years);
        if (unixMilliseconds) {
          return `${dayjs(futureDatetime).valueOf()}`;
        }
        if(unix) {
          return `${dayjs(futureDatetime).unix()}`;
        }
        return dayjs(futureDatetime).format(checkAndGetFormat(format));
      }
    }
  }
};

exports.dateTimeNow = {
  name: "dateTimeNow",
  displayName: "Date Time Now",
  description: "Get current date time",
  args: [
    {
      displayName: "Unix Timestamp",
      type: "boolean",
      defaultValue: false
    },
    {
      displayName: "Unix Timestamp Milliseconds",
      type: "boolean",
      defaultValue: false
    },
    {
      displayName: "Format(dayjs) when unix timestamp is not selected",
      description: "https://day.js.org/docs/en/display/format",
      type: "string",
      defaultValue: defaultDateTimeFormat
    }
  ],
  run: async (context, unix, unixMilliseconds, format) => {
    if(unixMilliseconds) {
      return `${dayjs().valueOf()}`;
    }
    if(unix) {
      return `${dayjs().unix()}`;
    }
    return dayjs().format(checkAndGetFormat(format));
  }
};
