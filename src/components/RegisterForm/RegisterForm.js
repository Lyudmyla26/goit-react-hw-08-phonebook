import {
  Form,
  FormField,
  Input,
  StyledButton,
} from 'components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="on" onSubmit={handleSubmit}>
      <FormField>
        User-name
        <Input
          type="text"
          name="name"
          required
          placeholder="NAME"
          minLength={3}
        />
      </FormField>
      <FormField>
        Email
        <Input
          type="email"
          name="email"
          required
          placeholder="l.stesko@ukr.net"
        />
      </FormField>
      <FormField>
        Password
        <Input
          type="password"
          name="password"
          minLength={6}
          required
          placeholder="password"
        />
      </FormField>
      <StyledButton type="submit">Register</StyledButton>
    </Form>
  );
};
