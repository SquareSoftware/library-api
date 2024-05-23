import { inject } from 'inversify'
import { IMediator } from 'mediatr-ts'
import { Controller, Route, Post, Body, SuccessResponse } from 'tsoa'
import { ISignupPayload, SignupCommand } from '../commands/auth/signup'

@Route('auth')
export class AuthController extends Controller {
  private readonly _mediator: IMediator

  constructor (
    @inject('Mediator') mediator: IMediator
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