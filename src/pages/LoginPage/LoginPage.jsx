import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import {
  LoginPageSection,
  LoginPageContainer,
  LoginPageForm,
  LoginPageInput,
  LoginPageBtn,
  LoginFormWrapper,
  LoginPageTitle,
  LoginPageWrapper,
} from './LoginPage.styled';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'available latin-based alphabet, numeric character and _ . + -'
    )
    .min(5, 'must be at least 5 characters')
    .max(63, 'email length must be less than 63 characters')
    .required(),
  password: yup
    .string()
    .min(7, 'must be at least 7 characters')
    .max(12, 'password length must be less than 12 characters')
    .matches(/^(?!.*\s)/, ' whitespaces are forbidden.')
    .matches(/^(?=.*[0-9])/, 'must contain at least one numeric character')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      'must contain at least: one upper case letter, one lower case letter, only latin-based alphabet'
    )
    .required(),
});

export const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      dispatch(login({ email, password }));

      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <LoginPageSection>
      <LoginPageContainer>
        <LoginPageWrapper>
          <LoginPageTitle>Please Login</LoginPageTitle>
          <LoginFormWrapper>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              <LoginPageForm>
                <LoginPageInput
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                />
                <ErrorMessage name="email" />

                <LoginPageInput
                  type="password"
                  name="password"
                  placeholder="Please enter your password"
                />
                <ErrorMessage name="password" />

                <LoginPageBtn type="submit">Login</LoginPageBtn>
              </LoginPageForm>
            </Formik>
          </LoginFormWrapper>
        </LoginPageWrapper>
      </LoginPageContainer>
    </LoginPageSection>
  );
};
