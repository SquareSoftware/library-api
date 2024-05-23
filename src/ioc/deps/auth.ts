import { ContainerModule } from 'inversify'
import { IUserRepository } from '../../infra/repository/contracts/user'
import { AuthDeps } from '../enums/auth'
import { UserRepository } from '../../infra/repository/user'

const authDeps = new ContainerModule(bind => {
  bind<IUserRepository>(AuthDeps.UserRepository).to(UserRepository)
})

export default authDeps