class Api::TiersController < ApplicationController

  def index
    @tiers = Tier.includes(:project).all
  end

  def new
    @ptier = current_user.tiers.new
    render :new
  end

  def create
      @tier = current_user.tiers.new(tier_params)
    if @tier.save
      # render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end
  
  private

  def tier_params
    params.require(:tier).permit(:title, :description, :amount, :project_id)
  end

end