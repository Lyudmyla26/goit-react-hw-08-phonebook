import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, FormField, Input, StyledButton } from './LoginForm.styled';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
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
        <StyledButton type="submit">Log In</StyledButton>
      </Form>
    </>
  );
};
