import { ContainerModule } from 'inversify'
import { IEncryptor } from '../../infra/cryptography/contracts/encryptor'
import { Encryptor } from '../../infra/cryptography/encryptor'

const coreDeps = new ContainerModule(bind => {
  bind<IEncryptor>('Encryptor').to(Encryptor)
})

export default coreDeps
