const faker = require('faker');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const rand = (list) => list[Math.floor((Math.random() * list.length))];

const padLeft = (num, targetLength) => num.toString().padStart(targetLength, 0);

const dateFmt = (o, d) => o.getUTCFullYear() + d
  + padLeft((o.getUTCMonth() + 1), 2) + d
  + padLeft(o.getUTCDate(), 2);

const dateTimeFmt = (o) => o.getUTCFullYear() + '-'
  + padLeft((o.getUTCMonth() + 1), 2) + '-'
  + padLeft(o.getUTCDate(), 2) + 'T'
  + padLeft(o.getUTCHours(), 2) + ':'
  + padLeft(o.getUTCMinutes(), 2) + ':'
  + padLeft(o.getUTCSeconds(), 2) + '.'
  + padLeft(o.getUTCMilliseconds(), 3) + 'Z';


const phoneNumberLocal = () => rand(digits) + rand(digits) + rand(digits)
  + '-' + rand(digits) + rand(digits) + rand(digits)
  + '-' + rand(digits) + rand(digits) + rand(digits);

const phoneNumber = () => '+' + rand(digits) + rand(digits) + ' ' + phoneNumberLocal();

const cleanStr = (s) => JSON.stringify(s).slice(1, -1);

module.exports.templateTags = [
  {
    name: 'fake',
    displayName: 'fake',
    description: 'Fake data for insomnia using faker.js',
    args: [
      {
        displayName: 'fakeProp',
        type: 'enum',
        options: [
          // address
          { displayName: 'Zip Code', value: 'address.zipCode' },
          { displayName: 'City', value: 'address.city' },
          { displayName: 'City Name', value: 'address.cityName' },
          { displayName: 'Street Name', value: 'address.streetName' },
          { displayName: 'Street Address', value: 'address.streetAddress' },
          { displayName: 'Secondary Address', value: 'address.secondaryAddress' },
          { displayName: 'County', value: 'address.county' },
          { displayName: 'Country Name', value: 'address.country' }, //
          { displayName: 'Country Code', value: 'address.countryCode' },
          { displayName: 'State', value: 'address.state' },
          { displayName: 'Latitude', value: 'address.latitude' },
          { displayName: 'Longitude', value: 'address.longitude' },
          { displayName: 'Time Zone', value: 'address.timeZone' },

          // commerce
          { displayName: 'Department', value: 'commerce.department' },
          { displayName: 'Product Name', value: 'commerce.productName' },
          { displayName: 'Price', value: 'commerce.price' },
          { displayName: 'Adjective', value: 'commerce.productAdjective' },
          { displayName: 'Product Material', value: 'commerce.productMaterial' },
          { displayName: 'Product', value: 'commerce.product' },
          { displayName: 'Product Description', value: 'commerce.productDescription' },

          // color
          { displayName: 'Color Code', value: 'internet.color' },
          { displayName: 'Color Name', value: 'commerce.color' },

          // company
          { displayName: 'Company Name', value: 'company.companyName' },

          // datatype
          { displayName: 'Int', value: 'datatype.number' },
          { displayName: 'Float', value: 'datatype.float' },
          { displayName: 'String', value: 'datatype.string' },
          { displayName: 'UUID', value: 'datatype.uuid' },
          { displayName: 'Boolean', value: 'datatype.boolean' },
          { displayName: 'Hexa Decimal', value: 'datatype.hexaDecimal' },

          // date
          { displayName: 'Month', value: 'date.month' }, // different name
          { displayName: 'Weekday', value: 'date.weekday' },
          // custom
          // time
          { displayName: 'Unix Time', value: 'date.unixTime' },
          { displayName: 'Unix Time (now)', value: 'date.unixTime.now' },
          { displayName: 'Time (milliseconds)', value: 'date.timeMill' },
          { displayName: 'Time (now milliseconds)', value: 'date.timeMill.now' },
          // date
          { displayName: 'Date (yyyy-mm-dd)', value: 'date.onlyDate.f1' },
          { displayName: 'Date (yyyy/mm/dd)', value: 'date.onlyDate.f2' },
          { displayName: 'Date today(yyyy-mm-dd)', value: 'date.onlyDate.f1.today' },
          { displayName: 'Date today(yyyy/mm/dd)', value: 'date.onlyDate.f2.today' },
          // dateTime
          { displayName: 'DateTime ISO-8601', value: 'date.dateTime.iso' },
          { displayName: 'DateTime ISO-8601 (now)', value: 'date.dateTime.iso.now' },
          // code
          { displayName: 'Month Code', value: 'date.month.code' },
          { displayName: 'Weekday Code', value: 'date.weekday.code' },


          // finance
          { displayName: 'Bank Account Number', value: 'finance.account' },
          { displayName: 'Bank Account Name', value: 'finance.accountName' },
          { displayName: 'Bank Routing Number', value: 'finance.routingNumber' },
          { displayName: 'Bank Transaction Amount', value: 'finance.amount' },
          { displayName: 'Bank Transaction Type', value: 'finance.transactionType' },
          { displayName: 'Currency Code', value: 'finance.currencyCode' },
          { displayName: 'Currency Name', value: 'finance.currencyName' },
          { displayName: 'Currency Symbol', value: 'finance.currencySymbol' },
          { displayName: 'Bitcoin Address', value: 'finance.bitcoinAddress' },
          { displayName: 'Litecoin Address', value: 'finance.litecoinAddress' },
          { displayName: 'Credit Card Number', value: 'finance.creditCardNumber' },
          { displayName: 'Credit Card CVV', value: 'finance.creditCardCVV' },
          { displayName: 'Ethereum Address', value: 'finance.ethereumAddress' },
          { displayName: 'IBAN', value: 'finance.iban' },
          { displayName: 'BIC', value: 'finance.bic' },
          { displayName: 'Bank Transaction Desc', value: 'finance.transactionDescription' },

          // image (name changed)
          { displayName: 'Random Image URL', value: 'image.image' },
          { displayName: 'Avatar URL', value: 'image.avatar' },
          { displayName: 'Image URL', value: 'image.imageUrl' },

          // internet
          { displayName: 'Email', value: 'internet.email' },
          { displayName: 'Example Email', value: 'internet.exampleEmail' },
          { displayName: 'User Name', value: 'internet.userName' },
          { displayName: 'Protocol', value: 'internet.protocol' },
          { displayName: 'HTTP Method', value: 'internet.httpMethod' },
          { displayName: 'URL', value: 'internet.url' },
          { displayName: 'Domain Name', value: 'internet.domainName' },
          { displayName: 'Domain Suffix', value: 'internet.domainSuffix' },
          { displayName: 'Domain Word', value: 'internet.domainWord' },
          { displayName: 'IP', value: 'internet.ip' },
          { displayName: 'IPv6', value: 'internet.ipv6' },
          { displayName: 'Application Port', value: 'internet.port' },
          { displayName: 'User Agent', value: 'internet.userAgent' },
          { displayName: 'Mac Address', value: 'internet.mac' },
          { displayName: 'Password', value: 'internet.password' },

          // lorem
          { displayName: 'Lorem Word', value: 'lorem.word' },
          { displayName: 'Lorem Words', value: 'lorem.words' },
          { displayName: 'Lorem Sentence', value: 'lorem.sentence' },
          { displayName: 'Lorem Slug', value: 'lorem.slug' },
          { displayName: 'Lorem Sentences', value: 'lorem.sentences' },
          { displayName: 'Lorem Paragraph', value: 'lorem.paragraph' },
          { displayName: 'Lorem Paragraphs', value: 'lorem.paragraphs' },
          { displayName: 'Lorem Text', value: 'lorem.text' },
          { displayName: 'Lorem Lines', value: 'lorem.lines' },

          // name
          { displayName: 'First Name', value: 'name.firstName' },
          { displayName: 'Last Name', value: 'name.lastName' },
          { displayName: 'Middle Name', value: 'name.middleName' },
          { displayName: 'Full Name', value: 'name.findName' },
          { displayName: 'Job Title', value: 'name.jobTitle' },
          { displayName: 'Gender', value: 'name.gender' },
          { displayName: 'Prefix', value: 'name.prefix' },
          { displayName: 'Suffix', value: 'name.suffix' },
          { displayName: 'Title', value: 'name.title' },
          { displayName: 'Job Desc', value: 'name.jobDescriptor' },
          { displayName: 'Job Area', value: 'name.jobArea' },
          { displayName: 'Job Type', value: 'name.jobType' },

          // phone
          { displayName: 'Phone Number', value: 'phone.phoneNumber' },
          { displayName: 'Phone Number Local', value: 'phone.phoneNumber.local' },

          // system
          { displayName: 'File Name', value: 'system.commonFileName' },
          { displayName: 'Mime Type', value: 'system.mimeType' },
          { displayName: 'File Type', value: 'system.commonFileType' },
          { displayName: 'File Ext', value: 'system.commonFileExt' },
          { displayName: 'File Type', value: 'system.fileType' },
          { displayName: 'Directory Path', value: 'system.directoryPath' },
          { displayName: 'File Path', value: 'system.filePath' },
          { displayName: 'Semver', value: 'system.semver' },


          // vehicle
          { displayName: 'Car Name', value: 'vehicle.vehicle' },
          { displayName: 'Car Color', value: 'vehicle.color' },
          { displayName: 'Car Manufacturer', value: 'vehicle.manufacturer' },
          { displayName: 'Car Model', value: 'vehicle.model' },
          { displayName: 'Car Type', value: 'vehicle.type' },
          { displayName: 'Car Fuel', value: 'vehicle.fuel' },
          { displayName: 'Car VIN', value: 'vehicle.vin' }

        ],
      },
    ],
    run(context, fakeProp = 'zipCode') {
      switch (fakeProp) {
        // address
        case 'address.zipCode': return faker.address.zipCode();
        case 'address.city': return faker.address.city();
        case 'address.cityName': return faker.address.cityName();
        case 'address.streetName': return faker.address.streetName();
        case 'address.streetAddress': return faker.address.streetAddress();
        case 'address.secondaryAddress': return faker.address.secondaryAddress();
        case 'address.county': return faker.address.county();
        case 'address.country': return faker.address.country();
        case 'address.countryCode': return faker.address.countryCode();
        case 'address.state': return faker.address.state();
        case 'address.latitude': return faker.address.latitude();
        case 'address.longitude': return faker.address.longitude();
        case 'address.timeZone': return faker.address.timeZone();

        // color
        case 'internet.color': return faker.internet.color();
        case 'commerce.color': return faker.commerce.color();

        // commerce
        case 'commerce.department': return faker.commerce.department();
        case 'commerce.productName': return faker.commerce.productName();
        case 'commerce.price': return faker.commerce.price();
        case 'commerce.productAdjective': return faker.commerce.productAdjective();
        case 'commerce.productMaterial': return faker.commerce.productMaterial();
        case 'commerce.product': return faker.commerce.product();
        case 'commerce.productDescription': return faker.commerce.productDescription();

        // company
        case 'company.companyName': return faker.company.companyName();

        // datatype
        case 'datatype.number': return faker.datatype.number();
        case 'datatype.float': return faker.datatype.float();
        case 'datatype.string': return cleanStr(faker.datatype.string());
        case 'datatype.uuid': return faker.datatype.uuid();
        case 'datatype.boolean': return faker.datatype.boolean();
        case 'datatype.hexaDecimal': return faker.datatype.hexaDecimal();

        // date
        case 'date.month': return faker.date.month();
        case 'date.weekday': return faker.date.weekday();
        // time
        case 'date.unixTime': return Math.floor(faker.datatype.datetime().getTime() / 1000);
        case 'date.unixTime.now': return Math.floor(new Date().getTime() / 1000);
        case 'date.timeMill': return faker.datatype.datetime().getTime();
        case 'date.timeMill.now': return new Date().getTime();
        // date
        case 'date.onlyDate.f1': return dateFmt(faker.datatype.datetime(), '-');
        case 'date.onlyDate.f2': return dateFmt(faker.datatype.datetime(), '/');
        case 'date.onlyDate.f1.today': return dateFmt(new Date(), '-');
        case 'date.onlyDate.f2.today': return dateFmt(new Date(), '/');
        // dateTime
        case 'date.dateTime.iso': return dateTimeFmt(faker.datatype.datetime());
        case 'date.dateTime.iso.now': return dateTimeFmt(new Date());
        // code
        case 'date.month.code': return faker.date.month().substring(0, 3);
        case 'date.weekday.code': return faker.date.weekday().substring(0, 3);

        // finance
        case 'finance.account': return faker.finance.account();
        case 'finance.accountName': return faker.finance.accountName();
        case 'finance.routingNumber': return faker.finance.routingNumber();
        case 'finance.amount': return faker.finance.amount();
        case 'finance.transactionType': return faker.finance.transactionType();
        case 'finance.currencyCode': return faker.finance.currencyCode();
        case 'finance.currencyName': return faker.finance.currencyName();
        case 'finance.currencySymbol': return faker.finance.currencySymbol();
        case 'finance.bitcoinAddress': return faker.finance.bitcoinAddress();
        case 'finance.litecoinAddress': return faker.finance.litecoinAddress();
        case 'finance.creditCardNumber': return faker.finance.creditCardNumber();
        case 'finance.creditCardCVV': return faker.finance.creditCardCVV();
        case 'finance.ethereumAddress': return faker.finance.ethereumAddress();
        case 'finance.iban': return faker.finance.iban();
        case 'finance.bic': return faker.finance.bic();
        case 'finance.transactionDescription': return faker.finance.transactionDescription();

        // image
        case 'image.image': return faker.image.image();
        case 'image.avatar': return faker.image.avatar();
        case 'image.imageUrl': return faker.image.imageUrl();

        // internet
        case 'internet.avatar': return faker.internet.avatar();
        case 'internet.email': return faker.internet.email().toLowerCase();
        case 'internet.exampleEmail': return faker.internet.exampleEmail().toLowerCase();
        case 'internet.userName': return faker.internet.userName().toLowerCase();
        case 'internet.protocol': return faker.internet.protocol();
        case 'internet.httpMethod': return faker.internet.httpMethod();
        case 'internet.url': return faker.internet.url();
        case 'internet.domainName': return faker.internet.domainName();
        case 'internet.domainSuffix': return faker.internet.domainSuffix();
        case 'internet.domainWord': return faker.internet.domainWord();
        case 'internet.ip': return faker.internet.ip();
        case 'internet.ipv6': return faker.internet.ipv6();
        case 'internet.port': return faker.internet.port();
        case 'internet.userAgent': return faker.internet.userAgent();
        case 'internet.mac': return faker.internet.mac();
        case 'internet.password': return faker.internet.password();

        // lorem
        case 'lorem.word': return cleanStr(faker.lorem.word());
        case 'lorem.words': return cleanStr(faker.lorem.words());
        case 'lorem.sentence': return cleanStr(faker.lorem.sentence());
        case 'lorem.slug': return cleanStr(faker.lorem.slug());
        case 'lorem.sentences': return cleanStr(faker.lorem.sentences());
        case 'lorem.paragraph': return cleanStr(faker.lorem.paragraph());
        case 'lorem.paragraphs': return cleanStr(faker.lorem.paragraphs());
        case 'lorem.text': return cleanStr(faker.lorem.text());
        case 'lorem.lines': return cleanStr(faker.lorem.lines());

        //name
        case 'name.firstName': return faker.name.firstName();
        case 'name.lastName': return faker.name.lastName();
        case 'name.middleName': return faker.name.middleName();
        case 'name.findName': return faker.name.findName();
        case 'name.jobTitle': return faker.name.jobTitle();
        case 'name.gender': return faker.name.gender();
        case 'name.prefix': return faker.name.prefix();
        case 'name.suffix': return faker.name.suffix();
        case 'name.title': return faker.name.title();
        case 'name.jobDescriptor': return faker.name.jobDescriptor();
        case 'name.jobArea': return faker.name.jobArea();
        case 'name.jobType': return faker.name.jobType();

        // phone
        case 'phone.phoneNumber': return phoneNumber();
        case 'phone.phoneNumber.local': return phoneNumberLocal();

        // system
        case 'system.commonFileName': return faker.system.commonFileName();
        case 'system.mimeType': return faker.system.mimeType();
        case 'system.commonFileType': return faker.system.commonFileType();
        case 'system.commonFileExt': return faker.system.commonFileExt();
        case 'system.fileType': return faker.system.fileType();
        case 'system.directoryPath': return faker.system.directoryPath();
        case 'system.filePath': return faker.system.filePath();
        case 'system.semver': return faker.system.semver();

        // vehicle
        case 'vehicle.vehicle': return faker.vehicle.vehicle();
        case 'vehicle.color': return faker.vehicle.color();
        case 'vehicle.manufacturer': return faker.vehicle.manufacturer();
        case 'vehicle.model': return faker.vehicle.model();
        case 'vehicle.type': return faker.vehicle.type();
        case 'vehicle.fuel': return faker.vehicle.fuel();
        case 'vehicle.vin': return faker.vehicle.vin();

        default: throw new Error(`Invalid "${fakeProp}"`);
      }
    },
  },
];