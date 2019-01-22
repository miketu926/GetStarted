class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/main/main'
    else
      render json: ["Invalid email and/or password"], status: 401
    end
    
  end

  def destroy
    if current_user
      logout
      # render main page (logged out)
    else
      render json: ["Not logged in"], status: 404
    end
  end
  
end