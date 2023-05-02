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

export const loginDataInput = [
  {
    labelName: 'Username',
    labelFor: 'username',
    inputId: 'username',
    inputType: 'text',
    inputName: 'username',
    placeholder: 'imJhonDoe',
    required: true,
    regex: /User/
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

export const createKeyInput = [
  {
    labelName: 'Category',
    labelFor: 'category',
    inputId: 'category',
    inputType: null,
    inputName: 'category',
    placeholder: 'mails, finance ...',
    required: true,
    regex: /category/
  },
  {
    labelName: 'Service Name',
    labelFor: 'serviceName',
    inputId: 'serviceName',
    inputType: 'text',
    inputName: 'serviceName',
    placeholder: 'spotify account...',
    required: true,
    regex: /serviceName/
  },
  {
    labelName: 'Password',
    labelFor: 'password',
    inputId: 'password',
    inputType: 'password',
    inputName: 'password',
    placeholder: '*****',
    required: true,
    regex: /password/
  },
  {
    labelName: 'Description',
    labelFor: 'description',
    inputId: 'description',
    inputType: 'text',
    inputName: 'description',
    placeholder: 'saving spotify data to remember later',
    required: true,
    regex: /description/
  },
  {
    labelName: 'Pin (4 digits)',
    labelFor: 'pin',
    inputId: 'pin',
    inputType: 'checkbox',
    inputName: 'pin',
    placeholder: 'spotify account...',
    required: false,
    regex: /pin/
  }
]
