# brt_be

# Useful commands

```
npm install
```

```
npm start
```

Please remember to change mysql settings in config/keys.dev.js and dump the table.sql to create table in mysql, 

There are 2 Api endpoints there in this repo

1.  HOST/referrals   ----   its not needed as i am fetching from firebase
2.  HOST/referrals/create   --- this is called when referral is created, it saves data in mysql, generates ID and saves whole data in Firebase on the ID
