import { useContext } from 'react';
import Head from 'next/head';
import AuthContext from '@/context/auth';
import { useInput } from '@/hooks';
import { Button, Input } from '@/components/UI';
import { auth } from '@/api/auth';

const Register = () => {
  const { isUserSignedIn } = useContext(AuthContext);

  const { value: email, bind: bindEmail } = useInput('');
  const { value: firstName, bind: bindFirstName } = useInput('');
  const { value: lastName, bind: bindLastName } = useInput('');
  const { value: organisation, bind: bindOrganisation } = useInput('');
  const { value: password, bind: bindPassword } = useInput('');
  const { value: repeatPassword, bind: bindRepeatPassword } = useInput('');

  const doRegister = (e) => {
    e.preventDefault();
    console.log(email, firstName, lastName, organisation, password, repeatPassword);
  };

  return (
    <>
      <Head>
        <title>Registreer | Gentlestudent</title>
      </Head>
      <form onSubmit={doRegister}>
        <div>
          <label htmlFor="email">Email:</label>
          <Input type="email" id="email" placeholder="Email" icon="envelope" {...bindEmail} />
        </div>

        <div>
          <label htmlFor="first-name">Voornaam:</label>
          <Input
            type="text"
            id="first-name"
            placeholder="Voornaam"
            icon="user"
            {...bindFirstName}
          />
          <label htmlFor="last-name">Achternaam:</label>
          <Input
            type="text"
            id="last-name"
            placeholder="Achternaam"
            icon="user"
            {...bindLastName}
          />
        </div>

        <div>
          <label htmlFor="organisation">Organisatie/onderwijsinstelling:</label>
          <Input
            type="text"
            id="organisation"
            placeholder="Organisatie/onderwijsinstelling"
            icon="building"
            {...bindOrganisation}
          />
        </div>

        <div>
          <label htmlFor="password">Wachtwoord:</label>
          <Input
            type="password"
            id="password"
            placeholder="Wachtwoord"
            icon="lock"
            {...bindPassword}
          />
          <label htmlFor="password-repeat">Herhaal wachtwoord:</label>
          <Input
            type="password"
            id="password-repeat"
            placeholder="Herhaal wachtwoord"
            icon="lock"
            {...bindRepeatPassword}
          />
        </div>

        <Button type="submit">Registreer</Button>
        <style jsx>
          {`
            form {
              width: 50rem;
            }
            div {
              margin-bottom: 5rem;
            }

            div > :global(div) {
              margin-bottom: 1rem;
            }

            div :global(input) {
              font-weight: bold;
            }
          `}
        </style>
      </form>
    </>
  );
};

export default Register;