import  User  from '../../Interfaces/User';
import {prisma} from './client';
export default async function createUser(user:User){
  const {name,username} = user;
  console.log(user)
  console.log('name: ',name,'user name: ',username)
const createdUser = prisma.user.create(
  {
    data:{
      name: name,
      username: username,
    }
  }
)
return await createdUser;

}