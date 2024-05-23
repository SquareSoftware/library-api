import { ContainerModule } from 'inversify'
import { IEncryptor } from '../../infra/cryptography/contracts/encryptor'
import { Encryptor } from '../../infra/cryptography/encryptor'
import { IMediator, Mediator } from 'mediatr-ts'

const coreDeps = new ContainerModule(bind => {
  bind<IEncryptor>('Encryptor').to(Encryptor)
  bind<IMediator>('Mediator').to(Mediator)
})

export default coreDeps
