import uuid from 'helpers/uuid'

const Input = ({ name = uuid(), value, label, update, ...props }) => (
  <div className='form-floating'>
    <input
      id={name}
      value={value}
      onChange={({ target: { value } }) => update(value)}
      className='form-control'
      {...props}
    />
    <label htmlFor={name}>{label}</label>
  </div>
  // <div class="form-floating mb-3">
  //   <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  //   <label for="floatingInput">Email address</label>
  // </div>
)

export default Input
