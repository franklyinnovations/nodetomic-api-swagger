// development || production
const mode = 'development';
// Project Name:  mongodb://localhost:27017/{NAME}-{mode}
const name = 'your-app-name';
import path from 'path';

export default {
  mode : mode,
  name : name,
  root : path.normalize(`${__dirname}/../..`),
  base : path.normalize(`${__dirname}/..`),
  client : `${path.normalize(`${__dirname}/../..`)}/client`,
  server : {
    ip: 'localhost',
    port: 8000
  },
  secret : `your_secret_key`,
  // roles: if a user has multiple roles, will take the time of the greater role
  roles : [
    {
      rol: 'user',
      time: 120 // minutes
    }, {
      rol: 'admin',
      time: 'infinite'
    }
  ],
  redis : {
    token: {
      // uri: redis://user:password@host:port/db-number?db=db-number&password=bar&option=value
      uri: 'redis://127.0.0.1:6379/0',
      // if you want multiples logins or only one device in same time
      multiple: false
    }
  },
  database : {
    mongo: {
      db: {
        // uri: mongodb://username:password@host:port/database?options
        uri: `mongodb://localhost:27017/${name}-${mode}`,
        options: {
          useMongoClient: false
        },
        // plant: once - alway - never
        seeds: [
          {
            path: '/api/seeds/user',
            plant: 'once'
          }, {
            path: '/api/seeds/hello',
            plant: 'once'
          }
        ]
      }
    }
  },
  path : {
    // paths 404
    disabled: '/:url(api|auth|assets|lib)/*'
  },
  email : {
    host: 'hostexample',
    secure: true,
    port: 465,
    auth: {
      user: 'example@gmail.com',
      pass: 'examplePassword'
    }
  },
  swagger : {
    enabled: true,
    info: {
      version: 'v1.0',
      title: name,
      description: `RESTful API ${name}`,
      "contact": {
        "name": "Developer",
        "url": "http://www.example.com",
        "email": "example@example.com"
      },
      "license": {
        "name": "MIT",
        "url": "https://github.com/kevoj/nodetomic-api/blob/master/LICENSE"
      }
    }
  },
  // session: defaultStore, mongoStore, redisStore
  // note: Required for Twitter oAuth
  session : 'defaultStore',
  oAuth : {
    local: {
      enabled: true
    },
    facebook: {
      enabled: false,
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/facebook/callback'
    },
    twitter: {
      enabled: false,
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/twitter/callback'
    },
    google: {
      enabled: false,
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/google/callback'
    },
    github: {
      enabled: true,
      clientID: '52be92c9a41f77a959eb',
      clientSecret: '76c9bb03c689d098506822fa80dba372a1fe29c8',
      callbackURL: '/auth/github/callback'
    },
    bitbucket: {
      enabled: false,
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/bitbucket/callback'
    }
  },
  // DEV
  livereload : { // livereload
    enabled: false,
    ip: 'localhost',
    port: 35729
  },
  log : true // Log request in console?
};
