# PROFILE

### Routes: 

- [PROFILE:auth](#route-PROFILE:auth)
- [PROFILE:forgot](#route-PROFILE:forgot)
- [PROFILE:profile](#route-PROFILE:profile)

### Route PROFILE:auth

#### PROFILE:auth-register

#### PROFILE:auth-login

Input:

```
{
  "login": {
    "type": "String",
    "required": true,
    "validate": "v => !!v.trim()"
  },
  "password": {
    "type": "String",
    "required": true,
    "validate": "v => !!v.trim()"
  }
}
```

#### PROFILE:auth-logout

### Route PROFILE:forgot

#### PROFILE:forgot-recovery

Input:

```
{
  "account": {
    "type": "String",
    "required": true,
    "validate": "v => !!v.trim()"
  }
}
```

#### PROFILE:forgot-confirm

Input:

```
{
  "userId": {
    "type": "Number",
    "required": true
  },
  "code": {
    "type": "Number",
    "required": true
  },
  "password": {
    "type": "String",
    "required": true
  }
}
```

### Route PROFILE:profile

#### PROFILE:profile-update

Input:

```
{
  "country": {
    "type": "String",
    "required": true
  },
  "name": {
    "type": "String",
    "required": true,
    "validate": "v => (typeof v === 'string'\n  ? v.length >= min && v.length <= max\n  : v >= min && v <= max)"
  },
  "phone": {
    "type": "String",
    "required": true,
    "validate": "v => (typeof v === 'string'\n  ? v.length >= min && v.length <= max\n  : v >= min && v <= max)",
    "error": {
      "validate": "Phone is invalid, it's length must be from 5 to 30 symbols"
    }
  },
  "password": {
    "type": "String",
    "required": true
  },
  "new_password": {
    "type": "String",
    "required": false,
    "validate": "v => (typeof v === 'string'\n  ? v.length >= min && v.length <= max\n  : v >= min && v <= max)",
    "error": {
      "validate": "New password is invalid, it's length must be from 6 to 18 symbols"
    }
  },
  "repeat_password": {
    "type": "String",
    "required": false,
    "validate": "(v, params) => !params.new_password || v === params.new_password",
    "error": {
      "validate": "Password confirmation not matches to a new password"
    }
  },
  "email": {
    "type": "String",
    "required": true,
    "validate": "e => /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test((`${e}`).toLowerCase())"
  },
  "birthday": "Number",
  "timezone": "Number"
}
```

