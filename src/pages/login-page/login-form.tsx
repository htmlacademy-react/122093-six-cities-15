import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/thunks/auth';
import { getToken } from '../../services/token';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

function LoginForm () {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction(form));
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" onChange={handleInputChange} value={form.email} type="email" name="email" placeholder="Email" required/>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input pattern="(?=.*\d)(?=.*[a-zA-Z]).*" className="login__input form__input" onChange={handleInputChange} value={form.password} type="password" name="password" placeholder="Password" required/>
      </div>
      <button onClick={() => getToken() && navigate(AppRoute.Root)} className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

export default LoginForm;
