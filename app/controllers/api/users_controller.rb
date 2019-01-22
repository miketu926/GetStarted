class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      debugger
      render 'api/users/show'
    else
      debugger
      render json: ["Email already exists"], status: 401
    end

  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
  
end