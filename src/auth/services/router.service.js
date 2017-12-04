import config from '../../config';

//Passport's
if ("local" in config.oAuth && config.oAuth.local.enabled)
  require('../passports/local.passport');

if ("github" in config.oAuth && config.oAuth.github.enabled)
  require('../passports/github.passport');

if ("twitter" in config.oAuth && config.oAuth.twitter.enabled)
  require('../passports/twitter.passport');

if ("facebook" in config.oAuth && config.oAuth.facebook.enabled)
  require('../passports/facebook.passport');

if ("google" in config.oAuth && config.oAuth.google.enabled)
  require('../passports/google.passport');

if ("bitbucket" in config.oAuth && config.oAuth.bitbucket.enabled)
  require('../passports/bitbucket.passport');
