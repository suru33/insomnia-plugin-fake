const {faker} = require('@faker-js/faker');

exports.music = {
    name: 'randomMusic',
    displayName: 'Random Music',
    description: 'Get random genre or song name',
    args: [{
        displayName: 'Category',
        type: 'enum',
        options: [
            {displayName: 'Genre', value: 'genre'},
            {displayName: 'Song Name', value: 'songName'},
        ]
    }],
    run: async (context, key) => {
        switch (key) {
            case 'genre':
                return faker.music.genre();
            case 'songName':
                return faker.music.songName();
            default:
                return 'UNKNOWN-MUSIC-CATEGORY';
        }
    }
}