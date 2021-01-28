import { useState, useEffect } from 'react';
import { PageLayout } from '../common/PageLayout';
import { Input } from '../common/Input';
import { PasswordInput } from '../common/PasswordInput';
import { Button } from '../common/Button';
import { Spinner } from '../common/Spinner';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: #000;
  border-radius: 4px;
  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

export default function Login() {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              value={formFields.username}
              onChange={handleInputChange}
              name='username'
              type='text'
              placeholder='Username'
            />
            <PasswordInput
              value={formFields.password}
              onChange={handleInputChange}
              name='password'
            />
          </>
        )}
        <Button large type='submit' disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className='alt-text'>or</div>
            <Button secondary type='button'>
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
