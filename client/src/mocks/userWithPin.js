const withoutPin = [
  {
    category: 'mail',
    serviceName: 'google',
    savePassword: '12312',
    description: 'probando test descripcion',
    createAt: '4/6/2023, 5:26:09 PM',
    hasPin: false,
    pin: null,
    updateAt: '4/6/2023, 5:26:38 PM'
  },
  {
    category: 'fitness',
    serviceName: 'eatWell',
    savePassword: 'eat123',
    description: 'description for eatwell app test',
    createAt: '4/6/2023, 5:26:09 PM',
    hasPin: false,
    pin: null,
    updateAt: '4/6/2023, 5:26:38 PM'
  },

  {
    category: 'entertainment',
    serviceName: 'twitch',
    savePassword: 'twitch111',
    description: 'description for twitch app test',
    createAt: '4/6/2023, 5:26:09 PM',
    hasPin: false,
    pin: null,
    updateAt: '4/6/2023, 5:26:38 PM'
  }
]

const withPin = [
  {
    category: 'finance',
    serviceName: 'banco estado',
    savePassword: 'secret',
    description: 'test de banco',
    createAt: '4/10/2023, 3:15:00 PM',
    hasPin: true,
    pin: '1234',
    updateAt: '4/10/2023, 3:16:00 PM'
  },
  {
    category: 'fitness',
    serviceName: 'eatWell',
    savePassword: 'eat123',
    description: 'description for eatwell app test',
    createAt: '4/6/2023, 5:26:09 PM',
    hasPin: true,
    pin: '3321',
    updateAt: '4/6/2023, 5:26:38 PM'
  },
  {
    category: 'entertainment',
    serviceName: 'twitch',
    savePassword: 'twitch111',
    description: 'description for twitch app test',
    createAt: '4/6/2023, 5:26:09 PM',
    hasPin: true,
    pin: '2211',
    updateAt: '4/6/2023, 5:26:38 PM'
  }
]

export default { withoutPin, withPin }
