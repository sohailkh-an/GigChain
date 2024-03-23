import {getServerSession} from 'next-auth';
import {redirect} from 'next/navigation';
import {authOptions} from '../api/auth/[...nextauth]/route';
import RegisterationForm from '../../components/registerationForm/registerationForm';

export default async function Register(){
  const session = await getServerSession(authOptions);
  if(session){
    redirect('/home');
  }
  return (
    <RegisterationForm />
  )
}