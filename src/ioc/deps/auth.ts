import { ContainerModule } from 'inversify'
import { AuthCommandHandler } from '../../commands/auth/handler'

const authDeps = new ContainerModule(bind => {
  bind(AuthCommandHandler).toSelf()
})

export default authDeps