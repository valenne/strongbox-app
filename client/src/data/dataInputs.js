export const registerDataInput = [
  {
    labelName: 'First Name',
    labelFor: 'firstName',
    inputId: 'firstName',
    inputType: 'text',
    inputName: 'firstName',
    placeholder: 'Jhon',
    required: true
  },
  {
    labelName: 'Last Name',
    labelFor: 'lastName',
    inputId: 'lastName',
    inputType: 'text',
    inputName: 'lastName',
    placeholder: 'Doe',
    required: true
  },
  {
    labelName: 'Username',
    labelFor: 'username',
    inputId: 'username',
    inputType: 'text',
    inputName: 'username',
    placeholder: 'imJhonDoe',
    required: true
  },
  {
    labelName: 'Email',
    labelFor: 'email',
    inputId: 'email',
    inputType: 'email',
    inputName: 'email',
    placeholder: 'jhondoe@email.com',
    required: true
  },
  {
    labelName: 'Password',
    labelFor: 'password',
    inputId: 'password',
    inputType: 'password',
    inputName: 'password',
    placeholder: '**********',
    required: true
  },
  {
    labelName: 'Recovery Question?',
    labelFor: 'question',
    inputId: 'question',
    inputType: null,
    inputName: 'question',
    placeholder: null,
    options: 'ass',
    required: true
  },
  {
    labelName: 'Answer',
    labelFor: 'answer',
    inputId: 'answer',
    inputType: 'text',
    inputName: 'answer',
    placeholder: 'my response is ...',
    required: true
  }
]

export const LoginDataInput = [
  {
    labelName: 'Username',
    labelFor: 'username',
    inputId: 'username',
    inputType: 'text',
    inputName: 'username',
    placeholder: 'imJhonDoe',
    required: true,
    regex: /user/
  },
  {
    labelName: 'Password',
    labelFor: 'password',
    inputId: 'password',
    inputType: 'password',
    inputName: 'password',
    placeholder: '**********',
    required: true,
    regex: /password/
  }
]
