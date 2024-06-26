import { Container, decorate, injectable } from 'inversify'
import { Controller } from 'tsoa'
import coreDeps from './deps/core'
import authDeps from './deps/auth'
import { buildProviderModule } from 'inversify-binding-decorators'

const iocContainer = new Container({ defaultScope: 'Singleton', autoBindInjectable: true })

iocContainer.load(
  coreDeps,
  authDeps
)

decorate(injectable(), Controller)

iocContainer.load(buildProviderModule());

export default iocContainer