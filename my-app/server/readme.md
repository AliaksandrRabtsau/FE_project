# NodeJS task 
## API supports below methods:
```
get ‘/users’ - should return list of users
get ‘/users/:id’ - should return specific user by id
post ‘/users/add’ - should add in memory user
put ‘/users/:id’ - should update in memory specific user by id
delete ‘/users/:id’ - should remove from memory specific user by id
```
##  Main application object
```
User = {
    id: number;
    name: string;
    password: string;
    dateOfBirth: Date;
    dateOfFirstLogin: Date;
    dateOfNextNotification: Date;
    information: string;
}
```

### application dependencies
 - typescript
 - @types/express
 - express
 - body-parser
 - @types/body-parser
 - lodash

 ### for start you need:

 - yarn build
 - yarn start