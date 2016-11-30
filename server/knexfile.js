module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/redditRefactor'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    },
};
