const {faker} = require('@faker-js/faker');

exports.computer = {
    name: 'randomComputer',
    displayName: 'Random Computer',
    description: 'Get random computer',
    args: [{
        displayName: 'Category',
        type: 'enum',
        options: [
            {displayName: 'Cron', value: 'cron'},
            {displayName: 'Directory Path', value: 'directoryPath'},
            {displayName: 'File Ext', value: 'fileExt'},
            {displayName: 'File Name', value: 'fileName'},
            {displayName: 'File Path', value: 'filePath'},
            {displayName: 'File Type', value: 'fileType'},
            {displayName: 'Mime Type', value: 'mimeType'},
            {displayName: 'Semver', value: 'semver'},
        ]
    }],
    run: async (context, key) => {
        switch (key) {
            case 'cron':
                return faker.system.cron();
            case 'directoryPath':
                return faker.system.directoryPath();
            case 'fileExt':
                return faker.system.fileExt();
            case 'fileName':
                return faker.system.fileName();
            case 'filePath':
                return faker.system.filePath();
            case 'fileType':
                return faker.system.fileType();
            case 'mimeType':
                return faker.system.mimeType();
            case 'semver':
                return faker.system.semver();
            default:
                return 'UNKNOWN-COMPUTER-OPTION';
        }
    }
}
