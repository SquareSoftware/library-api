import { IMediator } from 'mediatr-ts'
import { Controller, Route, Post, Body, SuccessResponse } from 'tsoa'
import { ISignupPayload, SignupCommand } from '../commands/auth/signup'
import { provideSingleton } from '../util/provide-singleton'
import mediator from '../infra/mediator'

@Route('auth')
@provideSingleton(AuthController)
export class AuthController extends Controller {
  private readonly _mediator: IMediator

  constructor (
  ) {
    super()

    this._mediator = mediator
  }

  @SuccessResponse(201)
  @Post('signup')
  async signup (
    @Body() payload: ISignupPayload 
  ): Promise<void>
  {
    this._mediator.send(new SignupCommand(payload))
  }
}