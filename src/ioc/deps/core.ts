import { ContainerModule } from 'inversify'
import { IEncryptor } from '../../infra/cryptography/contracts/encryptor'
import { Encryptor } from '../../infra/cryptography/encryptor'
import { Mediator } from '../../infra/mediator'

const coreDeps = new ContainerModule(bind => {
  bind<IEncryptor>('Encryptor').to(Encryptor)
  bind(Mediator).toSelf()
})

export default coreDeps
